type ItemCardProps = {
  title: string
  description: string
  tags: string[]
  onClick?: () => void
}

const ItemCard = (props: ItemCardProps) => {
  return (
    <div
      className='max-w-sm rounded overflow-hidden shadow-lg cursor-pointer'
      onClick={props.onClick}
    >
      <img className='w-full object-cover' src='/img/card-top.jpg' alt='' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{props.title}</div>
        <p className='text-gray-700 text-base'>
          {props.description.slice(0, 50) + '...'}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        {props.tags.length > 0
          ? props.tags.map((tag, index) => (
              <span
                key={index}
                className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
              >
                {tag}
              </span>
            ))
          : null}
      </div>
    </div>
  )
}

export default ItemCard
