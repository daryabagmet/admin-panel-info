'use client'

import { useRouter } from 'next/navigation'
import BackButton from '@/components/BackButton'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import complaints from '@/data/complaints'
import { useToast } from '@/components/ui/use-toast'
import { Plus } from 'lucide-react'

const doctorsNames = ['all', 'docA', 'docB', 'docC'] as const
const formSchema = z.object({
  subject: z.string().min(1, {
    message: 'Subject is required',
  }),
  body: z.string().min(1, {
    message: 'Body is required',
  }),
  doctor: z.enum(doctorsNames, {
    errorMap: () => ({ message: 'Doctor is required' }),
  }),
})

interface ComplaintsAddPageProps {
  params: {
    id: string
  }
}

const ComplaintsAddPage = ({ params }: ComplaintsAddPageProps) => {
  const router = useRouter()
  const { toast } = useToast()

  const complaint = complaints.find((complaint) => complaint.id === params.id)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: complaint?.subject || '',
      body: complaint?.body || '',
      doctor: 'all',
    },
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      description: 'Complaint has been added successfully',
    })
    router.push('/complaints')
  }

  return (
    <>
      <BackButton text="Back To complaints" link="/complaints" />
      <h3 className="text-2xl mb-4">Add complaint</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                  Subject
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100  border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    placeholder="Enter subject"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
                  Complaint
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-slate-100  border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    placeholder="Enter complaints"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="doctor"
            render={() => (
              <FormItem className="w-[50%] ">
                <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                  Select the doctor
                </FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All doctors</SelectItem>
                      <SelectItem value="docA">Doctor A</SelectItem>
                      <SelectItem value="docB">Doctor B</SelectItem>
                      <SelectItem value="docC">Doctor C</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full">
            <Plus />
            Add complaint
          </Button>
        </form>
      </Form>
    </>
  )
}

export default ComplaintsAddPage
