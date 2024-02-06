const Header = () => {
  return (
    <div>
      <nav className='bg-primary-100 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <a href='/' className='flex items-center'>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='mr-3 h-6 sm:h-9'
              alt='Flowbite Logo'
            />
            <span className='self-center text-xl font-semibold whitespace-nowrap'>
              旅のしおり
            </span>
          </a>
          <div className='flex items-center lg:order-2'>
            <a
              href='/signin'
              className='text-gray-800  hover:bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none'
            >
              Log in
            </a>
            <a
              href='/signup'
              className='text-white bg-primary-700 hover:bg-primary-900 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
