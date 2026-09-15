# Automated website deployment setup

## Branches

| Branch    | Environment        | Server directory                      | Service                     |
| --------- | ------------------ | ------------------------------------- | --------------------------- |
| `develop` | test website       | `/data/www/chicha-website-test`       | `chicha-website-test`       |
| `main`    | production website | `/data/www/chicha-website-production` | `chicha-website-production` |

The workflow builds the TanStack Start website, uploads only `dist/`, and restarts an isolated Node 22 Docker service. It never uploads `node_modules`, `.env` files, or private keys.

## GitHub repository secrets

In `zyycjjj/chicha-website` → **Settings** → **Secrets and variables** → **Actions**, create these repository secrets:

| Secret                | Purpose                                             |
| --------------------- | --------------------------------------------------- |
| `SSH_DEV_HOST`        | Test server IP or hostname.                         |
| `SSH_DEV_USER`        | Test SSH user, currently `ec2-user`.                |
| `SSH_DEV_PRIVATE_KEY` | The full test-server PEM private-key content.       |
| `SSH_PRO_HOST`        | Production server IP or hostname.                   |
| `SSH_PRO_USER`        | Production SSH user.                                |
| `SSH_PRO_PRIVATE_KEY` | The full production-server PEM private-key content. |

Do not commit a PEM file. Paste its complete contents directly into the corresponding GitHub secret.

## One-time server installation

Copy the appropriate service file from `ops/systemd/` to `/etc/systemd/system/`, then run:

```bash
sudo systemctl daemon-reload
sudo systemctl enable chicha-website-test
```

The test service deliberately does not need to start until the first GitHub Actions deployment has uploaded `dist/`.

## Before root-domain cutover

The service listening on `127.0.0.1:3100` is deliberately not exposed publicly. Verify it through Nginx only after an initial successful deployment. Preserve `payx.mobi/api/*`, `/wss`, `/upload/*`, payment callbacks, and explicit legacy-business redirects before proxying other root-domain requests to the website service.
