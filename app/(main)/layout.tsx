import Sidebar from '@/components/Sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex">
        <div className="hidden md:block min-h-[100vh] w-[340px]">
          <Sidebar />
        </div>
        <div className="w-full p-6 md:max-w-[1160px]">{children}</div>
      </div>
    </>
  )
}

export default MainLayout
