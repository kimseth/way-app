# WAY App Starter Template 👋

This is a starter template for the App.

## Get started

1. We use React Native and Expo to develop our App.

   - You need to install NodeJs to run the React Native application. For more information: 
     https://reactnative.dev/docs/set-up-your-environment
   - Setup the enviroment: 
     https://docs.expo.dev/get-started/set-up-your-environment/

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the local development server

   ```bash
    npx expo start
   ```
3. To build the development server
   
   ### Install expo-dev-client library
     
     To initialize our project for a development build, let's cd inside our project directory and run the following command to install the library:
     
   ```bash
   npx expo install expo-dev-client
   ```
   
   ### Start the development server
  
     Run the npx expo start to start the development server:

     ```bash
     npx expo start
     ```
4. Initialize a development build

   ### Install EAS CLI
   
   We need to install the EAS Command Line Interface (CLI) tool as a global dependency on our local machine. Run the following command:

   ```bash
   npm install -g eas-cli
   ```

   ### Log in or sign up for an Expo account

   ```bash
   eas login
   ```

   ### Initialize and link the project to EAS

   For any new project, the first step is to initialize and link it to the EAS servers. Run the following command:
   
   ```bash
   eas init
   ```

   5. Configure project for EAS Build
  
      ### To set up our project for EAS Build, run the following command:

      ```bash
      eas build:configure
      ```
      
# HELLO WORLD 
