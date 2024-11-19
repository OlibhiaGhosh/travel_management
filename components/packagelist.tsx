import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/ui/packagelist_c'))

export default function PackageList() {
  return (
    <div>
      <DynamicComponent />
    </div>
  )
}
