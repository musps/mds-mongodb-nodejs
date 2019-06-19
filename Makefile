docker-node:
	docker-compose up -d api

docker-node-db:
	docker-compose up -d

install-dependencies:
	docker exec -it api npm install

run-local:
	docker exec -it api npm run run-local

run-remote:
	docker exec -it api npm run run-remote

tests-local:
	docker exec -it api npm run tests-local

tests-remote:
	docker exec -it api npm run tests-remot
