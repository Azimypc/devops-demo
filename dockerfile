# Base image
FROM node:18

# Working directory
WORKDIR /app

# Copy files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of files
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "start"]