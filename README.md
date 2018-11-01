# razzle-docker-boilerplate running on docker container

### development environment

Running container

```
docker-compose build

docker-compose up
```

Web - Test URL: http://localhost:3000
API - Test URL: http://localhost:3000/api/tabledata


### testing staging build

Build container for production environment
```
docker build -t razzle-boilerplate-staging -f web/Dockerfile.staging web/.
```

Running container for testing
```
docker run -p"3000:3000" razzle-boilerplate-staging
```

Test URL: http://localhost:3000


### testing production build

Build container for production environment
```
docker build -t razzle-boilerplate-production web/.
```

Running container for testing
```
docker run -p"3000:3000" razzle-boilerplate-production
```

Test URL: http://localhost:3000


### stopping containers

```
$ docker ps

CONTAINER ID        IMAGE               COMMAND                 CREATED             STATUS              PORTS                    NAMES
c95b19cf82b9        razzle              "yarn run start:prod"   16 seconds ago      Up 15 seconds       0.0.0.0:3000->3000/tcp   nifty_elion

$ docker stop c95b19cf82b9
```


### clean up

```
$ docker rmi razzle-boilerplate-staging razzle-boilerplate-production
```

#### Learn more about React 
[Server Side Rendering with React and Redux](https://www.udemy.com/share/100aViBUMeeFtTRHQ=/)

#### Learn more about Docker
[Docker and Kubernetes: The Complete Guide](https://www.udemy.com/share/100r9ABUMeeFtTRHQ=/)
