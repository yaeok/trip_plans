'use client'

import { useRouter } from 'next/navigation'

import ItemCard from '@/components/widgets/item_card.component'

const TripListScreen = () => {
  const router = useRouter()
  return (
    <div className='container mt-4'>
      <div className='grid grid-cols-4 gap-4'>
        <ItemCard
          title='Item 1'
          description='This is item 1'
          tags={['tokyo', 'tower', 'kyoto']}
          onClick={() => router.push('/trip/1')}
        />
      </div>
    </div>
  )
}

export default TripListScreen
