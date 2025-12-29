# Closure-Based Counter

A mini JavaScript module demonstrating **closures** and **data encapsulation**.

## Concept
This project uses a closure to keep the `counter` variable private—only accessible through returned methods (`add`, `reset`). This prevents external code from modifying the state directly, improving reliability and security.

## How It Works
- `Counter()` creates a new scope with a private `counter`.
- The returned object exposes only controlled ways to interact with it.
- Each instance maintains its own independent state.

## Files
- `counter.js` – Closure module + DOM logic  
- `counter.html` – Simple UI to test the counter