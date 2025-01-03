# Step 1: Build the Angular application
FROM node:18 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular application for production
RUN npm run build -- --configuration=production

# Step 2: Serve the application with NGINX
FROM nginx:1.23

# Copy the built Angular app to the NGINX HTML directory
COPY --from=build /app/dist/TheoryAIWebsite /usr/share/nginx/html

# Add a script to replace placeholders with environment variables
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Replace the default NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Use the startup script as the entry point
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
