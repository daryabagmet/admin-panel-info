'use client'

import BackButton from '@/components/BackButton'
import complaints from '@/data/complaints'

interface ComplaintsPageProps {
  params: {
    id: string
  }
}

const ComplaintsPageProps = ({ params }: ComplaintsPageProps) => {
  return (
    <>
      <BackButton text="Back to complaints" link="/complaints" />
      <h3 className="text-2xl mb-4">Complaints detail</h3>
    </>
  )
}

export default ComplaintsPageProps
