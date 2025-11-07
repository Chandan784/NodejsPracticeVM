# Use the official Node.js 20 image (LTS)
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package files first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your app code
COPY . .

# Expose your app's port (adjust if your app uses a different one)
EXPOSE 8000

# Start your app
CMD ["npm", "start"]



