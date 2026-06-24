"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {LayoutHeaderCellsLargeFill, Person, ArrowRightFromSquare} from '@gravity-ui/icons';
import {
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const role = session?.user?.role
  const pathName = usePathname();
  if(pathName.includes("dashboard")){
    return null;
  }
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Startups", href: "/startups" },
    { name: "Browse Opportunities", href: "/opportunities" },
    { name: "Pricing", href: "/pricing" },
  ];
  const name = session?.user?.name
  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur-lg">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-tight">
            Startup <span className="text-blue-600">Forge</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 rounded-full bg-gray-100 p-1 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-5 py-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:bg-white hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {session ? (
              <Dropdown>
      <Button aria-label="Menu" className="bg-transparent">
        <Image src={session?.user?.image} width={40} height={40} alt={session?.user?.name} className="rounded-full"></Image>
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="name" textValue="New file">
           <h1 className="font-bold">{name} ({session?.user?.role})</h1>
          </Dropdown.Item>
          <Dropdown.Item id="dashboard" textValue="New file">
          <Link href={`/dashboard/${role}`}> <Button variant="ghost"> <LayoutHeaderCellsLargeFill/> <span className="font-semibold">Dashboard</span> </Button>  </Link> 
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Link href="/profile"><Button variant="ghost"><Person/> <span className="font-semibold">Profile</span></Button></Link> 
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
           <Button variant="danger-soft" className="w-full" onClick={async()=>await authClient.signOut()}><ArrowRightFromSquare/> Logout</Button>
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown.Popover>
                </Dropdown>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-600 transition hover:text-black"
                >
                  Sign In
                </Link>

                <Link href="/register">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t md:hidden">
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-gray-700 transition hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-2 border-t pt-4">
                {session ? (
                  <>
                    <Dropdown>
      <Button aria-label="Menu" className="bg-transparent">
        <Image src={session?.user?.image} width={40} height={40} alt={session?.user?.name} className="rounded-full"></Image>
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="name" textValue="New file">
           <h1 className="font-bold">{name} ({session?.user?.role})</h1>
          </Dropdown.Item>
          <Dropdown.Item id="dashboard" textValue="New file">
          <Link href="/dashboard"> <Button variant="ghost"> <LayoutHeaderCellsLargeFill/> <span className="font-semibold">Dashboard</span> </Button>  </Link> 
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Link href="/profile"><Button variant="ghost"><Person/> <span className="font-semibold">Profile</span></Button></Link> 
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
           <Button variant="danger-soft" className="w-full" onClick={async()=>await authClient.signOut()}><ArrowRightFromSquare/> Logout</Button>
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown.Popover>
                </Dropdown>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-100"
                    >
                      Sign In
                    </Link>

                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;