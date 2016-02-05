# Sudoers Website Components

## Getting Your System Ready

This project is built using NodeJS-based tooling. Also, it will require a few Bower-based client dependencies to properly compile and run. Follow those steps to prepare your system:

- Make sure you have installed NodeJS. We usually use [`nvm`](https://github.com/creationix/nvm) for that.
- Once `nvm` is properly installed, make sure you have the latest version of NodeJS by installing it (`nvm install node`) and then setting it as your user's default by typing `nvm alias default node`.
- Install the required global tools by issuing `npm install -g bower gulp polyserve`.


## Getting the Project's Dependencies

You'll have to install both development (NodeJS-based) and client (Bower-based) dependencies. To do so, simply issue the two following commands:

```
npm install
bower install
```


## Using this Repository

This project uses [`gulp`](http://gulpjs.com/) as its build system. Whenever a change is done to this repository, it is important that the compilation is done before pushing to the repository by issuing `gulp build`.

To get a development server up and running allowing to see the components running, issue `polyserve` and browse to this [URL](http://localhost:8080/components/sudoers-website-elements/).
