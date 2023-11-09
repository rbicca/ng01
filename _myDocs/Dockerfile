# Use an official Node.js runtime as the base image
FROM node:20-bullseye

# Set the working directory in the container
WORKDIR /app

# Install the Angular CLI globally
RUN npm install -g @angular/cli

# Expose the port for ng serve (default: 4200)
EXPOSE 4200

# Start a shell to allow interactive development
CMD ["/bin/bash"]

