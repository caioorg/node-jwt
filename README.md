API NodeJS with MongoDB and JWT Token
==========================================

This project was developed with the purpose of facilitating our journey, when we need to make a system of authenticity and we do not know where to start. Here is an expensive and straightforward example of how to set up an authentication API with JWT Token and NodeJS

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)
- PM2 Monitoring - Production via [pm2](http://pm2.keymetrics.io/)
- NodeRestful via [node-restful](https://www.npmjs.com/package/node-restful)
- BCrypts support via [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- JSON Web Tokens support via [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- Mongoose support via [mongoose](https://mongoosejs.com/)
- Path support via [path](https://www.npmjs.com/package/path)
- FS support via [fs](https://www.npmjs.com/package/fs)

Getting Started
---------------

```sh
# clone it
git clone https://github.com/caioorg/node-jwt.git
cd node-jwt

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
yarn install

# Start project development
yarn run dev

# If you want to start production
yarn run build
```

Check Routes
-------------

If you want to validate the route operation by POSTMAN:
```sh
POST - Register User -> /auth/register
POST - Authenticate User ->  /auth/login
GET - Validate Token -> /checking
```

Examples Request
----------------

This [link](https://documenter.getpostman.com/view/3791312/S17us6Yi) was made available with the documentation, how to make the requests via POSTMAN.
