
# Boilerplate API Rest with NodeJS + Fastify + Typescript + Jest + Docker

Starter project for a fast, simple and clean RESTful API.

Main features:

- Nodejs
- Fastify
- Typescript
- Jest
- Docker
- Nodemon
- Tslint

Extra features:

- JWT middleware authentication
- HTTP response builder (standard format with localization ids for the client)
- Utils (dates, random numbers, validations, custom console output colors)
- Example unit tests with Jest
- Extended .gitignore


## Getting Started

Requirements
- [Nodejs](https://nodejs.org/es/) & npm to run locally OR
- [Docker](https://www.docker.com/get-started) to run in docker container 

```sh
# clone it
git clone git@github.com:miqrc/fastify-typescript-docker-rest-api.git
cd fastify-typescript-docker-rest-api

# Install dependencies
npm install

# Run unit tests
npm test

# Start development live-reload server
npm run dev

# Start production server:
npm start

```

Try it
[http://127.0.0.1:8080/public](http://127.0.0.1:8080/public)

To try the authentication, a Postman collection is included in the root folder.

Docker Support
------
```sh
cd fastify-typescript-docker-rest-api

# Build docker image
docker build -t my/fast-server .

# run your docker (be sure to have the port 8080 available)
docker run -p 8080:8080 my/fast-server

```
Try it
[http://127.0.0.1:8080/public](http://127.0.0.1:8080/public)

## FILES AND FOLDERS

- controllers: business logic. Where the work is done (included some examples)
- middlewares: intermediate logic to be execute before business code (authentication)
- constants.ts: Define port and server secret 
- server.ts: API definition and server configuration

## TODO

- Apply JSON schema


## License

MIT



