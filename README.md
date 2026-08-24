# Rubik's Cube Solver

An interactive web Rubik's Cube with a self-solving algorithm (Pochmann's method). Paired with a [FastAPI backend](https://github.com/aeroblade525/rubiks-cube-backend) that computes the solve.

Built with React + Vite.

## Controls

| Move | Key | Inverse | Key |
|------|-----|---------|-----|
| L    | 1   | L'      | q   |
| M    | 2   | M'      | w   |
| R    | 3   | R'      | e   |
| F    | 4   | F'      | r   |
| S    | 5   | S'      | t   |
| B    | 6   | B'      | y   |
| U    | 7   | U'      | u   |
| E    | 8   | E'      | i   |
| D    | 9   | D'      | o   |

## Running locally (without Docker)

```bash
npm install
npm run dev
```

By default this expects the backend running at the URL set in `.env` (`VITE_BACKEND_API_URL`).

## Running with Docker

```bash
docker build --build-arg VITE_BACKEND_API_URL=http://127.0.0.1:8000 -t rubiks-frontend:v1 .
docker run -p 8080:80 rubiks-frontend:v1
```

## Running with Kubernetes (local dev via minikube)

This app runs as two containers in a local Kubernetes cluster (minikube): this frontend, and the [backend](https://github.com/aeroblade525/rubiks-cube-backend). On Windows with the Docker driver, you need **three terminal windows** running simultaneously.

> **Note:** these steps are written for Windows + PowerShell + Docker Desktop's `docker` driver. Some commands differ slightly on Mac/Linux.

### One-time setup
- Docker Desktop running
- minikube installed and started: `minikube start`
- Both repos cloned locally

### Every time you want to run it

**Window A — Docker daemon (for building images)**
```powershell
minikube docker-env | Invoke-Expression
```
Check the top line of any `docker build` output afterward — it should say `docker:default`, not `docker:desktop-linux`. If it ever says the latter, re-run the command above; it means this terminal reverted to your normal Docker Desktop daemon instead of minikube's.

**Build both images (still in Window A):**
```powershell
cd path\to\rubiks-cube-backend
docker build -t rubiks-solver:v1 .

cd path\to\rubiks-cube-fe
docker build --build-arg VITE_BACKEND_API_URL=http://127.0.0.1:PORT -t rubiks-frontend:v1 .
```
`VITE_BACKEND_API_URL` must point at the *backend's tunnel URL* (see Window B below) — it only exists after that tunnel is running once, so build the frontend last, after starting the backend tunnel.

**Apply/reapply the Kubernetes YAML (any terminal, first time only or after YAML changes):**
```powershell
kubectl apply -f k8s/backend-deployment.yaml   # from the backend repo
kubectl apply -f k8s/frontend-deployment.yaml  # from the frontend repo
```

**After rebuilding either image, always recreate its pod** (Kubernetes won't pick up a new image on its own):
```powershell
kubectl delete pod -l app=solver-backend    # or solver-frontend
kubectl get pods -w
```
Wait for `1/1 Running`, then Ctrl+C.

**Window B — backend tunnel (leave open, don't type in it)**
```powershell
minikube service solver-service --url
```
Copy the `http://127.0.0.1:XXXXX` it prints — this is the URL to use for `VITE_BACKEND_API_URL` when building the frontend.

**Window C — frontend tunnel (leave open, don't type in it)**
```powershell
minikube service frontend-service
```
Opens the app in your browser at another `127.0.0.1:XXXXX` address.

### Rebuild checklist (avoid re-debugging this every time)
- [ ] Confirm Window A shows `docker:default` before building
- [ ] Confirm you're in the right repo folder before `docker build` (check for `npm`/`vite` steps for frontend, `pip`/`app/` steps for backend — mixing these up silently tags the wrong project)
- [ ] After any rebuild, delete the pod and wait for `Running` before testing
- [ ] After deleting the frontend pod, restart its tunnel (Window C) fresh — old tunnels break when their pod is deleted
- [ ] Hard refresh (Ctrl+Shift+R) or use Incognito to avoid testing a stale cached JS bundle
- [ ] Backend needs `VITE_BACKEND_API_URL` to be the tunnel URL from Window B, not `localhost`, not the raw NodePort, and not the cluster-internal `solver-service` name — none of those are reachable from the browser on Windows

## Project structure
```
src/
  api/          Calls to the backend /solve endpoint
  ui/           React components
algorithm/      Cube state array + move conversion logic
cubesAndTurns/  Move queue and turn management
k8s/            Kubernetes deployment and service manifests
Dockerfile
nginx.conf
```
