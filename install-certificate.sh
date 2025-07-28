#!/bin/sh

docker run -it --rm -p 80:80 -v "./letsencrypt:/etc/letsencrypt" certbot/certbot certonly --standalone --agree-tos