// src/app/dashboard/layout.tsx
import Sidebar from "@/components/Sidebar";
//import "../globals.css"; // فقط یک بار در ریشه import شود

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative min-h-screen overflow-hidden
                 bg-gradient-to-tr from-blue-700 via-orange-400 to-yellow-400
                 animate-gradient-xy"
    >
      {/* اشکال متحرک بک‌گراند */}
      <div className="absolute inset-0 opacity-50 blur-3xl animate-blob-slow bg-primaryBlue rounded-full mix-blend-multiply"></div>

      <div className="relative flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
