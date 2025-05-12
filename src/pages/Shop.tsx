
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  useEffect(() => {
    let result = products;
    
    // Apply category filter
    if (selectedCategory !== "All") {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(lowercasedTerm) || 
          product.description.toLowerCase().includes(lowercasedTerm) ||
          product.origin.toLowerCase().includes(lowercasedTerm)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Shop Header */}
        <section className="bg-rice-100 rice-grain-bg py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-heading font-bold mb-4">Our Rice Collection</h1>
              <p className="text-lg text-muted-foreground">
                Browse our premium selection of rice varieties from around the world, 
                carefully curated for quality and taste.
              </p>
            </div>
          </div>
        </section>
        
        {/* Shop Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                  <h3 className="text-lg font-medium mb-4">Filters</h3>
                  
                  {/* Search */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Search</label>
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  {/* Categories */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Categories</label>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div 
                          key={category} 
                          onClick={() => setSelectedCategory(category)}
                          className={`cursor-pointer px-3 py-2 rounded-md text-sm ${
                            selectedCategory === category 
                              ? 'bg-primary text-white' 
                              : 'hover:bg-muted'
                          }`}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Reset Filters */}
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchTerm("");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="lg:col-span-3">
                {/* Active Filters */}
                {(selectedCategory !== "All" || searchTerm) && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {selectedCategory !== "All" && (
                      <Badge className="px-3 py-1">
                        Category: {selectedCategory}
                        <button 
                          className="ml-2"
                          onClick={() => setSelectedCategory("All")}
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                    
                    {searchTerm && (
                      <Badge className="px-3 py-1">
                        Search: {searchTerm}
                        <button 
                          className="ml-2"
                          onClick={() => setSearchTerm("")}
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                  </div>
                )}
                
                {/* Results Count */}
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Showing {filteredProducts.length} of {products.length} products
                  </p>
                </div>
                
                {/* Products */}
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium mb-2">No products found</h3>
                    <p className="text-muted-foreground">
                      Try changing your filters or search term.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
