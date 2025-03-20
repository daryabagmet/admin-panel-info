'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { CalendarIcon } from 'lucide-react'
import { useAuth } from '@/data/context/AuthContext'

const currentYear = new Date().getFullYear()
const minDate = new Date(currentYear - 18, 0, 1)
const genderEnum = ['Male', 'Female', 'N/B'] as const
const formSchema = z.object({
  first_name: z.string().min(2, {
    message: 'First name is required',
  }),
  last_name: z.string().min(2, {
    message: 'Last name is required',
  }),
  gender: z.enum(genderEnum, {
    errorMap: () => ({ message: 'Gender is required' }),
  }),
  birthDate: z.date().max(minDate, { message: 'Too young' }),
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({
      message: 'Please enter a valid email',
    }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  confirmPassword: z.string().min(1, {
    message: 'Confirm Password is required',
  }),
})

const RegisterForm = () => {
  const { login } = useAuth();
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      gender: 'Male',
      birthDate: new Date('2006-01-01'),
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    login(data.email);
    router.push('/')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Sign up by adding the info below</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="flex justify-between items-center gap-4">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                      First name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-slate-100 border-0 focus-visible:ring-0 text-black focus-visible: ring-offset-0"
                        placeholder="Enter Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                      Last name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-slate-100 border-0 focus-visible:ring-0 text-black focus-visible: ring-offset-0"
                        placeholder="Enter last name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <FormField
                control={form.control}
                name="gender"
                render={() => (
                  <FormItem className="w-[50%] ">
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                      Gender
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="nb">N/B</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                      Set your birth date
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-full pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground',
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date(minDate)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div></div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-slate-100 border-0 focus-visible:ring-0 text-black focus-visible: ring-offset-0"
                      placeholder="Enter Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-slate-100 border-0 focus-visible:ring-0 text-black focus-visible: ring-offset-0"
                      placeholder="Enter Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-slate-100 border-0 focus-visible:ring-0 text-black focus-visible: ring-offset-0"
                      placeholder="Enter Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full">Sign In</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default RegisterForm
