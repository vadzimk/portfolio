# dind cannot benefit from multi-staged dockerfile, that's why it is all in one stage
FROM node:16-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN npm ci --cache .npm --prefer-offline
ENV NEXT_TELEMETRY_DISABLED 1
ARG BASE_URL
ARG IMAGE_HOST_NAME
ARG IMAGE_HOST_DOMAIN
ARG REVALIDATE_TOKEN
RUN npm run build
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown nextjs:nodejs /app/.next/standalone /app/.next/static
RUN mv /app/.next/standalone ./

ENV NODE_ENV production
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]

