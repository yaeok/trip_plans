'use client'

import ItemCard from '@/components/widgets/item_card.component';

export default function Home() {
  return (
    <div className='container mx-auto max-w-screen-xl xxl:mx-10'>
      <div className='grid grid-cols-4 gap-4'>
        <ItemCard
          title='Item 1'
          description='This is item 1'
          tags={['tokyo', 'tower', 'kyoto']}
          onClick={() => console.log('Item 1 clicked')}
        />
      </div>
    </div>
  )
}
