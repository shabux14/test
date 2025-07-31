"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const path = usePathname();
  const items = [
    { name: "خانه", href: "/dashboard", icon: HomeIcon },
    { name: "کاربران", href: "/dashboard/users", icon: UserIcon },
    { name: "گزارشات", href: "/dashboard/reports", icon: ChartBarIcon },
    { name: "تنظیمات", href: "/dashboard/settings", icon: Cog6ToothIcon },
  ];

  return (
    <aside className="w-64 p-6 space-y-6 bg-white/30 backdrop-blur-md shadow-xl rounded-tr-3xl rounded-br-3xl">
      <div className="flex items-center gap-4 px-2">
        <img src="/avatar.jpg" alt="avatar" className="h-12 w-12 rounded-full" />
        <div>
          <p className="text-primaryBlue text-lg font-semibold">شهاب</p>
          <p className="text-primaryBlue/70 text-base">مدیر سیستم</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {items.map(({ name, href, icon: Icon }) => {
          const isActive = path === href;
          return (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-2xl transition
                ${isActive
                  ? "bg-white/60 text-primaryBlue font-semibold"
                  : "text-primaryBlue/80 hover:bg-white/40"}
              `}
            >
              <Icon className="h-7 w-7 flex-shrink-0" />
              <span className="text-base">{name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
