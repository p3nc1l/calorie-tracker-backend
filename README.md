# Calorie Tracker Backend

This repository contains the backend for [p3nc1l/calorie-tracker](https://github.com/p3nc1l/calorie-tracker)

## Requirements

- Linux running on the machine
- Docker installed (with Docker Compose support)

## Installation

### Step 1: Optional

If you want the app to listen on an other domain than the default one open .env and change the DOMAIN field's value to the preferred one

.env:

    DOMAIN=preferred domain

### Step 2

Run the ssl certificate installer

    ./install-certificate.sh

If the script doesn't have execute permissions run:

    chmod +x ./install-certificate.sh

### Step 3

Create a .env.local file

    touch .env.local

### Step 4

Open .env.local with your preferred text editor and paste the following lines

    FATSECRET_CLIENT_ID=
    FATSECRET_CLIENT_SECRET=

Create an account on [Fatsecret's API](https://platform.fatsecret.com/platform-api) site, if you haven't got one already and paste your OAuth 2.0 credentials.

### Step 5

Start the Docker Compose project

    docker compose up --build -d
