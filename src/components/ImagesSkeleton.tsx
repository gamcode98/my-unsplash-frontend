const ImagesSkeleton = (): JSX.Element => {
  const heights = ['500px', '400px', '400px', '700px', '700px', '800px']

  return (
    <>
      {heights.map((height, index) => (
        <div key={index} className='animate-pulse mb-8'>
          <div
            className='bg-light-gray w-full mb-2 lg:rounded-2xl'
            style={{ height }}
          />
          <div className='flex justify-between gap-4 w-11/12 mx-auto lg:hidden'>
            <div className='h-6 w-2/4 bg-light-gray rounded' />
            <div className='h-6 w-1/4 bg-light-gray rounded' />
          </div>
        </div>
      ))}
    </>
  )
}

export { ImagesSkeleton }
