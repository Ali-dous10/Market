"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const { totalItems } = useCart();
  const pathname = usePathname();

  const tabs = [
    { href: "/", label: "الرئيسية", icon: "🏠", active: pathname === "/" },
    {
      href: "/categories",
      label: "الأقسام",
      icon: "📂",
      active: pathname === "/categories",
    },
    {
      href: "/cart",
      label: "السلة",
      icon: "🛒",
      active: pathname === "/cart",
      badge: totalItems,
    },
    {
      href: "/orders",
      label: "طلباتي",
      icon: "📋",
      active: pathname === "/orders",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 z-50 px-2 pb-[env(safe-area-inset-bottom)] shadow-lg md:hidden">
      <div className="flex justify-around items-center max-w-lg mx-auto h-16">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all relative ${tab.active
                ? "text-pink-500 scale-105"
                : "text-gray-400 hover:text-gray-600 active:scale-95"
              }`}
          >
            <span className="text-2xl">{tab.icon}</span>
            <span className={`text-[10px] font-semibold ${tab.active ? 'font-bold' : 'font-medium'}`}>{tab.label}</span>
            {tab.badge ? (
              <span className="absolute top-0 right-2 bg-pink-500 text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1 shadow-md">
                {tab.badge}
              </span>
            ) : null}
          </Link>
        ))}
      </div>
    </nav>
  );
}
