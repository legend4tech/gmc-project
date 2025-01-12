import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const navLinks = {
  name: "GMC",
  nav: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/projects" },
    { title: "Investment Details", href: "/about" },
    { title: "Community Impact", href: "/invest" },
  ],
};

export function NavBar() {
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
              className=" font-medium text-white hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <Button>Get Started</Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4">
              {navLinks.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium"
                >
                  {item.title}
                </Link>
              ))}
              <Button className="mt-4">Get Started</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
