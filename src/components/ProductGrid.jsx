const products = [
  {
    id: 1,
    name: 'Home Jersey - #30',
    price: 129,
    image:
      'https://images.unsplash.com/photo-1546519637-5fc8dbe13cf8?q=80&w=1200&auto=format&fit=crop',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'City Edition Hoodie',
    price: 89,
    image:
      'https://images.unsplash.com/photo-1546500840-ae38253aba9b?q=80&w=1200&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Warm-Up Jacket',
    price: 149,
    image:
      'https://images.unsplash.com/photo-1565057334564-efb6f3908f03?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Retro Shorts',
    price: 69,
    image:
      'https://images.unsplash.com/photo-1582582621959-48d3ea61ba98?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold">Featured Picks</h2>
        <a href="#" className="text-blue-600 text-sm font-semibold">View all</a>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <a
            key={p.id}
            href="#"
            className="group rounded-xl overflow-hidden border border-gray-100 bg-white hover:shadow transition"
          >
            <div className="relative aspect-[4/5] bg-gray-100">
              <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
              {p.badge && (
                <span className="absolute left-2 top-2 rounded-full bg-white/90 text-gray-900 text-xs font-semibold px-2 py-1">
                  {p.badge}
                </span>
              )}
            </div>
            <div className="p-3">
              <p className="font-medium text-gray-900 group-hover:text-blue-600">{p.name}</p>
              <p className="text-sm text-gray-500">${p.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
