#!/bin/sh

source ./.env
source ./.env.local

echo "Installing certificate..."

docker run --rm -p 80:80 -v "$HOME/letsencrypt:/etc/letsencrypt" certbot/certbot certonly --force-renewal --standalone --agree-tos -d $DOMAIN