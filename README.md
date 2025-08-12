# Calorie Tracker Backend

This repository contains the backend for [p3nc1l/calorie-tracker](https://github.com/p3nc1l/calorie-tracker)

## Requirements

- Linux running on the machine
- Docker installed (with Docker Compose support)
- cron installed

## Installation

### Step 1: Optional

If you want the app to listen on an other domain than the default one open .env and change the DOMAIN field's value to the preferred one

.env:

    DOMAIN={preferred-domain}

Replace {preferred-domain} with the preferred domain

### Step 2

Run the ssl certificate installer

    ./install-certificate.sh

Optional: For automated renewal of the certificate, run:

    ./install-renewal.sh

### Step 3

Create a .env.local file

    touch .env.local

### Step 4

Open .env.local with your preferred text editor and paste the following lines

    FATSECRET_CLIENT_ID=
    FATSECRET_CLIENT_SECRET=

Create an account on [FatSecret's API](https://platform.fatsecret.com/platform-api) site, if you haven't got one already and paste your OAuth 2.0 credentials.

### Step 5

Start the app

    ./start.sh

### Step 6: Optional

Install a cron job, which automatically starts the app on every startup

    ./install-startup.sh
