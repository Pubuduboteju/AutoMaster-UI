# AutoMaster-UI
Frontend of this project has been developed by Angular. To run the application, you need 
- NodeJS 10 or above.
- Angular CLI 8 or above

Database configuration for Firebase

1.	Create a firebase database called serviceStations
2.	Open automaster-UI – src/environment.ts and add this firebase configuration code and enter your firebase credentials there\
```
var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
};
```
For example, this is the configuration that I did for my project:\
```
firebase: {
  apiKey: "<API key here>",
  authDomain: "automaster-vehic-1570170962915.firebaseapp.com",
  databaseURL: "https://automaster-vehic-1570170962915.firebaseio.com",
  projectId: "automaster-vehic-1570170962915",
  storageBucket: "",
  messagingSenderId: "795177726528"
}
```
 
Run these commands to run the project
```
1.	npm install
2.	ng serve
```
Now go to your browser and give url as: http://localhost:4200/
