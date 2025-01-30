"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const navLinks = {
  name: "GMC",
  nav: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Investment Plan", href: "/investment-plan" },
    { title: "Community Impact", href: "/community-impact" },
  ],
};

export function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  return (
    <header className="fixed top-0 z-50 w-full bg-main-darkGreen backdrop-blur-sm border-b  border-gray-600 p-2">
      <div className=" flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">{navLinks.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative font-medium text-white transition-all before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full",
                pathname === item.href && "before:w-full"
              )}
            >
              {item.title}
            </Link>
          ))}
          <Button
            className="bg-main-lightGreen hover:bg-main-hover h-11 text-lg"
            onClick={() => router.push("/signup")}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden h-10 w-10 bg-main-lightGreen">
              <Menu className="h-[10rem] w-[10rem] text-main-darkGreen" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="">
            <SheetTitle></SheetTitle>
            <nav className="flex flex-col space-y-4">
              {navLinks.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-main-darkGreen"
                >
                  {item.title}
                </Link>
              ))}
              <Button
                className="mt-4 bg-main-lightGreen hover:bg-main-hover"
                onClick={() => router.push("/signup")}
              >
                Get Started
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
