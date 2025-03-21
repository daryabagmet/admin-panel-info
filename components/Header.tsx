'use client'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../img/logo.png'
import Navbar from '@/components/Navbar'
import { useAuth } from '@/data/context/AuthContext'

const Header = () => {
  const { user } = useAuth();

  return (
    <div className="bg-primary text-white py-2 px-5 flex justify-between">
      <Link href="/" className="flex items-center justify-center">
        <Image src={logo} alt="logo" width={40} />
        <span className="ml-2 text-2xl">Hospital Helper</span>
      </Link>
      {user && <Navbar />}
    </div>
  )
}

export default Header
