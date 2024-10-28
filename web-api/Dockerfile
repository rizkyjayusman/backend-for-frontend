FROM golang:1.20.2-alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./
COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main .

FROM alpine:latest

ENV GIN_MODE=release

RUN adduser -D -g '' appuser
COPY --from=builder /app/main /app/main
RUN chown -R appuser /app
USER appuser

EXPOSE 8080

CMD ["/app/main"]