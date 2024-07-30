import { BiCartAlt, BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className='max-w-7xl m-auto py-5 border-b-2 px-3 max-md:max-w-5xl'>
      <div className='flex items-center justify-between text-gray-800'>
        <div className='flex items-center justify-center gap-5'>
          <div className='text-2xl mr-5 font-bold text-blue-900'>Shoppy</div>
          <div className='max-md:hidden'>Collections</div>
          <div className='max-md:hidden'>Men</div>
          <div className='max-md:hidden'>Women</div>
          <div className='max-md:hidden'>About</div>
          <div className='max-md:hidden'>Contact</div>
        </div>
        <div className='flex gap-5 max-md:hidden'>
          <BiCartAlt className='h-full w-6' />
          <BiUserCircle className='h-full w-6' />
        </div>
      </div>
    </div>
  );
}

export default Header