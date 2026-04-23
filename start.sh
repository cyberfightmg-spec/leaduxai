#!/bin/bash

cd /root/leaduxai-id

echo "Starting Next.js server..."

while true; do
    node --max-old-space-size=128 node_modules/next/dist/bin/next start -p 3000 -H 127.0.0.1 2>&1
    echo "Next.js died, restarting..."
    sleep 2
done