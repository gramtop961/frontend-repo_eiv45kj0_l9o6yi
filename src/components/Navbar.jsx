import { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'jerseys', label: 'Jerseys' },
  { key: 'new', label: 'New Arrivals' },
  { key: 'accessories', label: 'Accessories' },
  { key: 'sale', label: 'Sale' },
];

export default function Navbar({ current, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-blue-600 text-white grid place-items-center font-bold">B</div>
              <span className="text-xl font-extrabold tracking-tight">Basket Store</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  current === item.key ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search products"
                className="bg-transparent outline-none text-sm w-40"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-blue-600 text-white rounded-full px-1.5 py-0.5">2</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    setOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md transition-colors hover:bg-gray-100 ${
                    current === item.key ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
