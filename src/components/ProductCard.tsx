
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  seller: {
    id: string;
    name: string;
  };
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 review-card hover:scale-[1.02]">
        <CardHeader className="p-0">
          <div className="relative">
            <AspectRatio ratio={4/3}>
              <img 
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </AspectRatio>
            <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
              {product.category}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-gradient text-lg mb-2 truncate">{product.title}</CardTitle>
          <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4 pt-0">
          <p className="font-bold text-blue-400">₹{product.price}</p>
          <p className="text-xs text-slate-400">Seller: {product.seller.name}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
