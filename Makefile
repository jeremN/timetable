.PHONY: start stop

# INSTALL
install: .install-app .install-api

install-app:
  cd app && npm ci

install-api:
  cd api && npm ci

build:
  docker compose build

start:
  docker compose up -d

stop:
  docker compose down
