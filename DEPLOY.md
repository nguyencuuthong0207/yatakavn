# Hướng Dẫn Deploy Website YATAKA lên Web

## Cách 1: Deploy lên Vercel (Khuyến nghị - Dễ nhất)

Vercel là nền tảng được tối ưu cho Next.js, miễn phí và dễ sử dụng.

### Bước 1: Chuẩn bị Git Repository

1. Mở terminal trong thư mục dự án
2. Khởi tạo git (nếu chưa có):
```bash
git init
```

3. Tạo file `.gitignore` (nếu chưa có):
```
node_modules
.next
.env
.env.local
.DS_Store
*.log
```

4. Commit code:
```bash
git add .
git commit -m "Initial commit"
```

### Bước 2: Đẩy lên GitHub

1. Tạo repository mới trên GitHub (https://github.com/new)
2. Đẩy code lên GitHub:
```bash
git remote add origin https://github.com/username/repository-name.git
git branch -M main
git push -u origin main
```

### Bước 3: Deploy lên Vercel

1. Truy cập https://vercel.com
2. Đăng nhập bằng tài khoản GitHub
3. Click "Add New Project"
4. Import repository từ GitHub
5. Vercel sẽ tự động phát hiện Next.js và cấu hình
6. Click "Deploy"
7. Đợi vài phút, website sẽ được deploy tự động

**Lưu ý:** Vercel sẽ tự động deploy mỗi khi bạn push code lên GitHub.

---

## Cách 2: Deploy lên Netlify

1. Truy cập https://netlify.com
2. Đăng nhập bằng GitHub
3. Click "Add new site" → "Import an existing project"
4. Chọn repository từ GitHub
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

---

## Cách 3: Deploy lên Hosting thông thường (VPS/Shared Hosting)

### Build project:

```bash
npm run build
```

### Chạy production:

```bash
npm start
```

Hoặc sử dụng PM2 để chạy nền:
```bash
npm install -g pm2
pm2 start npm --name "yataka" -- start
pm2 save
pm2 startup
```

---

## Kiểm tra trước khi deploy

1. Test build local:
```bash
npm run build
npm start
```

2. Kiểm tra lỗi:
```bash
npm run lint
```

3. Đảm bảo tất cả ảnh và assets đều có trong thư mục `public/`

---

## Lưu ý quan trọng

- **Environment Variables**: Nếu có biến môi trường, cần thêm vào Vercel/Netlify settings
- **Domain**: Vercel/Netlify cung cấp domain miễn phí, có thể thêm custom domain
- **HTTPS**: Tự động được bật trên Vercel/Netlify
- **Performance**: Vercel tối ưu Next.js tốt nhất

