# Getting started
You can simply run the application through the following command:
```
docker-compose up -d
```

This will build both frontend and backend images and initialise three containers: backend, frontend, postgres

Both frontend and backend containers are configured for developement purpose, modifications made on local are mounted on docker containers.

## Backend
On backend startup, professioanl schema is created in postgres database, then some onboarding professionals are added to the database for testing purposes. 

Some of professionals have 64 base encoded pictures, others have empty pictures to not overload the initialization file.
NB: Prisma resolvers are generated automatically


## Frontend
