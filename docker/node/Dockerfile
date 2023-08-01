FROM node:18

RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    curl \
    nano \
    micro \
    sudo

# 👉 Security: do not use the `root` user.
ENV USER=node

# You can not use `${USER}` here, but reference `/home/node`.
ENV PATH="/home/node/app/.npm-global/bin:${PATH}"
#ENV PATH="/home/node/cache/bin:${PATH}"
ENV NPM_CONFIG_PREFIX="/home/node/app"

WORKDIR /home/node/app

# Set the ownership and permissions before copying package*.json
RUN chown -R node:node /home/node/app
RUN chmod -R 777 /home/node/app

RUN mkdir -p "${NPM_CONFIG_PREFIX}"
RUN npm config set prefix "${NPM_CONFIG_PREFIX}"

USER ${USER}

COPY --chown=node:node /package*.json ./
#COPY /entrypoint.sh /home/node/app/entrypoint.sh
#RUN chmod +x ./entrypoint.sh

RUN npm install

#RUN mkdir -p /home/node/app
#RUN chown -R node:node /home/node/app
#RUN chmod -R 777 /home/node/app

#WORKDIR /home/node/app
EXPOSE 5137
#ENTRYPOINT ["bash","/home/node/app/entrypoint.sh"]
CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0"]
#CMD ["sh", "-c", "npm run build"]
