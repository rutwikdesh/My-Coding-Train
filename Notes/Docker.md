# Docker Commands for Interview Prep

## Basic Container Management
- `docker ps`: Lists all running containers
- `docker ps -a`: Lists all containers, including stopped ones
- `docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`: Run a command in a new container
  - `-d`: Run container in background (detached mode)
  - `--name`: Assign a name to the container
  - `-p`: Publish container's port to host (format: hostPort:containerPort)
  - `-e`: Set environment variables
  - `-v`: Bind mount a volume
  - `--rm`: Automatically remove container when it exits
  - `-it`: Interactive terminal (combine -i and -t)
- `docker start CONTAINER`: Start one or more stopped containers
- `docker stop CONTAINER`: Stop one or more running containers
- `docker restart CONTAINER`: Restart one or more containers
- `docker pause CONTAINER`: Pause all processes within a container
- `docker unpause CONTAINER`: Unpause a container
- `docker kill CONTAINER`: Kill one or more running containers (SIGKILL)
- `docker rm CONTAINER`: Remove one or more containers (must be stopped first unless using `-f`)
- `docker rename CONTAINER NEW_NAME`: Rename a container
- `docker update CONTAINER`: Update configuration of one or more containers
- `docker wait CONTAINER`: Block until container stops, then print exit code

## Image Management
- `docker images`: Lists all Docker images on the system
- `docker images -a`: Show all images (including intermediate ones)
- `docker pull IMAGE[:TAG]`: Pull an image or a repository from a registry
- `docker push IMAGE[:TAG]`: Push an image or a repository to a registry
- `docker build [OPTIONS] PATH | URL | -`: Build an image from a Dockerfile
  - `-t`: Tag the image (format: name:tag)
  - `--no-cache`: Do not use cache when building
  - `-f`: Specify Dockerfile name (default: Dockerfile)
- `docker rmi IMAGE[:TAG]`: Remove one or more images
- `docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]`: Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
- `docker commit CONTAINER [REPOSITORY[:TAG]]`: Create a new image from a container's changes
- `docker save IMAGE > FILE.tar`: Save one or more images to a tar archive
- `docker load < FILE.tar`: Load an image from a tar archive or STDIN
- `docker history IMAGE`: Show the history of an image
- `docker inspect IMAGE|CONTAINER`: Return low-level information on Docker objects
- `docker image prune`: Remove unused images
- `docker image prune -a`: Remove all unused images (not just dangling)

## Networking
- `docker network ls`: List networks
- `docker network inspect NETWORK`: Display detailed information on one or more networks
- `docker network create [OPTIONS] NETWORK`: Create a network
  - `--driver`: Driver to manage the Network (default: bridge)
  - `--subnet`: Subnet in CIDR format
  - `--gateway`: IPv4 or IPv6 Gateway for the master subnet
- `docker network rm NETWORK`: Remove one or more networks
- `docker network connect NETWORK CONTAINER`: Connect a container to a network
- `docker network disconnect NETWORK CONTAINER`: Disconnect a container from a network

## Volumes
- `docker volume ls`: List volumes
- `docker volume create [OPTIONS] VOLUME`: Create a volume
- `docker volume inspect VOLUME`: Display detailed information on one or more volumes
- `docker volume rm VOLUME`: Remove one or more volumes
- `docker volume prune`: Remove all unused volumes
- `docker run -v VOLUME_NAME:/path/in/container ...`: Mount a volume
- `docker run -v /host/path:/path/in/container ...`: Bind mount a host directory
- `docker run --mount type=volume,source=VOLUME_NAME,target=/path/in/container ...`: Mount using --mount syntax (more verbose but explicit)

## Docker Compose
- `docker-compose up [OPTIONS]`: Create and start containers
  - `-d`: Detached mode
  - `--build`: Build images before starting containers
  - `--scale SERVICE=NUM`: Scale SERVICE to NUM instances
- `docker-compose down`: Stop and remove containers, networks, images, and volumes
- `docker-compose ps`: List containers
- `docker-compose logs [OPTIONS] [SERVICE...]`: View output from containers
- `docker-compose exec SERVICE COMMAND`: Run a command in a running container
- `docker-compose build [OPTIONS] [SERVICE...]`: Build or rebuild services
- `docker-compose pull [SERVICE...]`: Pull service images
- `docker-compose push [SERVICE...]`: Push service images
- `docker-compose config`: Validate and view the Compose file
- `docker-compose restart [SERVICE...]`: Restart services
- `docker-compose rm [OPTIONS] [SERVICE...]`: Remove stopped service containers

## Dockerfile Instructions
- `FROM`: Set the base image for subsequent instructions
- `LABEL`: Add metadata to an image
- `RUN`: Execute commands in a new layer on top of the current image and commit
- `CMD`: Provide defaults for an executing container (only last CMD takes effect)
- `EXPOSE`: Inform Docker that the container listens on specific network ports at runtime
- `ENV`: Set environment variables
- `ADD`: Copy files/directories from a source to the filesystem of the container at a specified path
- `COPY`: Copy files/directories from a source to the filesystem of the container at a specified path
- `ENTRYPOINT`: Configure a container that will run as an executable
- `VOLUME`: Create a mount point with the specified name and mark it as holding externally mounted volumes
- `USER`: Set the user name (or UID) and optionally the user group (or GID)
- `WORKDIR`: Set the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow
- `ARG`: Define a variable that users can pass at build-time
- `ONBUILD`: Add a trigger instruction when the image is used as base for another build
- `HEALTHCHECK`: Tell Docker how to test a container to check that it is still working
- `STOPSIGNAL`: Set the system call signal that will be sent to the container to exit
- `SHELL`: Override the default shell used for the shell form of instructions

## Debugging and Inspection
- `docker logs [OPTIONS] CONTAINER`: Fetch the logs of a container
  - `-f`: Follow log output
  - `--tail`: Number of lines to show from the end of the logs
  - `--since`: Show logs since a timestamp
- `docker exec [OPTIONS] CONTAINER COMMAND [ARG...]`: Run a command in a running container
  - `-i`: Keep STDIN open even if not attached
  - `-t`: Allocate a pseudo-TTY
- `docker top CONTAINER`: Display the running processes of a container
- `docker inspect CONTAINER|IMAGE`: Return low-level information on Docker objects
- `docker events [OPTIONS]`: Get real time events from the server
- `docker port CONTAINER [PRIVATE_PORT[/PROTO]]`: List port mappings or a specific mapping for the container
- `docker stats [OPTIONS] [CONTAINER...]`: Display a live stream of container(s) resource usage statistics
- `docker diff CONTAINER`: Inspect changes to files or directories on a container's filesystem
- `docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-`: Copy files/folders between a container and the local filesystem
- `docker attach [OPTIONS] CONTAINER`: Attach local standard input, output, and error streams to a running container
- `docker wait CONTAINER`: Block until container stops, then print exit code
- `docker export CONTAINER`: Export a container's filesystem as a tar archive
- `docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]`: Import the contents from a tarball to create a filesystem image

## Security and Best Practices
- `docker scan IMAGE`: Scan an image for vulnerabilities (requires Docker Scout)
- `docker trust sign IMAGE`: Sign an image (Docker Content Trust)
- `docker trust revoke IMAGE`: Remove trust from an image
- `docker trust view IMAGE`: View trust data for an image
- `docker run --read-only`: Run container with read-only root filesystem
- `docker run --cap-drop=all`: Drop all Linux capabilities
- `docker run --security-opt=no-new-privileges`: Prevent processes from gaining additional privileges
- `docker run --user`: Run container as a non-root user
- `docker run --pids-limit`: Tune container pids limit
- `docker run --memory`: Limit container memory usage
- `docker run --cpus`: Limit container CPU usage
- `docker trust`: Manage trust for Docker images

## Common Interview Scenarios
1. **Difference between `docker run` and `docker create` + `docker start`**
   - `docker run` combines create and start in one command
   - `docker create` only creates the container (doesn't start it)
   - `docker start` starts an existing created container

2. **Difference between `docker stop` and `docker kill`**
   - `docker stop` sends SIGTERM then SIGKILL after grace period
   - `docker kill` sends SIGKILL immediately (or specified signal)

3. **Difference between `docker pause` and `docker stop`**
   - `docker pause` uses cgroups freezer to pause processes (no signal)
   - `docker stop` stops the container (SIGTERM then SIGKILL)

4. **How to see what changed in a container's filesystem?**
   - Use `docker diff CONTAINER`

5. **How to run a command in a container without starting a shell?**
   - Use `docker exec CONTAINER command`

6. **How to get the IP address of a container?**
   - `docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER`

7. **How to list all dangling images?**
   - `docker images -f dangling=true`

8. **How to remove all stopped containers?**
   - `docker container prune` or `docker rm $(docker ps -a -q -f status=exited)`

9. **How to see the layers of an image?**
   - `docker history IMAGE`

10. **How to build an image without using cache?**
    - `docker build --no-cache -t IMAGE .`

Note: For interview preparation, focus on understanding:
1. The difference between similar commands (run vs create+start, stop vs kill)
2. When to use which command for container lifecycle management
3. Volume mounting differences (-v vs --mount)
4. Networking concepts (bridge, host, overlay, none)
5. Dockerfile best practices (minimizing layers, using .dockerignore)
6. How to debug common container issues
7. Security implications of running containers as root
8. The purpose of common Dockerfile instructions