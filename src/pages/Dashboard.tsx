
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plus, Archive, ArchiveX, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useToast } from "@/components/ui/use-toast";

// Mock data for listed products
const initialProducts = [
  {
    id: "p1",
    title: "Engineering Mathematics Textbook",
    price: 599,
    category: "Books",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2730&auto=format&fit=crop",
    status: "active",
  },
  {
    id: "p2",
    title: "Scientific Calculator",
    price: 1299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1611321659616-0d303f26ed2c?q=80&w=2574&auto=format&fit=crop",
    status: "active",
  },
  {
    id: "p3",
    title: "Lab Coat",
    price: 699,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2670&auto=format&fit=crop",
    status: "archived",
  },
];

type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
  status: "active" | "archived";
};

export default function Dashboard() {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeTab, setActiveTab] = useState<"active" | "archived">("active");

  const filteredProducts = products.filter(product => product.status === activeTab);

  const handleArchive = (id: string) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, status: product.status === "active" ? "archived" : "active" } 
        : product
    ));
    
    toast({
      title: products.find(p => p.id === id)?.status === "active" ? "Item archived" : "Item unarchived",
      description: "Your listing has been updated.",
    });
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
    
    toast({
      title: "Item deleted",
      description: "Your listing has been removed.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gradient">Seller Dashboard</h1>
            <p className="text-muted-foreground">Manage your marketplace listings</p>
          </div>
          <Button asChild className="mt-4 sm:mt-0">
            <Link to="/sell">
              <Plus className="mr-2 h-4 w-4" /> List New Item
            </Link>
          </Button>
        </div>

        <div className="glass-morphism rounded-xl p-4 mb-8">
          <div className="flex border-b border-slate-700 mb-4">
            <button
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === "active"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("active")}
            >
              Active Listings
            </button>
            <button
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === "archived"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("archived")}
            >
              Archived
            </button>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                {activeTab === "active" 
                  ? "You don't have any active listings" 
                  : "You don't have any archived listings"}
              </p>
              {activeTab === "active" && (
                <Button asChild>
                  <Link to="/sell">
                    <Plus className="mr-2 h-4 w-4" /> List New Item
                  </Link>
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 relative overflow-hidden rounded-md">
                            <AspectRatio ratio={1/1}>
                              <img
                                src={product.image}
                                alt={product.title}
                                className="object-cover w-full h-full"
                              />
                            </AspectRatio>
                          </div>
                          <span className="line-clamp-2">{product.title}</span>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>₹{product.price}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleArchive(product.id)}
                          >
                            {product.status === "active" ? (
                              <>
                                <Archive className="h-4 w-4 mr-1" /> Archive
                              </>
                            ) : (
                              <>
                                <ArchiveX className="h-4 w-4 mr-1" /> Unarchive
                              </>
                            )}
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
