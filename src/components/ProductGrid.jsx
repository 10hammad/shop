export default function ProductGrid({ title, products }) {
    console.log(products); // Check if products is defined
    return (
      <section className="my-8">
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-200 p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 mr-2">⭐ {product.rating}</span>
                <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
            View All
          </button>
        </div>
      </section>
    );
  }
  