
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart, ArrowLeft, Package, Globe } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const productId = parseInt(id || "0");
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The product you are looking for does not exist or has been removed.
            </p>
            <Button onClick={() => navigate('/shop')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
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
  
  // Related products (same category but not the current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="text-gray-400 mx-2">/</span>
                    <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground">
                      Shop
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="text-gray-400 mx-2">/</span>
                    <Link to={`/shop?category=${product.category}`} className="text-sm text-muted-foreground hover:text-foreground">
                      {product.category}
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="text-gray-400 mx-2">/</span>
                    <span className="text-sm font-medium">
                      {product.name}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          
          {/* Product Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto rounded-md" 
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-heading font-semibold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <span className={`px-2 py-1 text-xs rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                <span className="mx-2">•</span>
                <span className="text-sm text-muted-foreground">{product.category}</span>
              </div>
              
              <p className="text-2xl font-medium text-primary mb-4">
                ${product.price.toFixed(2)}
              </p>
              
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-muted-foreground mr-2" />
                    <span>Weight: {product.weight}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-muted-foreground mr-2" />
                    <span>Origin: {product.origin}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Link to="/checkout" className="flex-1">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    disabled={!product.inStock}
                    className="w-full"
                  >
                    Buy Now
                  </Button>
                </Link>
              </div>
              
              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-medium mb-2">Shipping Information</h3>
                <p className="text-sm text-muted-foreground">
                  Free shipping on orders over $50. Delivery within 2-4 business days.
                </p>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-heading font-semibold mb-6">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <Link to={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{relatedProduct.name}</h3>
                        <p className="text-primary mt-1">${relatedProduct.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
