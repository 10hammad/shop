import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import HomePage from "@/components/HomePage";

export default function Home() {
  const newArrivals = [
    {
      name: "T-shirt with Tape Details",
      category: "Men's Wear",
      rating: 4.5,
      reviews: 120,
      price: 20,
      oldPrice: 25,
      image: "/image1.JPG", 
    },
    {
      name: "Skinny Fit Jeans",
      category: "Denim",
      rating: 4.8,
      reviews: 95,
      price: 40,
      image: "/image2.JPG",
    },
    {
      name: "Checked Shirt",
      category: "Men's Wear",
      rating: 4.2,
      reviews: 78,
      price: 30,
      image: "/image3.JPG",
    },
    {
      name: "Short-Sleeve T-shirt",
      category: "Casual Wear",
      rating: 4.0,
      reviews: 65,
      price: 15,
      oldPrice: 20,
      image: "/image4.JPG",
    },
  ];

  const topSelling = [
    {
      name: "Vertical Striped Shirt",
      category: "Men's Wear",
      rating: 4.7,
      reviews: 130,
      price: 25,
      image: "/image5.JPG",
    },
    {
      name: "Orange Graphic T-shirt",
      category: "Casual Wear",
      rating: 4.6,
      reviews: 150,
      price: 18,
      image: "/image6.JPG",
    },
    {
      name: "Denim Bermuda Shorts",
      category: "Denim",
      rating: 4.4,
      reviews: 90,
      price: 35,
      image: "/image7.JPG",
    },
    {
      name: "Faded Skinny Jeans",
      category: "Denim",
      rating: 4.3,
      reviews: 112,
      price: 40,
      image: "/image8.JPG",
    },
  ];

  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroSection />
      <footer className="mt-12 p-4 bg-black text-white flex justify-center space-x-8">
        <span>Versace</span>
        <span>Zara</span>
        <span>Gucci</span>
        <span>Prada</span>
        <span>Calvin Klein</span>
      </footer>
      
      
   
      <ProductGrid title="New Arrivals" products={newArrivals} />
      <ProductGrid title="Top Selling" products={topSelling} />
      <HomePage/>
    
    </div>
  );
}
