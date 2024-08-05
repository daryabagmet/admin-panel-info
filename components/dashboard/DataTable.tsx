'use client'
import Link from 'next/link'
import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import complaints from '@/data/complaints'
import { Complaint } from '@/types/dataTypes'

interface DataTableProps {
  limit?: number
  title?: string
}

const DataTable = ({ title, limit }: DataTableProps) => {
  const sortedData: Complaint[] = [...complaints].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
  const filteredData: Complaint[] = limit
    ? sortedData.slice(0, limit)
    : sortedData

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">
        {title ? title : 'Patients'}
      </h3>
      <Table>
        <TableCaption>A list of recent patients</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead className="hidden md:table-cell">Doctor</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead className="hidden md:table-cell">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.subject}</TableCell>
              <TableCell className="hidden md:table-cell">
                {item.doctor}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {item.date}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Link href={`complaints/${item.id}`}>View details</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default DataTable
