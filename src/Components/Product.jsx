import { useState } from 'react';
import { data } from '../data';

const Product = () => {
  const [count, setCount] = useState(1);

  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];
  return (
    <div className='max-w-5xl m-auto md:py-10 py-5'>
      <div className='flex gap-10 items-center max-md:flex-col max-md:gap-5'>
        <div className='flex flex-col gap-5 w-1/2 p-10 max-md:w-full'>
          <img
            src={mainImage}
            alt='shoe-image'
            className='h-full w-full rounded-xl'
          />
          <div className='flex justify-between items-center'>
            {products.map((item, index) => (
              <img
                key={item.id}
                src={item.thumbnail}
                alt='thumbnail'
                className='h-1/6 w-1/6 rounded-xl'
                //   className={index===value&&"border-2 border-orange-400 opacity-80"}
                onClick={() => setValue(index)}
              />
            ))}
          </div>
        </div>

        <div className=' w-1/2 p-10 max-md:w-full max-md:p-5'>
          <div className='flex flex-col gap-10 justify-center max-md:gap-3'>
            <div className='flex flex-col gap-2'>
              <div className='text-blue-900 font-bold'>Intaker Company</div>
              <div className='font-bold text-gray-800 text-4xl md:text-2xl'>
                Full Limited Edition Sneakers
              </div>
            </div>

            <div className='text-gray-700'>
              A pair of round toe white, black sneakers ,has regular styling,
              Velcro detail PU upper Cushioned footbed Textured and patterned
              outsole
            </div>

            <div className='flex flex-col'>
              <div className='flex gap-10'>
                <div className='font-bold text-gray-800'>$125.00</div>
                <div className='bg-green-200 rounded-sm text-green-900'>14%</div>
              </div>
              <div className=' text-gray-700'></div>
            </div>

            <div className='flex gap-8 max-md:gap-4'>
              <div className='flex items-center justify-center gap-3 w-2/5'>
                <button
                  onClick={() => setCount(count - 1)}
                  className='bg-gray-400 text-gray-800 text-lg px-3 py-1 rounded'
                >
                  -
                </button>
                <div className='text-gray-800'>{count}</div>
                <button
                  onClick={() => setCount(count + 1)}
                  className='bg-gray-400 text-gray-800 text-lg px-3 py-1 rounded'
                >
                  +
                </button>
              </div>
              <button className='bg-blue-900 text-white px-5 py-4 rounded w-full'>
                Add t0 Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
