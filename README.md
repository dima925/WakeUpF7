# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Make sure you have an up-to-date version of [Node.js](http://nodejs.org/) installed on your system.
* Open Terminal (Mac) or a Command window (Windows), and type the following command to install the Cordova CLI:
```
npm install -g cordova
```
* If you already have Cordova installed on your computer, make sure you upgrade to the latest version:
```
npm update -g cordova
```
* Navigate (cd) to "myalarm" directory where you store projects on your file system.
```
cd myalarm
```
* Prepare App
```
cordova prepare ios
cordova prepare android
```
you can use Apple's Xcode SDK as an alternative to modify and compile the platform-specific code that Cordova generates within platforms/ios OR platforms/android.

* Note: You can add again the platforms on this project before build this.
```
cordova platform remove android
cordova platform add android
cordova platform remove ios
cordova platform add ios
```
* But Don't install again plugins on this project. I have changed the code of alarm plugin(cordova-plugin-wakeuptimer).
* Build and Run App.
```
cordova emulate android
cordova run android
```

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

Copyright
---------

Copyright (c) 2015 Anatoly Sokolov.