#!/bin/bash
set -euo pipefail

echo "*** Building...***"
# this is required since some parameter needs to be passed
# to the frontend build process, eg NETWORK=mainnet
npm run build 
echo "Build complete"

echo "Starting..."
pm2-runtime ecosystem.config.js