#!/bin/sh

sed "s/__DOMAIN__/$DOMAIN/g" /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

nginx -g "daemon off;"