import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1800&auto=format&fit=crop',
    title: 'Home Court Energy',
    subtitle: 'Bold colors. Premium fabrics. Game-ready.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1546519637-5fc8dbe13cf8?q=80&w=1800&auto=format&fit=crop',
    title: 'City Edition Heat',
    subtitle: 'Limited drops inspired by the city.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1563213126-a4273aed2015?q=80&w=1800&auto=format&fit=crop',
    title: 'Lifestyle Essentials',
    subtitle: 'Cozy hoodies and off-court fits.',
  },
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section aria-label="Featured gallery" className="relative" id="featured">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/7] bg-gray-200">
          {slides.map((slide, i) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold drop-shadow">{slides[index].title}</h3>
            <p className="text-white/80">{slides[index].subtitle}</p>
          </div>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-6 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-2">
          <button
            onClick={prev}
            className="inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white p-2 shadow"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white p-2 shadow"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
