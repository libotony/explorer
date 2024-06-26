# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

RUN apk upgrade --no-cache && apk add --no-cache git

# Copy files to the working directory
COPY . .

# Install dependencies
RUN npm ci

# Default port
ENV PORT=8080

# Expose the port the app runs on
EXPOSE ${PORT}

# Command to run the application
CMD ["npm", "run", "build-and-start"]
