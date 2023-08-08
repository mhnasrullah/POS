import { BuildingStorefrontIcon} from '@heroicons/react/24/outline'

export default function Logo() {
  return (
    <div className='flex space-x-2 items-center'>
      <BuildingStorefrontIcon className='w-8 h-8 text-main'/>
      <p className='text-dark text-base lg:text-lg'>Main Course</p>
    </div>
  )
}
