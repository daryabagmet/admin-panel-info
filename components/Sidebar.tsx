import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import Link from 'next/link'
import {
  LayoutDashboard,
  Settings,
  Folders,
  Newspaper,
  CreditCard,
  User,
} from 'lucide-react'

const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none p-2">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList >
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions" >
          <Link href="/" passHref>
            <CommandItem className="text-base">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </CommandItem>
          </Link>

          <Link href="/complaints" passHref>
            <CommandItem className="text-base">
              <Newspaper className="mr-2 h-4 w-4" />
              Complaints
            </CommandItem>
          </Link>

          <Link href="/categories" passHref>
            <CommandItem className="text-base">
              <Folders className="mr-2 h-4 w-4" />
              Categories
            </CommandItem>
          </Link>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">

          <Link href="/profile" passHref>
            <CommandItem className="text-base">
              <User className="mr-2 h-4 w-4" />
              Profile
            </CommandItem>
          </Link>

          <Link href="/billing" passHref>
            <CommandItem className="text-base">
              <CreditCard className="mr-2 h-4 w-4" />
              Billing
            </CommandItem>
          </Link>

          <Link href="/settings" passHref>
            <CommandItem className="text-base">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </CommandItem>
          </Link>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default Sidebar
