#! /bin/bash

# wine & repos
cd ~/Downloads
wget -o – https://dl.winehq.org/wine-builds/winehq.key
sudo apt-key add winehq.key
sudo apt-add-repository https://dl.winehq.org/wine-builds/ubuntu
sudo dpkg --add-architecture i386
sudo apt install winehq-stable

# tools n stuff
sudo apt install aptitude

# the big boys
sudo apt install lutris
sudo apt install brave-browser
sudo apt install steam