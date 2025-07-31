// src/app/dashboard/page.tsx
import { notFound } from 'next/navigation';

type ServerInfo = {
  type: string;
  status: string;
  cpu: string;
  ram: string;
  disk: string;
};

type CityStatus = {
  city: string;
  servers: ServerInfo[];
  timestamp: string;
};

export default async function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_URL;
  if (!base) {
    console.error('⚠️ NEXT_PUBLIC_BASE_URL is not defined');
    notFound();
  }

  const res = await fetch(`${base}/api/status`, { cache: 'no-store' });
  if (!res.ok) {
    console.error('Fetch /api/status failed with status', res.status);
    notFound();
  }

  const data = await res.json();
  if (!Array.isArray(data)) {
    console.error('Invalid JSON format received from /api/status:', data);
    notFound();
  }

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">داشبورد وضعیت شهرداری‌ها</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((city: CityStatus) => (
          <div key={city.city} className="bg-white rounded-xl shadow p-4 border">
            <h2 className="text-xl font-semibold mb-2">{city.city}</h2>
            <p className="text-sm text-gray-500">
              آخرین بروزرسانی: {new Date(city.timestamp).toLocaleString('fa-IR')}
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {city.servers.map((srv: ServerInfo) => (
                <div key={srv.type} className="rounded border p-3 bg-gray-50 text-sm">
                  <h3 className="font-bold">{srv.type.toUpperCase()}</h3>
                  <p>وضعیت: <span className={srv.status === 'active' ? 'text-green-600' : 'text-red-600'}>{srv.status}</span></p>
                  <p>CPU: {srv.cpu}</p>
                  <p>RAM: {srv.ram}</p>
                  <p>Disk: {srv.disk}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
