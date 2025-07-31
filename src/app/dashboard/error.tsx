// src/app/dashboard/error.tsx
'use client';
import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Dashboard rendering error:', error);
  }, [error]);

  return (
    <div className="p-6 bg-red-100 text-red-800 rounded-md m-4">
      <h2 className="text-lg font-bold mb-2">خطا در بارگذاری داشبورد</h2>
      <p className="text-sm">خطایی در نمایش داده‌ها رخ داد. لطفاً مجدداً تلاش کنید.</p>
      <button
        className="mt-4 px-4 py-2 bg-white border rounded hover:bg-gray-100"
        onClick={() => reset()}
      >
        تلاش مجدد
      </button>
    </div>
  );
}
