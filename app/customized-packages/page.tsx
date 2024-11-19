import dynamic from 'next/dynamic'

// Dynamic Component:
const DynamicComponent = dynamic(() => import('../../components/customizepackage'))

export default function Features() {
  return (
    <div>
      <DynamicComponent />
    </div>
  )
}