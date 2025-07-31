// /src/app/api/status/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // اینجا فرض می‌کنیم داده‌ها از سرویس edge ارسال شده‌اند
  // یا مستقیماً از فایل‌ها/پایگاه داده خوانده می‌شوند
  const mockData = [
    {
      city: 'شهرداری تهران',
      front: 'active',
      api: 'active',
      db: 'active',
      edgeTime: '2025-07-25 11:32',
    },
    {
      city: 'شهرداری مشهد',
      front: 'inactive',
      api: 'active',
      db: 'inactive',
      edgeTime: '2025-07-25 11:30',
    },
    // ...
  ];

  return NextResponse.json(mockData);
}
