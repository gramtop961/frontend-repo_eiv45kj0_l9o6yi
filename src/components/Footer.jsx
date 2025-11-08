import { Instagram, Twitter, Facebook, Youtube, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-md bg-blue-600 text-white grid place-items-center font-extrabold">B</div>
              <div>
                <p className="font-bold text-gray-900">Basket Store</p>
                <p className="text-sm text-gray-500">Official Team Merchandise</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Premium jerseys, apparel, and accessories inspired by our hometown court.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Help</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-gray-900" href="#">Shipping & Returns</a></li>
              <li><a className="hover:text-gray-900" href="#">Size Guide</a></li>
              <li><a className="hover:text-gray-900" href="#">Order Status</a></li>
              <li><a className="hover:text-gray-900" href="#">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">About</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-gray-900" href="#">Our Story</a></li>
              <li><a className="hover:text-gray-900" href="#">Sustainability</a></li>
              <li><a className="hover:text-gray-900" href="#">Affiliates</a></li>
              <li><a className="hover:text-gray-900" href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Stay in the loop</h4>
            <p className="mt-3 text-sm text-gray-600">Subscribe for drops, deals, and news.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="Email address" className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="rounded-md bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700">Join</button>
            </form>
            <div className="mt-4 flex gap-3 text-gray-500">
              <a href="#" aria-label="Instagram" className="hover:text-gray-900"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-900"><Twitter className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-900"><Facebook className="w-5 h-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-900"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Basket Store. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900 flex items-center gap-1"><MapPin className="w-4 h-4" /> Store Locator</a>
            <a href="#" className="hover:text-gray-900 flex items-center gap-1"><Mail className="w-4 h-4" /> Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
