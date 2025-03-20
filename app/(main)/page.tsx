'use client';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart'
import DashboardCard from '@/components/dashboard/DashboardCard'
import DataTable from '@/components/dashboard/DataTable'
import {
  ClipboardPlus,
  User,
  Folder,
  MessageCircle,
  Newspaper,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { useAuth } from '@/data/context/AuthContext'

export default function Home() {
  const { user } = useAuth();
  const username = user?.split('@')[0] || 'user';

  return (
    <>
      {/* <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
      </div>
      <AnalyticsChart /> */}
      <Card className="bg-slate-100 p-4 pb-0">
        <CardContent>
          <div className="flex gap-5 justify-center items-center">
            <User className="text-slate-500" size={70} />
            <h3 className="text-5xl font-semibold text-slate-500">
              Hello, {username}
            </h3>
          </div>
          <h3 className="text-3xl text-center mb-4 font-bold text-slate-500">
            How do you feel today?
          </h3>
        </CardContent>
      </Card>

      <Card className="bg-blue-200 p-4 pb-0 w-[400px] mx-auto my-4">
        <CardContent>
          <div className="flex gap-5 justify-center items-center">
            <ClipboardPlus className="text-slate-700" size={64} />
            <Link
              href="/complaints/add"
              className="text-2xl font-semibold text-slate-700"
            >
              Add new complaint
            </Link>
          </div>
        </CardContent>
      </Card>
      <DataTable title="Old complaints" limit={5} />
    </>
  )
}
