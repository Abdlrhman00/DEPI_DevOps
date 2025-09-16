"try to delete one pod and tell what happend"
Kubernetes will immediately create a new pod because the Deployment maintains the replica count.

Difference between ReplicaSet vs Deployment:
ReplicaSet ensures the correct number of pods.
Deployment manages ReplicaSets, allows rollout, rollback, versioning.