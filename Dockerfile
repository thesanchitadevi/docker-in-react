# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine3.16

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start"]