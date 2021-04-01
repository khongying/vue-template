DOCKER_NAME=innova.ui
DOCKER_VERSION=staging.v.1.0.0
DOCKER_REGISTRY=registry.gitlab.com/innova6/$DOCKER_NAME:$DOCKER_VERSION
echo $DOCKER_VERSION
docker build --tag $DOCKER_REGISTRY . -f ./deploy/develop/Dockerfile
docker push $DOCKER_REGISTRY
docker image prune -f
