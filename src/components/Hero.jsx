export default function HeroSection() {
    return (
      <section className="relative bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-600">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Shop Now
            </button>
          </div>
          {/* Right Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
            <img
              src="/modell.JPG" 
              alt="Models"
              className="rounded-lg"
            />
            <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center -z-10">
              <div className="absolute bg-black h-20 w-20 rounded-full blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  