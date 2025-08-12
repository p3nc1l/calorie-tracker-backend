#!/bin/sh

echo "Setting up cron job for automated monthly renewal..."

echo "#!/bin/sh" > $HOME/renew-certificate.sh

echo "cd \"$(pwd)\"" >> $HOME/renew-certificate.sh

echo "./install-certificate.sh" >> $HOME/renew-certificate.sh

chmod +x $HOME/renew-certificate.sh

crontab -l > ./old-crontab

echo "@monthly $HOME/renew-certificate.sh" >> ./old-crontab

crontab ./old-crontab

rm ./old-crontab