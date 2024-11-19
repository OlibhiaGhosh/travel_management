import dynamic from 'next/dynamic'

// Dynamic Component:
const DynamicComponent = dynamic(() => import('../components/ui/testimonial_c'))

export default function Testimonial() {
  return (
    <div>
      <DynamicComponent />
    </div>
  )
}


