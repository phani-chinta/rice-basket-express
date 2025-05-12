
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  weight: string;
  origin: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      duration: 2000,
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block">
        <div className="h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-medium text-lg mb-1 hover:text-primary transition-colors">{product.name}</h3>
          </Link>
          <span className="text-primary font-medium">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{product.weight} • {product.origin}</p>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className={`text-xs px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          <Button 
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
