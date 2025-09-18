import os
from langchain_community.llms import HuggingFacePipeline
from transformers import pipeline

# Adapters for OpenAI, Gemini, Ollama
def get_llm(mode="local"):
    """
    Returns a LangChain-compatible LLM or thin wrapper for the selected mode.
    Supported: local, openai, gemini, ollama
    """
    if mode == "local":
        # Local HF model (Flan-T5-small)
        model_name = os.getenv("MODEL_NAME", "google/flan-t5-small")
        pipe = pipeline("text2text-generation", model=model_name, max_new_tokens=256)
        return HuggingFacePipeline(pipeline=pipe)
    elif mode == "openai":
        # OpenAI API (requires openai package and OPENAI_API_KEY)
        try:
            from langchain_openai import ChatOpenAI
        except ImportError:
            raise ImportError("Install openai and langchain_openai for OpenAI mode.")
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise ValueError("OPENAI_API_KEY not set in .env")
        return ChatOpenAI(openai_api_key=api_key, model="gpt-3.5-turbo")
    elif mode == "gemini":
        # Gemini API (requires google-generativeai)
        # TODO: Fill in with actual Gemini API call or LangChain wrapper
        try:
            from langchain_google_genai import ChatGoogleGenerativeAI
        except ImportError:
            raise ImportError("Install google-generativeai and langchain_google_genai for Gemini mode.")
        api_key = os.getenv("GOOGLE_API_KEY")
        if not api_key:
            raise ValueError("GOOGLE_API_KEY not set in .env")
        # Model name can be adjusted
        return ChatGoogleGenerativeAI(google_api_key=api_key, model="gemini-pro")
    elif mode == "ollama":
        # Ollama local server (requires ollama package)
        # TODO: Fill in with actual Ollama API call or LangChain wrapper
        try:
            from langchain_community.llms import Ollama
        except ImportError:
            raise ImportError("Install ollama and langchain_community for Ollama mode.")
        host = os.getenv("OLLAMA_HOST", "http://localhost:11434")
        # Model name can be adjusted
        return Ollama(base_url=host, model="llama3")
    else:
        raise ValueError(f"Unknown mode: {mode}")
