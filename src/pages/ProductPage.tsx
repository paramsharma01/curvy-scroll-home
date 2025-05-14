
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, MessageCircle, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Product } from "@/components/ProductCard";

// Mock data - replace with actual API call
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Engineering Mathematics Textbook",
    description: "Comprehensive mathematics textbook covering all engineering topics with solved examples and practice problems. This book is designed for first and second-year engineering students across all branches. It includes chapters on differential calculus, integral calculus, differential equations, complex analysis, and numerical methods. The book is in excellent condition with no markings or highlights.",
    price: 599,
    category: "Books",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2730&auto=format&fit=crop",
    seller: { id: "s1", name: "Academic Store" }
  },
  {
    id: "2",
    title: "Scientific Calculator",
    description: "Advanced scientific calculator with all functions needed for engineering and science courses. Features include complex number calculations, matrix operations, statistical analysis, and programmable functions. The calculator comes with a protective case and user manual. Battery included and in perfect working condition.",
    price: 1299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1611321659616-0d303f26ed2c?q=80&w=2574&auto=format&fit=crop",
    seller: { id: "s2", name: "Tech Gadgets" }
  },
  {
    id: "3",
    title: "Lab Coat",
    description: "High-quality white lab coat for science and medical students, available in all sizes. Made from 100% cotton for comfort during long lab sessions. Features include multiple pockets for storing pens, notebooks and small instruments. The coat is stain-resistant and machine washable.",
    price: 699,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2670&auto=format&fit=crop",
    seller: { id: "s3", name: "Campus Store" }
  },
  {
    id: "4",
    title: "Computer Science Notes",
    description: "Complete handwritten notes for CS fundamentals, data structures, algorithms and more. These comprehensive notes cover the entire curriculum for Computer Science courses. The notes include diagrams, examples, and practice problems with solutions. They are organized by topic and easy to follow.",
    price: 399,
    category: "Notes",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2670&auto=format&fit=crop",
    seller: { id: "s4", name: "TopperNotes" }
  },
  {
    id: "5",
    title: "Drawing Instruments Set",
    description: "Professional drafting and drawing instrument set for engineering students. This high-precision set includes compass, divider, set squares, protractor, and various drawing tools required for technical drawing courses. The instruments come in a durable metal case for safe storage and transport.",
    price: 849,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1602664876864-992f2d77037b?q=80&w=2680&auto=format&fit=crop",
    seller: { id: "s5", name: "Art Suppliers" }
  },
  {
    id: "6",
    title: "Mechanical Engineering Reference",
    description: "Comprehensive mechanical engineering reference guide with formulas and principles. This reference book covers thermodynamics, fluid mechanics, machine design, materials science, and manufacturing processes. It's an essential resource for mechanical engineering students and includes practical examples and quick reference tables.",
    price: 749,
    category: "Books",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
    seller: { id: "s1", name: "Academic Store" }
  }
];

// Mock message type
interface Message {
  id: string;
  sender: "user" | "seller";
  text: string;
  timestamp: Date;
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  // Find product by id
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button asChild>
            <Link to="/buy">Back to products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const newUserMessage: Message = {
      id: `msg-${Date.now()}-user`,
      sender: "user",
      text: message,
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setMessage("");
    
    // Mock seller response after a short delay
    setTimeout(() => {
      const sellerResponse: Message = {
        id: `msg-${Date.now()}-seller`,
        sender: "seller",
        text: `Thank you for your interest in ${product.title}. How can I help you with this product?`,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, sellerResponse]);
    }, 1000);
    
    toast.success("Message sent successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-16 max-w-6xl">
        <Link to="/buy" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product image */}
          <div className="lg:w-1/2">
            <div className="glass-morphism rounded-xl p-4">
              <AspectRatio ratio={4/3}>
                <img 
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </AspectRatio>
            </div>
          </div>
          
          {/* Product details */}
          <div className="lg:w-1/2">
            <div className="glass-morphism rounded-xl p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gradient mb-2">{product.title}</h1>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-sm text-slate-400">Seller: {product.seller.name}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <h3 className="text-xl font-medium mb-2">Description</h3>
              <p className="text-slate-300 mb-6">{product.description}</p>
              
              <Separator className="my-4" />
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Price</p>
                  <p className="text-3xl font-bold text-blue-400">₹{product.price}</p>
                </div>
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => setShowChat(!showChat)}
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat with Seller
                </Button>
              </div>
            </div>
            
            {/* Chat section */}
            {showChat && (
              <Card className="mt-6 glass-morphism">
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-3">Chat with {product.seller.name}</h3>
                  
                  {/* Messages */}
                  <div className="h-64 mb-4 overflow-y-auto bg-slate-900/50 rounded-lg p-4">
                    {messages.length === 0 ? (
                      <div className="text-center text-slate-500 h-full flex items-center justify-center">
                        <p>Send a message to start chatting</p>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {messages.map(msg => (
                          <div 
                            key={msg.id} 
                            className={`max-w-[80%] p-3 rounded-lg ${
                              msg.sender === 'user' 
                                ? 'bg-blue-600/30 ml-auto rounded-tr-none' 
                                : 'bg-slate-800 mr-auto rounded-tl-none'
                            }`}
                          >
                            <p>{msg.text}</p>
                            <p className="text-xs text-slate-400 mt-1 text-right">
                              {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Message input */}
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Type your message..." 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && message) {
                          handleSendMessage();
                        }
                      }}
                      className="bg-slate-800/50 border-slate-700"
                    />
                    <Button onClick={handleSendMessage} disabled={!message.trim()}>
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
