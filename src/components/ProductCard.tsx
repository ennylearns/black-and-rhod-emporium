import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  colors: string;
  sizes: string;
  image: string;
}

const ProductCard = ({ name, price, colors, sizes, image }: ProductCardProps) => {
  const handleOrder = () => {
    const message = encodeURIComponent(`Hi! I'd like to order the ${name} (${price})`);
    window.open(`https://wa.me/2348105319069?text=${message}`, "_blank");
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-secondary overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-1">Colors: {colors}</p>
        <p className="text-sm text-muted-foreground mb-2">Sizes: {sizes}</p>
        <p className="text-xl font-bold">{price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleOrder} className="w-full" size="lg">
          <MessageCircle className="mr-2 h-4 w-4" />
          ORDER VIA WHATSAPP
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
