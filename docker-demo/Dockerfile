# Use the official PHP image with Apache pre-installed
FROM php:8.2-apache

# Metadata to identify the container owner
LABEL maintainer="suhas1997"

# Copy your PHP file to the default Apache document root
# Note: Ensure index.php is in the same folder as this Dockerfile
COPY index.php /var/www/html/index.php

# Set correct permissions so Apache can read the file
RUN chown -R www-data:www-data /var/www/html

# Inform Docker that the container listens on port 80
EXPOSE 80

# Apache starts automatically in this base image, 
# so no CMD is strictly required, but this is the default:
CMD ["apache2-foreground"]
