"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-lg md:max-w-5xl lg:max-w-7xl mx-auto px-4 md:px-8 py-2.5 md:py-3 flex items-center justify-between gap-2">
        {/* Menu */}
        <button className="text-gray-600 text-2xl md:hidden p-1">☰</button>

        {/* Logo */}
        <div className="flex items-center gap-2 flex-1 md:flex-initial justify-center md:justify-start">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold shadow-md">
            ف
          </div>
          <h1 className="text-lg md:text-xl font-bold text-gray-800 whitespace-nowrap">
            فساتينا السعودية
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-pink-500 font-medium transition-colors"
          >
            الرئيسية
          </Link>
          <Link
            href="/categories"
            className="text-sm text-gray-600 hover:text-pink-500 font-medium transition-colors"
          >
            الأقسام
          </Link>
          <Link
            href="/orders"
            className="text-sm text-gray-600 hover:text-pink-500 font-medium transition-colors"
          >
            طلباتي
          </Link>
          <Link
            href="/admin"
            className="text-sm text-gray-500 hover:text-blue-500 font-medium transition-colors"
          >
            لوحة التحكم
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-gray-500 text-xl md:text-2xl p-1">🔔</button>
          <Link href="/cart" className="relative text-gray-500 text-xl md:text-2xl p-1">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
