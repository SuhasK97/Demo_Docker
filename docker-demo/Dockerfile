# Use alpine for a much smaller image size (approx 40MB vs 190MB)
FROM nginx:alpine

# Metadata to identify the maintainer
LABEL maintainer="suhas1997"

# Copy your HTML file to the default Nginx directory
# Note: Ensure index.html is in the same folder as this Dockerfile
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80 for documentation purposes
EXPOSE 80

# Start Nginx in the foreground (default in the official image)
CMD ["nginx", "-g", "daemon off;"]
