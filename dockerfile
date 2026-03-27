# Base image
FROM node:trixie-slim



RUN apt-get update && \
    apt-get install -y unzip && \
    rm -rf /var/lib/apt/lists/*
  
WORKDIR /app

COPY app app
COPY devops-demo.zip .




EXPOSE 3000

CMD ["npm", "run", "dev"]