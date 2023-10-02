#!/bin/bash

# Run migrations
npx sequelize-cli db:migrate

# Start application
node server.js
