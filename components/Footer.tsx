const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-primary py-2 px-5 flex justify-center">
      <span className="text-white">
        {currentYear} &copy; Hospital Helper. All rights reserved.
      </span>
    </div>
  )
}

export default Footer
