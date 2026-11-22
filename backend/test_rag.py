import sys
import os
sys.path.append(os.path.dirname(__file__))
from app import retrieve_passages

monuments = ['hampi', 'taj-mahal', 'ellora', 'konark']
questions = [
    'Tell me about the musical pillars and stone chariot.',
    'Why was the Taj Mahal built and what is pietra dura?',
    'Explain the top-down excavation of Kailasa temple.',
    'What do the 24 wheels and 7 horses represent?'
]

for m, q in zip(monuments, questions):
    passages, refs = retrieve_passages(m, q)
    print(f"=== Monument: {m} ===")
    print(f"Question: '{q}'")
    print(f"Passages retrieved: {len(passages)}")
    for p in passages:
        print(f"  - [{p['category']}] {p['title']}")
    print(f"References retrieved: {len(refs)}")
    for r in refs:
        print(f"    * {r['title']} ({r['source']})")
    print()
