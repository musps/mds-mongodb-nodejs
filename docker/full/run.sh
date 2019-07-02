#!/bin/sh

mkdir -p /db/1 && mkdir -p /db/2 && mkdir -p /db/3
mkdir -p /log/1 && mkdir -p /log/2 && mkdir -p /log/3

nohup mongod --port 30001 --replSet my-mongo-set --bind_ip 0.0.0.0 --fork --logpath /log/1/mongodb.log --dbpath /db/1
nohup mongod --port 30002 --replSet my-mongo-set --bind_ip 0.0.0.0 --fork --logpath /log/2/mongodb.log --dbpath /db/2
nohup mongod --port 30003 --replSet my-mongo-set --bind_ip 0.0.0.0 --fork --logpath /log/3/mongodb.log --dbpath /db/3

sleep 3

cfg="{
    _id: 'my-mongo-set',
    members: [
        {_id: 1, host: 'localhost:30001'},
        {_id: 2, host: 'localhost:30002'},
        {_id: 3, host: 'localhost:30003'}
    ]
}"

mongo --port 30001 --eval "JSON.stringify(db.adminCommand({'replSetInitiate' : $cfg}))"

tail -f /dev/null


mkdir -p /test/{1,2,3}