
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductCard, Product } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";

// Mock data - replace with actual API call
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Engineering Mathematics Textbook",
    description: "Comprehensive mathematics textbook covering all engineering topics with solved examples and practice problems.",
    price: 599,
    category: "Books",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2730&auto=format&fit=crop",
    seller: { id: "s1", name: "Academic Store" }
  },
  {
    id: "2",
    title: "Scientific Calculator",
    description: "Advanced scientific calculator with all functions needed for engineering and science courses.",
    price: 1299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1611321659616-0d303f26ed2c?q=80&w=2574&auto=format&fit=crop",
    seller: { id: "s2", name: "Tech Gadgets" }
  },
  {
    id: "3",
    title: "Lab Coat",
    description: "High-quality white lab coat for science and medical students, available in all sizes.",
    price: 699,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2670&auto=format&fit=crop",
    seller: { id: "s3", name: "Campus Store" }
  },
  {
    id: "4",
    title: "Computer Science Notes",
    description: "Complete handwritten notes for CS fundamentals, data structures, algorithms and more.",
    price: 399,
    category: "Notes",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2670&auto=format&fit=crop",
    seller: { id: "s4", name: "TopperNotes" }
  },
  {
    id: "5",
    title: "Drawing Instruments Set",
    description: "Professional drafting and drawing instrument set for engineering students.",
    price: 849,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1602664876864-992f2d77037b?q=80&w=2680&auto=format&fit=crop",
    seller: { id: "s5", name: "Art Suppliers" }
  },
  {
    id: "6",
    title: "Mechanical Engineering Reference",
    description: "Comprehensive mechanical engineering reference guide with formulas and principles.",
    price: 749,
    category: "Books",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
    seller: { id: "s1", name: "Academic Store" }
  }
];

// Categories for filtering
const CATEGORIES = ["All", "Books", "Electronics", "Clothing", "Notes", "Stationery"];

export default function Buy() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gradient">College Marketplace</h1>
          <p className="text-muted-foreground">Find and buy products from fellow students</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search and filters sidebar */}
          <div className="lg:w-1/4 glass-morphism rounded-xl p-4">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 bg-slate-800/50 border-slate-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div>
              <h3 className="text-lg font-medium mb-3">Categories</h3>
              <ScrollArea className="h-72">
                <div className="flex flex-col gap-2 pr-4">
                  {CATEGORIES.map((category) => (
                    <Button
                      key={category}
                      variant={category === selectedCategory ? "default" : "ghost"}
                      className={category === selectedCategory ? "justify-start" : "justify-start hover:bg-slate-800"}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Product grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No products found</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
