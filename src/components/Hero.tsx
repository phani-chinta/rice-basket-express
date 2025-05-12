
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-rice-100 rice-grain-bg py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-rice-800">
              Premium Rice <br />
              <span className="text-primary">Delivered to You</span>
            </h1>
            <p className="text-lg mb-8 text-rice-700 max-w-md">
              Discover the finest selection of premium rice varieties from around the world,
              delivered straight to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="flex items-center mt-8">
              <div className="flex items-center mr-6">
                <div className="w-10 h-10 rounded-full bg-leaf-100 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-leaf-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">Quality Guaranteed</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-leaf-100 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-leaf-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </div>
                <span className="text-sm">Fast Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Various types of rice" 
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg w-32 hidden md:block">
              <div className="text-center">
                <span className="block text-xs text-muted-foreground">Starting from</span>
                <span className="block text-2xl font-bold text-primary">$4.99</span>
                <span className="block text-xs text-muted-foreground">per kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
