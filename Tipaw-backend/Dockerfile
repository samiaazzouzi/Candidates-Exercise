FROM node:14
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4000
RUN ["chmod", "+x", "/app/entrypoint.sh"]
ENTRYPOINT [ "/app/entrypoint.sh" ]