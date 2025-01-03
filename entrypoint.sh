#!/bin/bash

# Define the path to the environment.js file
ENV_FILE=/usr/share/nginx/html/assets/environment.js

# Generate the environment.js file dynamically
cat <<EOF > $ENV_FILE
window.__env = {
  APP_URL: "${APP_URL}",
  ENV_NAME: "${ENV_NAME}"
};
EOF

echo "Environment variables have been injected into $ENV_FILE."

# Start NGINX to serve the application
nginx -g "daemon off;"