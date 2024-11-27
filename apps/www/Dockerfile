ARG NODE_VERSION=22.2.0

# This template uses Automatically Copying Traced Files feature
# so you need to setup your Next Config file to use `output: 'standalone'`
# Please read this for more information https://nextjs.org/docs/pages/api-reference/next-config-js/output

# Production image, copy all the files and run next
FROM node:${NODE_VERSION}-alpine AS runner

RUN apk add --no-cache dumb-init

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /usr/src/app

COPY apps/www/next.config.js ./
COPY apps/www/public ./public
COPY apps/www/.next/standalone/apps/www ./
COPY apps/www/.next/standalone/package.json ./
COPY apps/www/.next/standalone/node_modules ./node_modules
COPY apps/www/.next/static ./.next/static

# RUN npm i sharp
RUN chown -R node:node .
USER node
EXPOSE 3000
# COPY --chown=node:node ./tools/scripts/entrypoints/api.sh /usr/local/bin/docker-entrypoint.sh
# ENTRYPOINT [ "docker-entrypoint.sh" ]

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED=1
CMD ["dumb-init", "node", "server.js"]
