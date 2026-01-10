import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MessageCircle, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-center mb-12">
              Have questions? Want to place an order? We'd love to hear from you!
              Reach out through any of our channels below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* WhatsApp */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Chat with us instantly for orders and inquiries
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://wa.me/2348105319069"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message Us
                  </a>
                </Button>
              </div>

              {/* Instagram */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                  <Instagram className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Instagram</h3>
                <p className="text-muted-foreground mb-4">
                  Follow us and DM for orders and updates
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://www.instagram.com/black_rhood01?igsh=Y3VjNXp1ODY1NTJ6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Us
                  </a>
                </Button>
              </div>

              {/* TikTok */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">TikTok</h3>
                <p className="text-muted-foreground mb-4">
                  See our latest drops and lifestyle content
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://vm.tiktok.com/ZSHETHwnXqDXH-bNbFC/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-secondary p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
              <p className="text-muted-foreground mb-2">
                We respond to all messages within 24 hours
              </p>
              <p className="text-muted-foreground">
                Monday - Saturday: 9:00 AM - 6:00 PM (WAT)
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
