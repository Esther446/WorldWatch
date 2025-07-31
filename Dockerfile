# Dockerfile

FROM nginx: alpine

# Remove default nginx website files
RUN rm -rf /usr/share/nginx/html/*

# Copy all app files into the nginx html directory
COPY. /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
