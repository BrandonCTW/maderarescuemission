import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2E3192" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logos/MRM-logo.png"
                alt="Madera Rescue Mission Logo"
                width={48}
                height={48}
                className="rounded"
              />
              <span className="font-bold text-sm leading-tight whitespace-nowrap">
                Madera Rescue Mission
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Serving the least, the last, and the lost with radical hospitality since 1987.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-200 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/our-story" className="text-blue-100 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-blue-100 hover:text-white">Services</Link></li>
              <li><Link href="/staff" className="text-blue-100 hover:text-white">Staff</Link></li>
              <li><Link href="/donate" className="text-blue-100 hover:text-white">Get Involved</Link></li>
              <li><Link href="/blog" className="text-blue-100 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-200 mb-4">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100072569882694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-200 mb-4">Stay Connected</h3>
            <p className="text-blue-200 text-sm mb-3">Sign up for updates from the Mission.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-400 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-200">
          <p>Madera Rescue Mission - All Rights Reserved. &copy; {new Date().getFullYear()}</p>
          <p>1305 Clinton Street, Madera, CA 93638 | <a href="tel:5596758321" className="hover:text-white">(559) 675-8321</a></p>
        </div>
      </div>
    </footer>
  );
}
