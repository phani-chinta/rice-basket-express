
import React from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  // Select 4 products to feature
  const featuredProducts = products.slice(0, 4);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-semibold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular rice varieties, known for their exceptional quality and flavor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
