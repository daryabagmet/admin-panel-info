import Sidebar from '@/components/Sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex">
        <div className="hidden md:block h-[100vh] w-[300px]">
          <Sidebar />
        </div>
        <div className="w-full p-5 md:max-w-[1160px]">{children}</div>
      </div>
    </>
  )
}

export default MainLayout
