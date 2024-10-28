FROM node:22-bookworm-slim

RUN mkdir -p /home/node/.local/bin \
    && chown -R node:node /home/node/.local \
    && echo "npm config set prefix /home/node/.local" >> /home/node/.bashrc
USER node
