

docker build .

docker run -v $(pwd):/home/node/app -it --entrypoint /bin/bash 5b52391dd2c9