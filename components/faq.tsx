import dynamic from 'next/dynamic'

// Dynamic Component:
const DynamicComponent = dynamic(() => import('../components/ui/faq_c'))

export default function FAQ() {
  return (
    <div>
      <DynamicComponent />
    </div>
  )
}
