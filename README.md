# Profile SDK WebdriverIO + Appium Automation Framework

The following instruccions are meant to serve as a referece for the set up of WebdriverIO and Appium to run automated end-to-end tests in a local machine.

The following steps must be accomplished in order to be able to execute the automated tests:
Check the value of JAVA_HOME:
```
echo $JAVA_HOME
```


## Install the latest version of Java
Navigate to [Java SE Downloads](https://www.oracle.com/technetwork/java/javase/downloads/index.html) and download the latest version of Java.
```
It is required to add a JAVA_HOME to the PATH variable. From terminal type the following command: open -e ~/.bash_profile
In the text editor add the variable:
```
export JAVA_HOME=$<path to Java folder on your local machine>
```
Save and close the file. In terminal, run the following to apply the changes: source ~/.bash_profile
```
Run the following command in terminal: 
```
java -version
```

## Install the Android SDK and Platform Tools
* [Android Studio Download Link](https://developer.android.com/studio?pkg=studio)

Add the ANDROID_HOME path to your PATH variable. From terminal type the following command: open -e ~/.bash_profile and add the following:
```
export ANDROID_HOME=$<path to the Android SDK on your local machine>
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Save and close the file. In terminal, run the following to apply the changes:
```
source ~/.bash_profile
```

## Installing Appium dependencies

Install Homebrew.  This will assist with installing dependencies from the command line
```
https://docs.brew.sh/Installation.html
```
Install Ruby. From the command line, type the following:
```
brew install ruby
```
Install Node. From the command line, type the following:
```
brew instsall node
```
Install Appium. From the command line, type the following:
```
npm install -g appium
```
Install Appium Client. From the command line, type the following:
```
npm install wd 
```
Install Appium Doctor. This will check for necessary and optional dependencies when running Appium. From the command line, type the following:
```
npm install -g appium-doctor
```
To verify that all necessary dependencies have been installed successfully, run the following from the command line:
```
appium-doctor --android
```

## Running Appium Server
To start the appium server, run the following from the command line
```
appium
```

## Steps to run the Appium test suite
Make sure that appium server is running.
Ensure an Android emulator is running or an Android device is connected to your local machine.(Connected device requires USB debugging enabled).
Appium requires an .apk file saved in the root of the project to be installed on the test device/emulator.