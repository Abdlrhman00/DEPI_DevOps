# Task 4 — Multi-Container Pod

## What happens here?
- We run a **Pod with 2 containers**:
  - First container: Nginx listening on port 80.
  - Second container: Nginx with port changed to 50 using a **ConfigMap**.
- Both containers share a volume to edit `index.html`.
- We expose them with a Service.
