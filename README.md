# workshop-docker 1

Steps:

Build Image from Dockerfile:

```shell
$ cd projectDir
$ docker build -t <yourname>:<random-tag> .
```

Ensure Docker Image was Created:
```shell
$ docker images

# List Of Images
REPOSITORY           TAG                 IMAGE ID            CREATED             SIZE
trash                1.0                 ccfd9c41f08e        39 hours ago        904MB
buddyarifin/nodejs   sample-1.0          9cdbd2e36cd9        41 hours ago        906MB
node                 10                  4ae749096a47        2 weeks ago         904MB
jenkins              latest              cd14cecfdb3a        12 months ago       696MB
```

Start Container using new images:
```shell
$ docker run -p 8080:8080 -d buddyarifin/nodejs:sample-1.0
```
note:
- -p : forwarding port from host to container
- -d : allow container run in the background

Ensure Container already started:
```shell
$ docker ps

#list of container
CONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS              PORTS                    NAMES
b76befe471dc        buddyarifin/nodejs:sample-1.0   "docker-entrypoint.s…"   2 seconds ago       Up 1 second         0.0.0.0:8080->8080/tcp   adoring_williamson
```

Stop Container:

```shell
# docker stop <container-id>
$ docker stop b76befe471dc`
```