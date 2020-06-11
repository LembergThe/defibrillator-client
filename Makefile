build:
	sudo docker build . -t def-client
run:
	sudo docker run --rm -p 80:80 def-client
