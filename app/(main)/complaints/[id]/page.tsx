'use client'

import complaints from '@/data/complaints'
import { Complaint } from '@/types/dataTypes'
import BackButton from '@/components/BackButton'
import { Clipboard, Microscope } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface ComplaintsPageProps {
  params: {
    id: string
  }
}

const ComplaintsPageProps = ({ params }: ComplaintsPageProps) => {
  const sortedData: Complaint[] = [...complaints].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
  const item: Complaint = sortedData.filter((itm) => itm.id === params.id)[0]

  return (
    <>
      <BackButton text="Back to complaints" link="/complaints" />
      <h3 className="text-2xl mb-4">Complaints detail</h3>
      <Card className="bg-blue-100 w-full mx-auto my-4">
        <CardContent>
          <div className="flex gap-3 pt-6">
            <Clipboard className="text-slate-700" size={60} />
            <div className="flex gap-3 flex-wrap w-[75%]">
              <span className="w-full">Subject: {item?.subject}</span>
              <span className="w-full">Date: {item?.date}</span>
              <span className="w-full">Doctor: {item?.doctor}</span>
              <span className="w-full">Description: {item?.body}</span>
              <span className="w-full">Prescriptions: {item?.prescriptions || 'No prescriptions'} </span>
            </div>
          </div>
          <Separator className="my-4 bg-slate-700" />
          <div className="flex gap-3 flex-wrap">
            <Microscope className="text-slate-700" size={60} />
            <div className="flex gap-1 w-[75%] flex-wrap">
              {item.results.map((r) => {
                return (
                  <span key={r.id} className="flex items-center w-full">
                    {r.title}: {r.result}
                  </span>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default ComplaintsPageProps
