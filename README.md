# User Dashboard 
In this practical, we have tried to implement a scenario that you probably find in a real project where you have to display all the users, and on hover, you have to profile card and other details of the user. This practical are in two in This one we are taking data from local user Json which is hard coded but in second Practical we will do using RTK Query add get data from api.
 
 # Demo Link
 [Live Demo Link](https://master--cheerful-sunflower-4f04ed.netlify.app/)

## Technology Use
- Typescript
- React
- Redux-ToolKit
- RTK-Query

## Installation 
To clone this project flow below step.
- **Step 1:** To Clone this project Click on Top Right button Name ```Code``` click on that and copy the url.
- **Step 2:** Open Terminal or Powershell Copy the Command mention below.
  ```
  git clone git@github.com:vipulc8/user-dashboard-production.git
  ```
- **Step 3:** Above command create a file and get all the code from github and generate an copy of that project which later one you can make changes using any Editor. 
   ```
   cd user-dashboard-production
   ```
 - **Step 4:** After Running above code it will take you to that folder.To run this Practical you have to first install ```yarn``` or  if your have node pre install then user ```npm``` run following command to install all the dependency.
   ```
   npm install
   ```
   Then is will start installing all the required file for project in you local system.
   
 - **Step 5:** After install the dependency now use command ```npm run dev``` or if you are using **yarn** use ```yarn dev``` this command generate a url from which you can see the project in you browser.
## How to Create Stage and Production Build for any Application
As a developer we all have to know what next to do after the an application is ready. Hmm, Let dive in
- In any MNC's every application are build have two main build one ```Production build``` another one is ```stage build``` there is a reason to create two build for deployment.
- Basically ```stage build``` is use for testing of all the feature and then after it is added in production.

- In First we have to set ENVIRONMENT file for all mode of Enveronment for **development,stage and Production.** Format for naming ```.env.[mode]``` **example: .env.development**

- Vite uses **dotenv** to load additional environment variables
```
.env                # loaded in all cases
.evn.local          # loaded in all cases,ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```
- Vite exposes env variables on the special ```import.meta.env``` object.

- Now to create build folder we have to create a script in side ```package.json``` file. write following code,

```
"dev": "vite --mode development",
"build:prod": "tsc && vite build --outDir prodBuild --mode production",
"build:staging": "tsc && vite build --outDir stageBuild  --mode staging",
```
- You can specify your customis ``` --outDir [file name] ``` accordingly
