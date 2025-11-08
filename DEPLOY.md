# Hướng Dẫn Deploy Website YATAKA

Dự án này sử dụng **Next.js 16**. Dưới đây là các cách deploy phổ biến:

## 🚀 Phương án 1: Deploy lên Vercel (Khuyến nghị - Dễ nhất)

Vercel là platform được tạo bởi team Next.js, rất phù hợp cho Next.js.

### Bước 1: Chuẩn bị
```bash
# Đảm bảo code đã được commit lên Git
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Bước 2: Deploy trên Vercel

1. **Truy cập**: https://vercel.com
2. **Đăng nhập** bằng GitHub/GitLab/Bitbucket
3. **Click "Add New Project"**
4. **Import Git Repository**:
   - Chọn repository của bạn
   - Vercel sẽ tự động detect Next.js
5. **Cấu hình**:
   - **Framework Preset**: Next.js (tự động)
   - **Root Directory**: `./` (mặc định)
   - **Build Command**: `npm run build` (tự động)
   - **Output Directory**: `.next` (tự động)
6. **Click "Deploy"**
7. **Chờ build** (2-3 phút)
8. **Xong!** Website sẽ có URL dạng: `https://your-project.vercel.app`

### Ưu điểm Vercel:
- ✅ Miễn phí cho dự án cá nhân
- ✅ Tự động deploy khi push code
- ✅ SSL miễn phí
- ✅ CDN toàn cầu
- ✅ Hỗ trợ Next.js tốt nhất

---

## 🌐 Phương án 2: Deploy lên Netlify

### Bước 1: Build project
```bash
npm run build
```

### Bước 2: Deploy trên Netlify

1. **Truy cập**: https://netlify.com
2. **Đăng nhập** bằng GitHub
3. **Chọn "Add new site" → "Import an existing project"**
4. **Chọn Git provider** và repository
5. **Cấu hình build**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. **Click "Deploy site"**

**Lưu ý**: Cần tạo file `netlify.toml` trong root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🖥️ Phương án 3: Deploy lên VPS/Server riêng

### Bước 1: Build project
```bash
npm run build
```

### Bước 2: Chạy production server
```bash
npm start
```

### Bước 3: Sử dụng PM2 (khuyến nghị)
```bash
# Cài đặt PM2
npm install -g pm2

# Chạy với PM2
pm2 start npm --name "yataka" -- start

# Lưu cấu hình
pm2 save
pm2 startup
```

### Bước 4: Cấu hình Nginx (reverse proxy)
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📦 Phương án 4: Deploy lên Docker

### Tạo Dockerfile:
```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Build và chạy:
```bash
docker build -t yataka .
docker run -p 3000:3000 yataka
```

---

## ⚙️ Cấu hình môi trường (nếu cần)

Nếu có biến môi trường, tạo file `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

Trên Vercel/Netlify, thêm biến môi trường trong Settings → Environment Variables.

---

## 🔍 Kiểm tra trước khi deploy

1. **Build thành công**:
```bash
npm run build
```

2. **Chạy production local**:
```bash
npm start
```

3. **Kiểm tra lỗi**:
```bash
npm run lint
```

---

## 📝 Checklist trước khi deploy

- [ ] Code đã được commit và push lên Git
- [ ] Build thành công (`npm run build`)
- [ ] Không có lỗi lint (`npm run lint`)
- [ ] Test trên local (`npm start`)
- [ ] Kiểm tra tất cả ảnh và assets load đúng
- [ ] Kiểm tra responsive trên mobile/tablet/desktop

---

## 🆘 Xử lý lỗi thường gặp

### Lỗi: "Module not found"
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Lỗi: Build failed
- Kiểm tra console log để xem lỗi cụ thể
- Đảm bảo tất cả dependencies đã được cài đặt
- Kiểm tra TypeScript errors

### Lỗi: Ảnh không hiển thị
- Đảm bảo ảnh trong thư mục `public/`
- Kiểm tra đường dẫn ảnh (bắt đầu bằng `/`)

---

## 💡 Khuyến nghị

**Cho dự án này, tôi khuyến nghị dùng Vercel** vì:
1. Tích hợp tốt nhất với Next.js
2. Setup đơn giản nhất (chỉ cần connect Git)
3. Miễn phí và đủ cho dự án nhỏ/trung bình
4. Tự động deploy khi push code
5. SSL và CDN tự động

---

## 📞 Hỗ trợ

Nếu gặp vấn đề, kiểm tra:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

