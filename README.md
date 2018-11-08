# Docker Commands used for this project
1. `docker-compose up -d --build` this will start the servers for our db, api, and our frontend
1. `docker-compose ps`  this will show you the status of the docker containers
1. `docker-compose down` this will stop all the containers for the current project
1. `docker logs <container-name>` this will output the cli output for each of the servers
1. `psql -h localhost -U admin -d project` this will allow you to see the database
