/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // ホームディレクトリの無関係な package-lock.json を拾わせないため明示する
  turbopack: {
    root: __dirname,
  },
  images: {
    deviceSizes: [340, 640, 768, 1024, 1280, 1440, 1980],
  },
};
