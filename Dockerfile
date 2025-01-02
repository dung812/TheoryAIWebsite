# Step 1: Use Node.js image to build the Angular app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install Angular CLI globally and project dependencies
RUN npm install -g @angular/cli && npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app for production
RUN ng build --configuration production

# Step 2: Use Nginx to serve the Angular app
FROM nginx:stable-alpine

# Copy the built Angular app from the build stage
COPY --from=build /app/dist/TheoryAIWebsite /usr/share/nginx/html

# Copy a custom Nginx configuration file (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
