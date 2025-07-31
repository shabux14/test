import type { NextConfig } from "next";

const isSubPath = process.env.NEXT_PUBLIC_BASE_PATH ? true : false;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // اگر مسیر فرعی دارید، مقدارش را در متغیر محیطی NEXT_PUBLIC_BASE_PATH قرار دهید، مثل '/myapp'
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // سایر تنظیمات لازم را اینجا اضافه کنید
};

export default nextConfig;

