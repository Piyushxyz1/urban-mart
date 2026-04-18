# Dockerfile for static HTML website
FROM nginx:alpine

# Copy the HTML file to nginx web directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]