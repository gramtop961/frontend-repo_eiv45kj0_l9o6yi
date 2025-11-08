import { ChevronRight } from 'lucide-react';

export default function Hero({ onShopNow }) {
  return (
    <section className="relative">
      <div className="relative h-[68vh] min-h-[520px] w-full overflow-hidden rounded-2xl bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop"
          alt="Basketball arena hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 flex h-full items-end">
          <div className="p-8 sm:p-12 lg:p-16 text-white">
            <p className="uppercase tracking-widest text-xs sm:text-sm/6 text-white/80">Official Team Store</p>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl">
              Elevate your game with authentic court-ready gear
            </h1>
            <p className="mt-4 max-w-2xl text-white/80 text-sm sm:text-base">
              Jerseys, warm-ups, and lifestyle picks inspired by the energy of game night.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={onShopNow}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-gray-900 font-semibold shadow hover:shadow-md transition"
              >
                Shop Jerseys <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-5 py-2.5 text-white border border-white/20 hover:bg-white/15 transition"
              >
                Explore Featured
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
