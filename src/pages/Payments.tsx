import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Payments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Payments & Orders</h1>
          </div>
        </section>

        {/* Payment Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Payment Method */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Payment Method</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Bank Transfer</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">Bank Name:</span>
                    <span>First Bank of Nigeria</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">Account Number:</span>
                    <span>1234567890</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Account Name:</span>
                    <span>Black&Rhood Limited</span>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Order */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">How to Order</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Browse Products</h3>
                    <p className="text-muted-foreground">
                      Explore our collection of shirts, caps, and hoodies. Select your preferred item.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Contact Us</h3>
                    <p className="text-muted-foreground">
                      Click "Order via WhatsApp" or send us a message on Instagram with your order details.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Make Payment</h3>
                    <p className="text-muted-foreground">
                      Transfer the total amount (product price + shipping fee) to our bank account.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Send Proof</h3>
                    <p className="text-muted-foreground">
                      Share your payment receipt via WhatsApp or Instagram along with your delivery address.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Receive Your Order</h3>
                    <p className="text-muted-foreground">
                      Your order will be processed and delivered within 1 week.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="bg-secondary p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Order?</h3>
              <p className="mb-6 text-muted-foreground">
                Contact us via WhatsApp or Instagram to place your order
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a
                    href="https://wa.me/2348105319"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href="https://www.instagram.com/black_rhood01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Payments;
