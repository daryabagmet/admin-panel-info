'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import data from '@/data/analytics'

const AnalyticsChart = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Patients analytics</CardTitle>
          <CardDescription>Visits per hours</CardDescription>
        </CardHeader>
      </Card>
    </>
  )
}

export default AnalyticsChart
