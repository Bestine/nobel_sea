# Nobel Sea

**Directory Structure**

```
nobel_sea/
│── README.md                # Project overview
│── requirements.txt         # Python dependencies
│── environment.yml          # (Optional) Conda/virtual env file
│── .gitignore               # Ignore unnecessary files
│
├── docs/                    # Documentation
│   ├── proposal.md           # Project proposal / pitch
│   ├── research_notes.md     # Notes on AI + recycling + marine pollution
│   └── design_mockups/       # Wireframes, sketches, UI/UX drafts
│
├── data/                    # Data storage
│   ├── raw/                 # Unprocessed datasets (images, sensors)
│   ├── processed/           # Cleaned datasets
│   └── external/            # External references (downloaded sets, APIs)
│
├── notebooks/               # Jupyter/R notebooks for exploration
│   ├── eda.ipynb             # Data exploration
│   ├── model_prototype.ipynb # AI prototyping
│   └── visualization.ipynb   # Data viz and results
│
├── src/                     # Source code
│   ├── __init__.py
│   ├── ai/                  # AI & ML models
│   │   ├── detection.py      # Plastic detection model
│   │   ├── training.py       # Training pipeline
│   │   └── evaluation.py     # Model evaluation
│   │
│   ├── data_pipeline/       # Data engineering
│   │   ├── preprocess.py     # Data cleaning
│   │   ├── augment.py        # Image augmentation
│   │   └── loaders.py        # Data loaders
│   │
│   ├── hardware/            # Robotics/collection system
│   │   └── control_scripts/  # Arduino/RPi or drone control scripts
│   │
│   ├── marketplace/         # Marketplace development
│   │   ├── backend/         # APIs, DB models
│   │   ├── frontend/        # React/Next.js or Streamlit for dashboards
│   │   └── utils/
│   │
│   └── community/           # Engagement & product pipeline
│       └── product_designs/ # 3D models, CAD files for crafts/bricks
│
├── tests/                   # Unit/integration tests
│   ├── test_ai.py
│   ├── test_pipeline.py
│   └── test_marketplace.py
│
├── deployments/             # Deployment configs
│   ├── docker/              # Dockerfiles
│   ├── airflow/             # ETL pipeline orchestration
│   └── streamlit/           # Demo dashboards
│
└── scripts/                 # Utility scripts
    ├── download_data.py
    ├── run_training.py
    └── run_inference.py
```

## AI Assistants

### Nobel Sea RAG Travel Itinerary Assistant (Terminal Prototype)

### Quickstart

1. **Create and activate a virtual environment:**

   ```sh
   python -m venv .venv
   source .venv/bin/activate
   ```

2. **Install dependencies:**

   ```sh
   pip install -r AI-engine/requirements.txt
   ```

3. **Copy and edit environment variables:**

   ```sh
   cp AI-engine/.env.example .env
   # Edit .env and add API keys if using OpenAI, Gemini, or Ollama
   ```

4. **Ingest documents:**

   ```sh
   python AI-engine/src/ingest.py --docs-dir AI-engine/sample_docs --persist-dir AI-engine/.chroma
   ```

5. **Start chat REPL:**
   ```sh
   python AI-engine/src/chat_terminal.py --mode local --persist-dir AI-engine/.chroma
   ```

## Modes

- `local`: HuggingFace embeddings + local HF model (no API keys needed)
- `openai`: OpenAI API (needs `OPENAI_API_KEY`)
- `gemini`: Google Gemini API (needs `GOOGLE_API_KEY`)
- `ollama`: Local Ollama server (needs `OLLAMA_HOST` running)

## Sample User Queries

- "Plan a 5-day budget itinerary in Diani for snorkeling and coral conservation activities."
- "What eco-friendly hotels near Mombasa allow volunteers?"
- "Give me tips for sustainable travel on the East African coast."
- "How can I join a community beach clean-up in Malindi?"
- "Suggest local guides for marine conservation tours in Watamu."

## Source Citations

- Each answer includes a list of source document chunks and similarity scores.
- Use `:sources` in chat to toggle source printing.

## Testing

- Run smoke test:
  ```sh
  python AI-engine/tests/test_smoke.py
  ```

## Troubleshooting

- If no docs found, sample docs are auto-created in `AI-engine/sample_docs/`.
- If Chroma DB is empty, re-run ingest.
- For API errors, check `.env` and keys.

---
