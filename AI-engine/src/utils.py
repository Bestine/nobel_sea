import os

def safe_print(msg):
    try:
        print(msg)
    except Exception:
        print(msg.encode("utf-8", errors="ignore"))

def format_sources(sources):
    lines = ["\nSources:"]
    for i, doc in enumerate(sources):
        meta = doc.metadata
        name = meta.get("source", "unknown")
        score = meta.get("score", "n/a")
        lines.append(f"  [{i+1}] {name} (score: {score})")
    return "\n".join(lines)

def ensure_sample_docs(docs_dirs):
    # Create sample docs if none exist
    for docs_dir in docs_dirs:
        if not os.path.exists(docs_dir):
            os.makedirs(docs_dir, exist_ok=True)
        files = [f for f in os.listdir(docs_dir) if f.endswith((".md", ".txt", ".pdf"))]
        if not files:
            # Create sample .md files
            with open(os.path.join(docs_dir, "diani_beach_itinerary.md"), "w") as f:
                f.write(
                    "# Diani Beach Itinerary\n"
                    "Day 1: Arrival and check-in at eco-friendly hotel.\n"
                    "Day 2: Snorkeling tour and coral conservation workshop.\n"
                    "Day 3: Visit local community and volunteer for beach clean-up.\n"
                    "Day 4: Explore Shimba Hills National Reserve.\n"
                    "Day 5: Relax, local cuisine, and departure.\n"
                )
            with open(os.path.join(docs_dir, "eco_travel_tips.md"), "w") as f:
                f.write(
                    "# Eco Travel Tips\n"
                    "- Choose hotels with sustainability certifications.\n"
                    "- Support local artisans and guides.\n"
                    "- Participate in conservation activities.\n"
                    "- Minimize plastic use and waste.\n"
                )