# Nodejs Authentication

A NodeJs-ExpressJs and MongoDB complete authentication system which enables the feature of user sign in and sign up using Passport and also has the feature of reset password 
and Google Sign In, which can be used as a starter code for any application

# Folder Structure
        |-- assets
        |-- |-- css
        |-- |-- img 
        |-- |-- js
        |-- config
        |-- |-- middleware.js
        |-- |-- mongoose.js
        |-- |-- passport-google-oauth2-strategy.js         
        |-- |-- passport-local-strategy.js 
        |-- controller
        |-- |-- home_controller.js 
        |-- |-- user_controller.js 
        |-- models
        |-- |-- user.js   
        |-- node_modules
        |-- routes
        |-- |-- index.js 
        |-- |-- user.js 
        |-- views
        |-- |-- _footer.ejs 
        |-- |-- _header.ejs 
        |-- |-- home.ejs 
        |-- |-- layout.ejs 
        |-- |-- reset_password.ejs 
        |-- |-- user_profile.ejs 
        |-- |-- user_sign_in.ejs 
        |-- |-- user_sign_up.ejs 
        |-- .gitignore 
        |-- index.js 
        |-- package-lock.json 
        |-- package.json
        
# Setup the project on Local System
* Clone the repository<br>
`git clone https://github.com/sahaj993/socialspark.git`<br>
* Install the dependances<br>
`npm install`<br>
* Start the server<br>
`npm start`
* Follow the following routes
        
# Routes
`localhost:8000`<br> Start the server<br><br>
<img src="https://user-images.githubusercontent.com/51825888/96632296-216e4000-1335-11eb-9899-8bb73d7f0177.jpg" height="400"></img><br>

`localhost:8000/user/sign-up`<br> Registers a new user<br><br>
<img src="https://user-images.githubusercontent.com/51825888/96632914-0d770e00-1336-11eb-90d8-cdcafb4b0d4d.jpg" height="400"></img><br>

`localhost:8000/user/sign-in`<br> Logs in a new user<br><br>
<img src="https://user-images.githubusercontent.com/51825888/96632916-0e0fa480-1336-11eb-9d75-252f76fe1fd4.jpg" height="400"></img><br>

`localhost:8000/user/auth/google`<br> Logs in the user using Google Authentication<br><br>
<img src="https://user-images.githubusercontent.com/51825888/96635635-bd01af80-1339-11eb-9a3d-b9f7e38df441.jpg" height="400"></img><br>

`localhost:8000/user/profile`<br> Renders the profile page for the signed in user<br><br>
<img src="https://user-images.githubusercontent.com/51825888/96632944-1536b280-1336-11eb-9d69-fc5d8a5a3a4b.jpg" height="400"></img><br>

`localhost:8000/user/password-reset`<br> Reset the password for the logged in user <br><br>
<img src="https://user-images.githubusercontent.com/51825888/96632925-110a9500-1336-11eb-9e28-8ac5fccd4ca3.jpg" height="400"></img><br>
