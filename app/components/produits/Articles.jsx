"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const Articles = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPharmacie = async () => {
      try {
        const res = await fetch("https://localhost:5000/api/produits");
        const data = await res.json();
        setDatas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPharmacie();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center w-[90%] m-auto py-1 md:py-2 gap-8">
        {datas.length === 0 ? (
          <div>No products available.</div>
        ) : (
          datas.map((product, index) => (
            <div
              key={index}
              className="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div>
                <Image
                  src={product.imageUrl || "../assets/default-image.svg"} // Use the product image or a default fallback
                  alt={product.name || "Product Image"}
                  width={120}
                  height={180}
                  className="w-30 h-60"
                />
              </div>
              <div>
                <p className="text-black font-bold">{product.name}</p>
                <p className="text-white font-bold text-lg">{product.model}</p>
                <p className="text-white text-xl mb-2">{product.price}</p>
                <Link
                  href={`/article/${product.id}`} // Assuming the product has an ID for individual page
                  className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]"
                >
                  Commander
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
