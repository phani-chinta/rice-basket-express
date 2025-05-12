
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <FeaturedProducts />
        <div className="bg-rice-100 rice-grain-bg py-16">
          <div className="container mx-auto px-4">
            <div className="bg-rice-800 text-white p-8 md:p-12 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-rice-200">
                  Stay updated with our latest products, special offers, and cooking tips.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-md flex-grow text-foreground"
                  />
                  <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
