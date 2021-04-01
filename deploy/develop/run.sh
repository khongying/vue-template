docker login registry.gitlab.com
DOCKER_NAME=innova.ui
DOCKER_VERSION=staging.v.1.0.1
DOCKER_REGISTRY=registry.gitlab.com/innova6/$DOCKER_NAME:$DOCKER_VERSION
docker pull $DOCKER_REGISTRY
docker rm -f $DOCKER_NAME || true

docker run -d \
  -it \
  --network=innova-network \
  -p 21303:80 \
  --name $DOCKER_NAME \
  $DOCKER_REGISTRY

exit
