const BottomCta: React.FC = () => {
  return (
    <div className='bg-slate-800'>
      <div className='max-w-7xl mx-auto text-center py-6 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-100'>
          <span className='block'>Ready to dive in?</span>
          <span className='block text-2xl'>Join our Discord server today.</span>
        </h2>
        <div className='mt-8 flex justify-center'>
          <div className='inline-flex rounded-md shadow'>
            <a href='#' className='px-4 py-2 btn-cta'>
              Get started
            </a>
          </div>
          <div className='ml-3 inline-flex'>
            <a
              href='#'
              className='px-2 py-1 btn-cta text-indigo-700 bg-slate-100'>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomCta
