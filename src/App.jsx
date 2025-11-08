import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('home');

  const handleNavigate = (key) => setPage(key);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar current={page} onNavigate={handleNavigate} />

      {page === 'home' && (
        <main>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <Hero onShopNow={() => setPage('jerseys')} />
            <div className="mt-10">
              <ImageCarousel />
            </div>
            <ProductGrid />
          </div>
        </main>
      )}

      {page !== 'home' && (
        <main>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            {page === 'jerseys' && (
              <section>
                <h1 className="text-3xl font-extrabold">Jerseys</h1>
                <p className="mt-2 text-gray-600 max-w-2xl">Authentic and swingman editions in home, away, and city colors.</p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-gray-100 bg-white">
                      <div className="aspect-[4/5] bg-gray-100">
                        <img
                          className="h-full w-full object-cover"
                          src={`https://images.unsplash.com/photo-154651963${7 + (i % 3)}-5fc8dbe13cf8?q=80&w=1200&auto=format&fit=crop`}
                          alt="Jersey"
                        />
                      </div>
                      <div className="p-3">
                        <p className="font-medium">Home Jersey #{10 + i}</p>
                        <p className="text-sm text-gray-500">$129</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {page === 'new' && (
              <section>
                <h1 className="text-3xl font-extrabold">New Arrivals</h1>
                <p className="mt-2 text-gray-600 max-w-2xl">Fresh drops straight from the locker room inspiration board.</p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-gray-100 bg-white">
                      <div className="aspect-[4/5] bg-gray-100">
                        <img
                          className="h-full w-full object-cover"
                          src={`https://images.unsplash.com/photo-1546500840-ae38253aba9b?q=80&w=1200&auto=format&fit=crop`}
                          alt="Hoodie"
                        />
                      </div>
                      <div className="p-3">
                        <p className="font-medium">City Hoodie</p>
                        <p className="text-sm text-gray-500">$89</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {page === 'accessories' && (
              <section>
                <h1 className="text-3xl font-extrabold">Accessories</h1>
                <p className="mt-2 text-gray-600 max-w-2xl">From caps to socks, dial in your courtside look.</p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-gray-100 bg-white">
                      <div className="aspect-[4/5] bg-gray-100">
                        <img
                          className="h-full w-full object-cover"
                          src={`https://images.unsplash.com/photo-1605733160314-4f3ce7005f19?q=80&w=1200&auto=format&fit=crop`}
                          alt="Cap"
                        />
                      </div>
                      <div className="p-3">
                        <p className="font-medium">Classic Cap</p>
                        <p className="text-sm text-gray-500">$29</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {page === 'sale' && (
              <section>
                <h1 className="text-3xl font-extrabold">Sale</h1>
                <p className="mt-2 text-gray-600 max-w-2xl">Grab last season’s favorites at can’t-miss prices.</p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-gray-100 bg-white">
                      <div className="aspect-[4/5] bg-gray-100">
                        <img
                          className="h-full w-full object-cover"
                          src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop`}
                          alt="Sneakers"
                        />
                      </div>
                      <div className="p-3">
                        <p className="font-medium">Court Sneakers</p>
                        <p className="text-sm text-gray-500">$99</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
