# Project title
Rainbox

## Relevant information
Application developed using react-native with expo framework.
Deployed into S3 after doing a build deployment with expo-web, so the native "Hover" is not implemented since this is a mobile solution without introducing patches for that.
React-native 0.63(Latest) introduced pressable(https://reactnative.dev/docs/pressable) so I could implement a very cool effect
in mobile, but expo didnt support yet.



## Test the live APP
Version Web(Hover effect is not really implemented since is coming from mobile) 
https://master.d2g2xns4gnscbk.amplifyapp.com/

Mobile version:
Loom video: https://www.loom.com/share/ecee52d537054b18aa3d5a999fb0a96e
Test in Android device: you can go to https://expo.io/@esuarez/rainbox on your laptop and scan the QR code or do the next step(Expo app)
Test in Ios: you need to download the app "Expo" on your device and open https://expo.io/@esuarez/rainbox, 
then click on "Open project using Expo". 


## Steps to build and run your application in development
### Requisites: node.js and npm.
We need to be sure we have installed amplify cli and expo-cli in our machine.
Xcode to run it in Ios simulator running npm run ios
Android studio npm run android
To test in web: npm run web

Run npm run test
 
## Design Process
I wanted to do a multiplatform solution to show a mobile and web app, so I decided to use react-native with expo,
so I could have the opportunity to do a fast MVP.
React native, helped by styled-components, and for the backend I decided to use serverless using AWS amplify.
For the api I used Apigateway.
To test the app I decided to use Jest.

In mobile we cant implement hover effect so I decided to implement it after pressinng and then removing if after 1 second.

To manage the palette of colors I fill an array appending hexadecimals randomly generated on a lambda function dispatched after call Api Gateway. I assume always we are returning back. I could send the number by parameter and if the number is not send I could return by default 5.





MIT © [Elio]()