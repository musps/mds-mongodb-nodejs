docker-node:
	docker-compose up -d api

docker-db:
	docker-compose up -d mongo1 mongo2 mongo3

install-dependencies:
	docker exec -it api npm install

init-configuration:
	mv .env-example .env

run-local:
	docker exec -it api npm run run-local

run-remote:
	docker exec -it api npm run run-remote

tests-local:
	docker exec -it api npm run tests-local

tests-remote:
	docker exec -it api npm run tests-remot
