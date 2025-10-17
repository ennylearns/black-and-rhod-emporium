import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SizeGuide = () => {
  const sizes = [
    { size: "S", chest: "34–36", length: "27" },
    { size: "M", chest: "38–40", length: "28" },
    { size: "L", chest: "42–44", length: "29" },
    { size: "XL", chest: "46–48", length: "30" },
    { size: "XXL", chest: "50–52", length: "31" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Size Guide</h1>
          </div>
        </section>

        {/* Size Guide Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-center mb-8">
              Find your perfect fit with our comprehensive size chart. All measurements are in inches.
            </p>

            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Size</TableHead>
                    <TableHead className="font-bold">Chest (inches)</TableHead>
                    <TableHead className="font-bold">Length (inches)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sizes.map((item) => (
                    <TableRow key={item.size}>
                      <TableCell className="font-medium">{item.size}</TableCell>
                      <TableCell>{item.chest}</TableCell>
                      <TableCell>{item.length}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Measurements may vary slightly depending on the product. 
                For assistance, contact us via WhatsApp at{" "}
                <a 
                  href="https://wa.me/2348105319" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  +234 810 5319
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SizeGuide;
