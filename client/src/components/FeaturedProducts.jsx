import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  // Mock data for featured products
  const products = [
    {
      id: 1,
      name: "Modern Chair",
      image: "/images/chair1.png",
      price: "$149.99",
    },
    {
      id: 2,
      name: "Classic Recliner",
      image: "/images/chair2.png",
      price: "$299.99",
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      image: "/images/chair4.png",
      price: "$199.99",
    },
  ];

  return (
    <section className="py-12 bg-base-100 my-36">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <figure>
                <img src={product.image} alt={product.name} className="w-52" />
              </figure>
              <div className="card-body p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-lg text-gray-700 mb-4">{product.price}</p>
                <button
                  onClick={() => navigate(`/chairs`)}
                  className="btn btn-primary"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
