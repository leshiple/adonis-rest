#!/bin/bash
npm i

if [ "$DEBUG" = true ]; then
    echo "debug"
    npm run dev
else
    echo "prod"
    npm run build && npm run start
fi
