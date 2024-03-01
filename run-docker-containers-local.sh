#!/bin/bash

#command to run docker compose
docker-compose -f docker-compose-local.yml up --build --remove-orphans -d
