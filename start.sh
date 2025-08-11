#!/bin/sh

echo "Stopping running compose projects from this directory..."

docker compose down

echo "Starting App..."

docker compose up --build -d