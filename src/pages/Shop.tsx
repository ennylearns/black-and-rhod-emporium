import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Shop = () => {
  const products = [
    {
      name: "Black&Rhood Classic Tee",
      price: "₦8,500",
      colors: "Black, White, Grey",
      sizes: "S, M, L, XL, XXL",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    },
    {
      name: "Signature Rhood Cap",
      price: "₦5,000",
      colors: "Black, Grey",
      sizes: "One Size",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop",
    },
    {
      name: "Premium Hoodie",
      price: "₦12,000",
      colors: "Black, Grey, White",
      sizes: "S, M, L, XL, XXL",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SHOP</h1>
            <p className="text-lg md:text-xl opacity-90">
              Explore our collection of streetwear essentials
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
