# Task 5 — Namespace with Resource Quota

## What happens here?
- We create a new namespace `depi`.
- We add a **ResourceQuota** that limits:
  - Max 1 Pod
  - Max 1 Deployment
- When we try to create a Deployment with 3 replicas:
  - Only 1 Pod runs.
  - Others are blocked because of the quota.
