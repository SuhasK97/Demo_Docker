# 1. Use a 'slim' image to reduce security vulnerabilities and image size
FROM node:18-slim

# 2. Set the working directory
WORKDIR /app

# 3. Copy both package files to ensure 'npm install' uses the exact versions
COPY package*.json ./

# 4. Use 'npm ci' for faster, more reliable installs in automated environments
RUN npm ci --only=production

# 5. Copy the rest of the application code
COPY . .

# 6. Inform Docker that the container listens on port 3000
EXPOSE 3000

# 7. Start the application
CMD ["npm", "start"]
