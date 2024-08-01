'use client'

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
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import complaints from '@/data/complaints'
import { useToast } from '@/components/ui/use-toast'
import { Plus } from 'lucide-react'

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
  body: z.string().min(1, {
    message: 'Body is required',
  }),
  doctor: z.string().min(1, {
    message: 'doctor is required',
  }),
  date: z.string().min(1, {
    message: 'Date is required',
  }),
})

interface ComplaintsAddPageProps {
  params: {
    id: string
  }
}

const ComplaintsAddPage = ({ params }: ComplaintsAddPageProps) => {
  const { toast } = useToast()

  const complaint = complaints.find((complaint) => complaint.id === params.id)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: complaint?.title || '',
      body: complaint?.body || '',
      doctor: complaint?.doctor || '',
      date: complaint?.date || '',
    },
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: 'Complaint has been added successfully',
      description: `Added by ${complaint?.doctor} on ${complaint?.date}`,
    })
  }

  return (
    <>
      <BackButton text="Back To complaints" link="/complaints" />
      <h3 className="text-2xl mb-4">Add complaint</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100  border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    placeholder="Enter Title"
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
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-slate-100  border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    placeholder="Enter Body"
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
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                  doctor
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    placeholder="Enter doctor"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    placeholder="Enter Date"
                    {...field}
                  />
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
