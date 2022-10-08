#!/bin/bash
sudo apt-get install curl -y
curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh 
sudo apt install nodejs -y
sudo npm install -g npm@latest
sudo npm install -g @angular/cli