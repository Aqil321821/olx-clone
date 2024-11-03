import { Link } from "react-router-dom";

const Home = (props) => {
  // Filtered products
  const filteredProducts = props.products?.filter((data) => 
    data?.title?.toLowerCase().includes((props.search || props.menu || "").toLowerCase())
  );

  return (
    <div className="grid grid-cols-4 p-5">
      {filteredProducts?.map((data, index) => (
        <Link to="/details" key={index} state={{ data }}>
          <div className="border border-spacing-1 p-2 ml-5 mt-5">
            <img src={data.image} alt={`Image of ${data.name || 'product'}`} className="w-60 h-48" />
            <div className="p-3 mt-2">
              <h1 className="font-semibold text-lg">${data?.price}</h1>
              <h1>{data?.title}</h1>
              <h1>{data?.category}</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
