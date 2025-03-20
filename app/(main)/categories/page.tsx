import { Card, CardContent } from '@/components/ui/card'
import { BriefcaseMedical, Microscope, Newspaper, Stethoscope } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    id: '1',
    title: 'My appointments',
    icon: <BriefcaseMedical className="mr-2 h-10 w-10 text-slate-600" />,
    link: '/appointments'
  },
  {
    id: '2', title:
      'Tests results',
    icon: <Microscope className="mr-2 h-10 w-10 text-slate-600" />,
    link: '/results'
  },
  {
    id: '3',
    title: 'Articles',
    icon: <Newspaper className="mr-2 h-10 w-10 text-slate-600" />,
    link: '/articles'
  },
  {
    id: '4', title: 'Doctors',
    icon: <Stethoscope className="mr-2 h-10 w-10 text-slate-600" />,
    link: '/articles'
  }]

const CategoriesPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      {categories.map((c) => {
        const { id, title, icon, link } = c;
        return (
          <Card key={id} className="bg-slate-100 p-4 pb-0 hover:shadow-lg transition flex-1">
            <CardContent className="flex flex-col items-center text-center">
              {icon}
              <h5 className="text-xl mt-3 font-bold text-slate-600">{title}</h5>
              <Link
                href={link}
                className="mt-4 text-blue-400 font-semibold hover:underline"
              >
                View More →
              </Link>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default CategoriesPage
