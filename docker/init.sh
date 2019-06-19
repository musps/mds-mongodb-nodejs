#! /bin/bash

mongod --port 30001 --replSet my-mongo-set --bind_ip_all &>/dev/null &

sleep 5

cfg="{
    _id: 'my-mongo-set',
    members: [
        {_id: 1, host: 'mongo1:30001'},
        {_id: 2, host: 'mongo2:30002'},
        {_id: 3, host: 'mongo3:30003'}
    ]
}"

mongo --port 30001 --eval "JSON.stringify(db.adminCommand({'replSetInitiate' : $cfg}))"
