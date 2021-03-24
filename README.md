# Handel

This is a web application dedicated to managing user information with JWT authentication.
Developed with the MERN stack for the RIFSON music and language school in the city of Potosi, which is part of the Handel project presented at the Domingo Savio University for a degree in systems engineering.

Users can register and create analysis instances that can then contain musical information from an audio file served and obtained from a [Django Server](https://github.com/gaaps579/HandelB-OaF)

<img src="Images/Logo.png" height="200">

## Requierements

- node 14.x or above
- npm 6.x or above
- Set environment variables in /server for the Backend server on a ".env" file with the connection string on it to an instance of MongoDB  with this structure:
~~~
PORT = <Your Port for server>
MONGO_URI= <Your Mongo string connection>
~~~
- Recomended OS - [Ubuntu 18.04](https://releases.ubuntu.com/18.04/)
---
## Basic Setup
Repo clone and install dependencies with a user write permissions
~~~
git clone https://github.com/gaaps579MERNHANDEL.git
cd MERNHANDEL
npm install
cd server/ 
npm install
~~~
Run development environment for client
>`$ npm run dev`

In another terminal for server
>`$ cd server/` `$ npm run dev`

## Another available commands for client
>`$ npm run test` also available for server
>
>`$ npm run build` 
>`$ npm run test:verbose`
>`$ npm run preinstall`
