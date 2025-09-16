# Task 3 — Deployment

## What happens here?
- We create a **Deployment** with 3 replicas of Nginx.
- When we delete one Pod, the Deployment automatically creates a new one.
- This shows **self-healing** in Kubernetes.

## ReplicaSet vs Deployment
- **ReplicaSet**: Ensures the correct number of Pods are running.
- **Deployment**: Manages ReplicaSets and allows rolling updates & rollbacks.
