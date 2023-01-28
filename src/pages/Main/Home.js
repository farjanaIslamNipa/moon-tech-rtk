import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { toggle, toggleBrands } from "../../features/filter/filterSlice";
import { getProducts } from "../../features/products/productsSlice";
const Home = () => {
  const filters = useSelector(state => state.filter);
  const {products, isLoading} = useSelector(state => state.products);
  const {brands, stock} = filters;

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  let content;

  if(isLoading){
    content = 'Loading.....'
  }

  if(products.length){
    content = products.map(prod => <ProductCard product={prod} key={prod.id} />)
  }
  if(products.length && (stock || brands.length)){

    content = products.filter((product) => {
      if(stock){
        return product.status === true;
      }
      return product;
    })
    .filter((product) => {
      if(brands.length){
        return brands.includes(product.brand)
      }
      return product
    })
    .map(prod => <ProductCard product={prod} key={prod.id} />)
  }

  const activeClass = "text-white  bg-indigo-500 border-white";
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
      <button onClick={() => dispatch(toggle())} className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} `}>
        In Stock
      </button>
      <button onClick={() => dispatch(toggleBrands("amd"))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("amd") ? activeClass : null}`}>
        AMD
      </button>
      <button onClick={() => dispatch(toggleBrands("intel"))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("intel") ? activeClass : null}`}>
        INTEL
      </button>
      {/* <button onClick={() => dispatch(clearFilter())} className="border px-3 py-2 rounded-full font-semibold">
        Clear Filter
      </button> */}
        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
          {content}
      </div>
    </div>
  );
};

export default Home;
