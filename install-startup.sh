#!/bin/sh

echo "#!/bin/sh" > $HOME/start-calorie-tracker-backend.sh

echo "cd $(pwd)" >> $HOME/start-calorie-tracker-backend.sh

echo "./start.sh" >> $HOME/start-calorie-tracker-backend.sh

chmod +x $HOME/start-calorie-tracker-backend.sh

crontab -l > old-crontab

echo "@reboot $HOME/start-calorie-tracker-backend.sh" >> old-crontab

crontab old-crontab

rm old-crontab

