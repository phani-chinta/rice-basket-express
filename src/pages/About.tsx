
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-rice-100 rice-grain-bg py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-heading font-bold mb-4">About Rice Basket Express</h1>
              <p className="text-lg text-rice-700 mb-6">
                We're passionate about bringing the finest quality rice from around the world directly to your doorstep.
              </p>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-semibold mb-4">Our Story</h2>
                <p className="mb-4 text-muted-foreground">
                  Rice Basket Express was founded in 2015 by a group of food enthusiasts who recognized the need for high-quality rice varieties that weren't readily available in local supermarkets.
                </p>
                <p className="mb-4 text-muted-foreground">
                  What started as a small operation has grown into a trusted online destination for rice lovers across the country. Our mission is simple: to bring the world's finest rice directly to your kitchen.
                </p>
                <p className="text-muted-foreground">
                  We work directly with farmers and suppliers around the world to ensure that every grain of rice meets our strict quality standards. From fragrant jasmine rice from Thailand to premium basmati from India, we're committed to offering the best selection available.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Rice fields" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <p className="text-sm italic text-muted-foreground">
                    "We believe that rice is more than just a staple food—it's an essential part of culinary traditions around the world."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="bg-rice-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-semibold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                At Rice Basket Express, we're guided by a set of core values that inform everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-rice-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on the quality of our products. Every grain of rice is carefully selected to ensure the best eating experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-rice-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to sustainable farming practices and work with suppliers who share our values of environmental responsibility.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-rice-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We believe in supporting the communities where our rice is grown, ensuring fair wages and ethical treatment for farmers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-semibold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind Rice Basket Express who are dedicated to bringing you the finest rice varieties.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Daniel Kim",
                  role: "Founder & CEO",
                  image: "https://i.pravatar.cc/300?img=11",
                  bio: "A rice enthusiast with over 15 years in the food industry."
                },
                {
                  name: "Sarah Chen",
                  role: "Head of Procurement",
                  image: "https://i.pravatar.cc/300?img=5",
                  bio: "Travels the world sourcing the best rice varieties."
                },
                {
                  name: "Michael Johnson",
                  role: "Quality Control Manager",
                  image: "https://i.pravatar.cc/300?img=12",
                  bio: "Ensures that every grain meets our high standards."
                },
                {
                  name: "Emily Rodriguez",
                  role: "Customer Experience Lead",
                  image: "https://i.pravatar.cc/300?img=32",
                  bio: "Dedicated to creating the best shopping experience."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-56 object-cover" 
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-primary text-sm mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-rice-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-semibold mb-4">Ready to Discover Premium Rice?</h2>
              <p className="text-lg text-rice-100 mb-8">
                Browse our collection of the finest rice varieties from around the world and experience the difference quality makes.
              </p>
              <Button size="lg" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
