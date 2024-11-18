import dynamic from 'next/dynamic'

// Dynamic Component:
const DynamicComponent = dynamic(() => import('../components/ui/features_c'))

export default function Features() {
  return (
    <div>
      <DynamicComponent />
    </div>
  )
}