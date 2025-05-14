
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Image } from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(value || null);
  
  // Mock image URLs to simulate uploads
  const mockImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop"
  ];

  const handleImageSelect = () => {
    // In a real app, this would open a file picker
    // For demo, we'll just pick a random image from our mock images
    const randomImage = mockImages[Math.floor(Math.random() * mockImages.length)];
    setPreview(randomImage);
    onChange(randomImage);
  };

  const handleRemoveImage = () => {
    setPreview(null);
    onChange("");
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-slate-700 rounded-lg overflow-hidden">
        {preview ? (
          <div className="relative">
            <AspectRatio ratio={16/9}>
              <img 
                src={preview} 
                alt="Product preview" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-center h-44">
            <Image className="h-10 w-10 text-muted-foreground mb-4" />
            <p className="mb-2 text-sm text-muted-foreground">
              Drag and drop an image, or click to browse
            </p>
            <p className="text-xs text-muted-foreground">
              PNG, JPG or WEBP (max 5MB)
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <Button 
          type="button" 
          variant={preview ? "secondary" : "default"} 
          onClick={handleImageSelect}
          className="flex-1"
        >
          {preview ? "Change Image" : "Upload Image"}
        </Button>
        
        {preview && (
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleRemoveImage}
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}
