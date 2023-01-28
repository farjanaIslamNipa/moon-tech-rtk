import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
const formData = {
  title: '',
  brand: '',
  rating:'',
  image: '',
}
const EditProduct = () => {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(formData)

  let { id } = useParams();

  const { register, handleSubmit } = useForm();

  const handleChange = (e) => {
    
 console.log(e.target.value, 'value');
    setFormValue({...product, [e.target.name]:e.target.value});
  }


  useEffect(() => {
    setFormValue(product)
  }, [product])
  
  // console.log(product, 'product');

  const submit = (data) => {
    // console.log(data, 'data');
    const product = {
      title: formValue.title,
      // brand: data.brand,
      // status: data.status === "true" ? true : false,
      // price: data.price,
      // rating: data.rating,
      // images: [
      //   "https://i.dummyjson.com/data/products/1/1.jpg"                                 
      // ]
    };
  };

  return (
    <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='title'>
            Model
          </label>
          <input onChange={handleChange} type='text' name="title" value={product.title} id='title' {...register("title")}  />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input onChange={handleChange} type='text' name='image' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'>
            Brand
          </label>
          <select onChange={handleChange} value={product.brand} name='brand' id='brand' {...register("brand")}>
            <option value='amd'>AMD</option>
            <option value='intel'>Intel</option>
            <option value='OPPO'>OPPO</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='rating'>
            Rating
          </label>
          <input onChange={handleChange} type='text' value={product.rating} name='rating' id='rating' {...register("rating")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Availability</h1>
          <div className='flex gap-3'>
            <div>
              <input
                type='radio'
                id='available'
                onChange={handleChange}
                checked={product.status === true ? true : false}
                value={true}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='available'>
                Available
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='stockOut'
                name='status'
                onChange={handleChange}
                checked={product.status === false ? true : false}
                value={false}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='stockOut'>
                Stock out
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'></div>

        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
