import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Truck, MapPin, Clock, Package } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Shipping & Delivery</h1>
          </div>
        </section>

        {/* Shipping Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Delivery Coverage */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Delivery Coverage</h3>
                </div>
                <p className="text-muted-foreground">
                  We deliver nationwide across Nigeria to all states and major cities.
                </p>
              </div>

              {/* Delivery Time */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Estimated Delivery</h3>
                </div>
                <p className="text-muted-foreground">
                  All orders are delivered within 1 week (7 business days) after payment confirmation.
                </p>
              </div>

              {/* Shipping Fee */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Truck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Shipping Fee</h3>
                </div>
                <p className="text-muted-foreground">
                  Flat rate shipping fee of <strong>₦2,500</strong> for all orders across Nigeria.
                </p>
              </div>

              {/* Order Tracking */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Package className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Order Tracking</h3>
                </div>
                <p className="text-muted-foreground">
                  You'll receive updates on your order status via WhatsApp or Instagram.
                </p>
              </div>
            </div>

            {/* Delivery Process */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Delivery Process</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Order Confirmation</h3>
                    <p className="text-muted-foreground">
                      After payment verification, we'll confirm your order and delivery details.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Processing</h3>
                    <p className="text-muted-foreground">
                      Your order is carefully packed and prepared for shipping.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Dispatch</h3>
                    <p className="text-muted-foreground">
                      We'll notify you when your order has been dispatched with tracking information.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Delivery</h3>
                    <p className="text-muted-foreground">
                      Your package arrives at your doorstep within the estimated delivery time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Returns Policy */}
            <div className="bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Returns Policy</h2>
              <p className="text-muted-foreground mb-4">
                We want you to love your Black&Rhood products. If you're not completely satisfied, 
                we accept returns within 7 days of delivery for unused items in original packaging.
              </p>
              <p className="text-sm text-muted-foreground">
                Contact us via WhatsApp or Instagram to initiate a return. Return shipping costs 
                are the responsibility of the customer unless the item received was defective or incorrect.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
