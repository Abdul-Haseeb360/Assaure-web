"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Container } from "./Container";
import Image from "next/image";
import { navigation } from "@/constant/data";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary-green text-white py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <Link href="/">
              <Image src="/assure-logo-v2.png" alt="" width={151} height={25} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-montserrat text-[14px] leading-[30px] font-normal"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-[#0B5D34] py-4 px-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/news-events"
                className="hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                News & Events
              </Link>
              <Link
                href="/careers"
                className="hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
