import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">BLACK&RHOOD</h3>
            <p className="text-sm opacity-90">
              Rooted in the Hood, Powered by Black.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/shop" className="opacity-90 hover:opacity-100 transition-opacity">Shop</a></li>
              <li><a href="/about" className="opacity-90 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="/size-guide" className="opacity-90 hover:opacity-100 transition-opacity">Size Guide</a></li>
              <li><a href="/payments" className="opacity-90 hover:opacity-100 transition-opacity">Payments & Orders</a></li>
              <li><a href="/shipping" className="opacity-90 hover:opacity-100 transition-opacity">Shipping & Delivery</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://wa.me/2348105319"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/black_rhood01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@blackrhood"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>© 2025 Black&Rhood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
