FROM node:alpine
RUN cd /code; npm install
CMD ["ng", "serve"]

FROM nginx:stable
ADD ./nginx.conf /etc/nginx/conf.d/default.conf
