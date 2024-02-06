import { hours } from '@/constants/time'

type TripDetailScreenProps = {
  docId: string
}

const TripDetailScreen = (props: TripDetailScreenProps) => {
  return (
    <div className='container flex-col'>
      <h1 className='text-2xl font-bold mt-4'>2021年8月1日</h1>
      <table className='w-3/4 mx-auto mt-4'>
        <thead>
          <tr>
            <th className='w-1/4'>時間</th>
            <th className='w-3/4'>予定</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, index) => (
            <tr key={index} className='border-b-2 h-16 text-center'>
              <td className='bg-gray-50'>{hour}</td>
              <td className='bg-primary-100 w-1/3'></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TripDetailScreen
