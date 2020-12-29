# Accounting Notebook Application

Application for money accounting system. 

Single page application that displays the user's transactions history list and current account balance

It also exposes an API for get transactions history list, post new transaction, get specific transaction by transactionId and get user's current acount balance.


## About the Application
The app is divided in two parts: 
* Server
    - Nodejs
    - Express
    - Typescript
    - Babel
* Client
    - React (using [Create React App](https://github.com/facebook/create-react-app))
    - Typescript


## How to run Application
1) Install Dependences

    In the project's root directory run
    
    ```
        npm install
   ```
    
    This will install all project's dependences and then automatically install client dependences declared in `/client/package.json` 

2) Start Application
    
    In the project's root directory run
    
    ```
        npm start
    ```
   
   This will start the the entire application in port 8080.
   
   The client application will run in [localhost:8080](localhost:8080)
   
   The API will be accessible from [localhost:8080/api/](localhost:8080/api)

## API Documentation

The API and the object modeling was defined using [this recommendations](http://agileengine.gitlab.io/interview/test-tasks/fsNDJmGOAwqCpzZx/api/#/)

* Base url `localhost:8080/api/`

### Transactions API

`localhost:8080/api/transactions`

* GET `/`

    Fetches transactions history
    
* POST `/`

    Commit new transaction to the account
    
* GET `/{transactionId}`

    Returns a single transaction object
  
### Balance API

`localhost:8080/api`

* GET `/`

    Fetches current account balance
