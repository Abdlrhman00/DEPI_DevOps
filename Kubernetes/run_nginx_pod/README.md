# Task 1 — Nginx Pod with ConfigMap, PV/PVC, and Service

## What happens here?
- We create a **ConfigMap** to change the default Nginx port from `80` to `82`.
- We mount a **PersistentVolume** (PV) and **PersistentVolumeClaim** (PVC) to store an `index.html` page on the cluster host.
- We run an **Nginx Pod** that uses the config and volume.
- We expose it with a **ClusterIP Service** so other Pods can reach it.
- Finally, we test with `curl` to the Pod IP and Service IP.
