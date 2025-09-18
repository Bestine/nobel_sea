import subprocess
import sys

def run_ingest():
    print("Running ingest...")
    result = subprocess.run([
        sys.executable, "AI-engine/src/ingest.py",
        "--docs-dir", "AI-engine/sample_docs",
        "--persist-dir", "AI-engine/.chroma"
    ], capture_output=True, text=True)
    print(result.stdout)
    return result.returncode == 0

def run_chat():
    print("Running chat with test query...")
    from AI_engine.src.llm_adapters import get_llm
    from langchain_community.vectorstores import Chroma
    from langchain.chains import RetrievalQA

    vectorstore = Chroma(persist_directory="AI-engine/.chroma")
    retriever = vectorstore.as_retriever(search_kwargs={"k": 2})
    llm = get_llm("local")
    chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever, return_source_documents=True)
    query = "Suggest a 3-day eco-friendly itinerary for Diani Beach."
    result = chain({"query": query})
    print("Answer:", result["result"])
    print("Sources:", [doc.metadata.get("source", "unknown") for doc in result["source_documents"]])
    return "Diani" in result["result"]

def main():
    if not run_ingest():
        print("FAIL: Ingest failed.")
        return
    if run_chat():
        print("PASS: Chat returned expected answer.")
    else:
        print("FAIL: Chat did not return expected answer.")

if __name__ == "__main__":
    main()