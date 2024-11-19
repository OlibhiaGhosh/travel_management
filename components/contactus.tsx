import dynamic from 'next/dynamic'

// Dynamic Component:
const DynamicComponent = dynamic(() => import('../components/ui/contactus_c'))

export default function Contactus() {
  return (
    <div>
      <DynamicComponent />
    </div>
  )
}