#!/bin/sh

docker run -it --rm -p 80:80 -v "./cert:/etc/letsencrypt/live" certbot/certbot certonly --standalone --agree-tos