#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Starting Zephyr iOS bundle with browser auth..."
echo "If a browser window opens, complete login at app.zephyr-cloud.io"

# Provide a TTY so Zephyr can prompt and open the browser.
script -q /tmp/zephyr-bundle.log bash -c 'printf "\n" | ZC=1 npm run bundle:ios' &
BUNDLE_PID=$!

AUTH_URL=""
for _ in $(seq 1 60); do
  if grep -o 'https://auth.zephyr-cloud.io/authorize[^ ]*' /tmp/zephyr-bundle.log 2>/dev/null | head -1 | read -r url; then
    AUTH_URL="$url"
    break
  fi
  sleep 1
done

if [[ -n "${AUTH_URL}" ]]; then
  echo "Opening Zephyr login: ${AUTH_URL}"
  open "${AUTH_URL}" || true
fi

wait "${BUNDLE_PID}"
