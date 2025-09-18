import os
import sys
import argparse
from tqdm import tqdm
from langchain_community.document_loaders import TextLoader, PyPDFLoader, DirectoryLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from dotenv import load_dotenv

from AI_engine.src.utils import safe_print, ensure_sample_docs

load_dotenv()

def get_docs(docs_dirs):
    docs = []
    for docs_dir in docs_dirs:
        if not os.path.exists(docs_dir):
            continue
        # Load .md and .txt
        docs += DirectoryLoader(docs_dir, glob="*.md", loader_cls=TextLoader).load()
        docs += DirectoryLoader(docs_dir, glob="*.txt", loader_cls=TextLoader).load()
        # Load .pdf
        docs += DirectoryLoader(docs_dir, glob="*.pdf", loader_cls=PyPDFLoader).load()
    return docs

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--docs-dir", nargs="+", default=["../../docs", "../../data/docs", "AI-engine/sample_docs"])
    parser.add_argument("--persist-dir", default="AI-engine/.chroma")
    args = parser.parse_args()

    # Ensure sample docs if none found
    ensure_sample_docs(args.docs_dir)

    docs = get_docs(args.docs_dir)
    if not docs:
        safe_print("No documents found. Creating sample docs...")
        ensure_sample_docs(args.docs_dir)
        docs = get_docs(args.docs_dir)

    safe_print(f"Loaded {len(docs)} documents.")

    # Split into chunks
    splitter = CharacterTextSplitter(chunk_size=400, chunk_overlap=80)
    chunks = []
    for doc in tqdm(docs, desc="Splitting docs"):
        for chunk in splitter.split_documents([doc]):
            chunks.append(chunk)

    safe_print(f"Total chunks: {len(chunks)}")

    # Embeddings
    embed_model = os.getenv("EMBEDDING_MODEL", "sentence-transformers/all-MiniLM-L6-v2")
    embeddings = HuggingFaceEmbeddings(model_name=embed_model)

    # Chroma vectorstore
    persist_dir = args.persist_dir
    vectorstore = Chroma.from_documents(chunks, embeddings, persist_directory=persist_dir)
    vectorstore.persist()

    safe_print(f"Vectorstore created at {persist_dir}")
    safe_print(f"Ingestion complete: {len(docs)} docs, {len(chunks)} chunks.")

if __name__ == "__main__":
    main()