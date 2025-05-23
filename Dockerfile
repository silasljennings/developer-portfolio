# -------------------------
# 1. Build stage
# -------------------------
FROM node:18-alpine AS builder

#VITE env vars needed at build time
ARG VITE_APP_EMAILJS_SERVICE_ID="service_7pc2x9p"
ARG VITE_APP_EMAILJS_TEMPLATE_ID="template_d6sibhm"
ARG VITE_APP_EMAILJS_PUBLIC_KEY="4wn60U1gt6lD5vS0q"

ENV VITE_APP_EMAILJS_SERVICE_ID=$VITE_APP_EMAILJS_SERVICE_ID
ENV VITE_APP_EMAILJS_TEMPLATE_ID=$VITE_APP_EMAILJS_TEMPLATE_ID
ENV VITE_APP_EMAILJS_PUBLIC_KEY=$VITE_APP_EMAILJS_PUBLIC_KEY

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
