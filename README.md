# SandBox General

Make sure that an AWS environment has the following and install:

```
node -v

nvm -v
nvm install --lts

npm -v
npm install testem -g
npm install -g c9 or npm install -y

npm install bootstrap@5.2.2
```

bootstraps linked for formating (quick!):
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

Link SHH keys via this link:
[Github key link](https://gist.github.com/mgordanier/9ef5a570f0710cf53261c73dbca50882)

Make a local git repository using git init inside a new directory
Write some code!
Add your new code to the staging area with git add, then make a commit using git commit
Make a new remote repository on Github
Follow the instructions given after you create your repo to add your GitHub repo as a remote for your local project.
Use git push origin master to push your work up to your remote on GitHub!
Repeat until it's second nature!



## Run Code (Environment)
### Front-End Helpful Hints (for Node.js environment)


- Initial package.json & install dependencies (localhost: 3000):
```
> npx create-react-app <project name>
> cd <project name>
> npm install --save react-router-dom
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```


- Establish Firebase (see resources):
```
> npm install firebase
```
> Required for **index.js**
```
import { initializeApp } from 'firebase/app';
```
- include the remainder of the info provided by Firebase (see resources)
- Add LoginPage.js & CreateAccountPage.js to pages section
> Required for **LoginPage.js**
```
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
```
- Above depends on type of firebase



















### Back-End Helpful Hints (for Node.js environment)

- Install express:
```
> npm install express
> npm express -v
> npm list express
```
- To avoid using babble the package.json must have "type": module, added below "main": "index.js",

- Run test with Postman as needed to test calls before connecting to client end.

### Option for Linux-AWS (MongoDB Community):
- Adding with Mongodb community(yum/red hat)
```
> [mongodb-org-6.0]
> name=MongoDB Repository
> baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
> gpgcheck=1
> enabled=1
> gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```
- Install MongoDB packages:
```
> sudo yum install -y mongodb-org
> mongo --version
> npm mongodb -v
```

```
> echo -e "[mongodb-org-3.6] \nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.6/x86_64/\ngpgcheck=1 \nenabled=1 \ngpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc" | sudo tee /etc/yum.repos.d/mongodb-org-3.6.repo
> sudo yum install -y mongodb-org-shell
> mongo --version
```

- Access MongoDB shell:
```
> mongo
```
- Updated mongoDB database, collections
- A new database will need to be generated (see resources)
- Install mongoDB into the node backend:
```
> npm install mongodb
```
- Confirm function with MongoClient from mongodb.
- This will later be connected to with db.js document. 

--------------------------------------------------

- Test dev environment:
```
> npm install -g nodeman
> npx nodemon src/server.js
```
- Update package.json
- Run short cut to test back-end:
```
> npm run dev
```


--------------------------------------------------
### Option for Mac-OS (MongoDB Community):
- Install homebrew by going to the following (see resources):
 ```
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


- Confirm homebrew has been loaded:
```
> brew --version
> brew --prefix 
```
- Add mongoDB with the homebrew (additional resources):
```
> brew tap mongodb/brew
> brew update
> brew install mongosh
> brew install mongodb-community@6.0
```

- Confirm mongodb community is install: 
```
> brew services start mongodb-community@6.0
```


--------------------------------------------------
## Connecting Ends
- Install axios library to front end:
 ```
> npm install axios
> npm axios --version
```
- Add a proxy to the package.json file (8080 AWS-linux, 8000 Mac-OS)
- In package.json add "proxy": <localhost:id>
- There is also the ability to install a cors dependencies:
 ```
> npm install cors
> npm cors --version
```
- Initiate both front & backend at the same time
- Use axios (front-end) to corresponding server.js (back-end & CRUD)



--------------------------------------------------
### Additional Resources:
Hombrew Install (Mac):
- [Homebrew Alternative Install](https://docs.brew.sh/Installation#alternative-installs)
- [Homebrew Trouble Shooting](https://docs.brew.sh/Troubleshooting)

Troubleshooting:
```
> brew config
> brew doctor
```

RedHat Install (linux):
- [MongoDB Community Install](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-red-hat/)

Mongodb Install & Updates:
- [Mongodb Tutorial Install](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
- [Mongodb Shell Commands](https://www.mongodb.com/docs/mongodb-shell/write-scripts/)

FireBase Install & Other:
- [FireBase](https://firebase.google.com/)


