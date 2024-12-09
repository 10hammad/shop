export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="text-2xl font-bold">SHOP.CO</div>
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <div className="space-x-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="border border-gray-300 rounded px-2 py-1"
          />
          <button className="text-gray-600">🛒</button>
        </div>
      </nav>
    );
  }
  