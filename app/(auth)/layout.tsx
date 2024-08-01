const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-full items-center justify-center relative my-20 mx-auto">
        {children}
      </div>
    </>
  )
}

export default AuthLayout
