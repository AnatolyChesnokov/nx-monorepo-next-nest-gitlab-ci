ARG NODE_VERSION=22.2.0
ARG PNPM_VERSION=9.13.2

# Install dependencies only when needed
FROM node:${NODE_VERSION}-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app

COPY dist/apps/api/package*.json ./
COPY dist/apps/api/pnpm-lock.yaml ./

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
  npm install -g pnpm@${PNPM_VERSION}

RUN pnpm install --prod --frozen-lockfile

# Production image, copy all the files and run nest
FROM node:${NODE_VERSION}-alpine AS runner

RUN apk add --no-cache dumb-init

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /usr/src/app

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json
COPY dist/apps/api .

RUN chown -R node:node .

USER node

EXPOSE 3000

CMD ["dumb-init", "node", "main.js"]
