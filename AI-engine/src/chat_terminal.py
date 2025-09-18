import os
import argparse
from dotenv import load_dotenv
from langchain_community.vectorstores import Chroma
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory

from AI_engine.src.llm_adapters import get_llm
from AI_engine.src.utils import safe_print, format_sources

load_dotenv()

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--mode", choices=["local", "openai", "gemini", "ollama"], default="local")
    parser.add_argument("--persist-dir", default="AI-engine/.chroma")
    args = parser.parse_args()

    # Load vectorstore
    if not os.path.exists(args.persist_dir):
        safe_print(f"Vectorstore not found at {args.persist_dir}. Run ingest.py first.")
        return

    vectorstore = Chroma(persist_directory=args.persist_dir)
    retriever = vectorstore.as_retriever(search_kwargs={"k": 4})

    llm = get_llm(args.mode)
    memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

    chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        retriever=retriever,
        memory=memory,
        return_source_documents=True,
    )

    safe_print(f"Chat REPL started in {args.mode.upper()} mode. Type ':quit' to exit, ':sources' to toggle sources.")
    show_sources = True
    chat_history = []

    while True:
        query = input("\nYou: ").strip()
        if query in [":quit", ":exit"]:
            safe_print("Goodbye!")
            break
        if query == ":sources":
            show_sources = not show_sources
            safe_print(f"Source printing {'enabled' if show_sources else 'disabled'}.")
            continue
        if not query:
            continue

        result = chain({"question": query, "chat_history": chat_history})
        answer = result["answer"]
        sources = result.get("source_documents", [])

        safe_print(f"\nAssistant: {answer}")
        if show_sources and sources:
            safe_print(format_sources(sources))

        chat_history.append((query, answer))

if __name__ == "__main__":
    main()