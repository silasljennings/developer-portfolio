# -------------------------
# 1. Build stage
# -------------------------
FROM node:18-alpine AS builder

# Create app dir
WORKDIR /app

# Install dependencies based on package-lock.json / package.json
COPY package.json package-lock.json ./
RUN npm ci

# Copy everything else and build
COPY . .
RUN npm run build


# -------------------------
# 2. Production stage
# -------------------------
FROM nginx:alpine

# Remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# (Optional) Copy a custom nginx.conf if you need SPA fallback:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
