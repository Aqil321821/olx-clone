const Home = (props) => {
    return (
      <div className="grid grid-cols-4 p-5">
        {props.products?.map((data, index) => {
          return (
            <div key={index} className="border border-spacing-1 p-2 ml-5 mt-5">
              <img src={data.image} alt={`Image of ${data.name || 'product'}`} className="w-60 h-48" />
              <div className="p-3 mt-2">
              <h1 className="font-semibold text-lg">$  {data?.price}</h1>
              <h1>{data?.title}</h1>
              <h1>{data?.category}</h1>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Home;
  