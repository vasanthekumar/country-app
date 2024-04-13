# Use a smaller, production-ready image as the final image
FROM nginx:latest
# Copy the production-ready Angular app to the Nginx webserver's root directory
COPY /dist/country-app /usr/share/nginx/html
# Expose port 80
EXPOSE 80