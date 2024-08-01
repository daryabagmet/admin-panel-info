import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const AuthTabs = () => {
  return (
    <Tabs defaultValue="login" className="w-[500px]">
      <TabsList className="grid grid-cols-2 w-full">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  )
}

export default AuthTabs
