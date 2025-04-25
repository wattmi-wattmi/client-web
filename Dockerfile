ARG NODE_VERSION=22.13.0
# Add build argument for API domain with default value
ARG NEXT_PUBLIC_API_DOMAIN=http://localhost:8000

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app


FROM base as deps

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM deps as build

# Make the build argument available in this stage
ARG NEXT_PUBLIC_API_DOMAIN
ENV NEXT_PUBLIC_API_DOMAIN=${NEXT_PUBLIC_API_DOMAIN}

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .
RUN npm run build

FROM base as final

ENV NODE_ENV production
# Set environment variables explicitly for runtime using the build argument
ENV NEXT_PUBLIC_API_DOMAIN=${NEXT_PUBLIC_API_DOMAIN}

USER node

COPY package.json .

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/next.config.ts ./
COPY --from=build /usr/src/app/.env* ./


EXPOSE 3000

# Run the application.
CMD npm run start
