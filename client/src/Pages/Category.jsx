import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [cats, setCats] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:8800/api/categories");
      console.log(result.data);
      setCats(result.data);
    } catch (error) {
      console.log("Unable to fetch data from the database.", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="categories bg-gray-100 p-20 flex justify-center">
      <div className="box w-full md:w-[80%]">
        <div className="heading font-bold align-middle">
          <h1 className="">Explore Categories</h1>
        </div>

        <div className="cards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cats.map((kat) => (
            <div className="singleCard relative mt-5 h-40" key={kat.id}>
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random"
              />
              <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">{kat.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
