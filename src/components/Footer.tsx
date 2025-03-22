import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";
function Footer() {
  return (
    <footer className=" ">
      <Container>
        <div className="py-12 font-montserrat">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and Tagline Section */}
            <div className=" ">
              <Image
                src="/assure-logo.svg"
                alt="Assure Logo"
                width={200}
                height={60}
              />
              <p className="mt-4 text-sm leading-relaxed text-tertiary-gray">
                Your Assurance Partner in Human Rights Safety, Health &
                Environment
              </p>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-lg font-medium text-black mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-black text-tertiary-gray transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-black text-tertiary-gray transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news-events"
                    className="hover:text-black text-tertiary-gray transition-colors"
                  >
                    News & Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-lg font-medium text-black mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/human-rights"
                    className="hover:text-black text-tertiary-gray transition-colors"
                  >
                    Human Rights Due Diligence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/sustainability"
                    className="hover:text-black text-tertiary-gray transition-colors"
                  >
                    Sustainability Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/safety"
                    className="hover:text-black text-tertiary-gray transition-colors"
                  >
                    Fire, Electrical & Building Safety
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/training"
                    className="hover:text-black text-tertiary-gray transition-colors"
                  >
                    Training & Remediation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Details Section */}
            <div>
              <h3 className="text-lg font-medium text-black mb-4">
                Contact Details
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="tel:+924235249499"
                    className="hover:text-black text-tertiary-gray transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:usmanjavaid@assure-int.com"
                    className="hover:text-black text-tertiary-gray transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="pt-4 hover:text-black text-tertiary-gray ">
                  <p className="text-sm">{siteConfig.offices.canada.address}</p>
                </li>
                <li className="pt-4 hover:text-black text-tertiary-gray ">
                  <p className="text-sm">
                    {siteConfig.offices.pakistan.address}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-12 pt-8 border-t border-[#CACACA] flex justify-between space-x-6">
            <div className="text-sm text-[#9A9A9A] ">
              © {new Date().getFullYear()} ASSURE International - Developed by{" "}
              <Link
                href="https://www.configlabs.co/"
                className="font-semibold cursor-pointer"
              >
                Configlabs
              </Link>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm hover:text-black text-[#9A9A9A] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-condition"
                className="text-sm hover:text-black text-[#9A9A9A] transition-colors"
              >
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
