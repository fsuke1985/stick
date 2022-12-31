# Build stage
FROM golang:latest AS builder
WORKDIR /pre

COPY . .
#RUN yarn --frozen-lockfile
#RUN yarn --frozen-lockfile --ignore-optional
#RUN yarn build:server
#RUN yarn build:client
#RUN yarn install --production --ignore-scripts --prefer-offline
RUN env GOARCH=amd64 go build -o main main.go

# Runtime stage
FROM golang:latest

WORKDIR /pre

COPY --from=builder /pre/main ./
#COPY --from=builder /pre/package.json ./package.json
#COPY --from=builder /pre/dist ./dist
#COPY --from=builder /pre/.env.production ./dist/.env.production
#COPY --from=builder /pre/node_modules ./dist/node_modules
#RUN yarn build:prod
EXPOSE 8080

CMD ./main