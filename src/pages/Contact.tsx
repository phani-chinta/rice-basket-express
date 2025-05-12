
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the form data to a server
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
      duration: 3000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-rice-100 rice-grain-bg py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-heading font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-rice-700">
                Have questions? We'd love to hear from you. Our team is always ready to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h2 className="text-2xl font-heading font-semibold mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-rice-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Our Location</h3>
                        <p className="text-muted-foreground">
                          123 Rice Avenue<br />
                          Grain District<br />
                          Rice City, RC 12345
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-rice-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email Us</h3>
                        <p className="text-muted-foreground">info@ricebasket.com</p>
                        <p className="text-muted-foreground">support@ricebasket.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-rice-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Call Us</h3>
                        <p className="text-muted-foreground">(555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                        <a 
                          key={social}
                          href={`https://${social}.com`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-rice-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        >
                          <span className="sr-only">{social}</span>
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-heading font-semibold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="resize-none"
                      />
                    </div>
                    
                    <Button type="submit" size="lg">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="bg-rice-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-semibold mb-4">Visit Our Store</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stop by our physical store to explore our full range of products and meet our team.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-[16/9] bg-gray-200 rounded">
                {/* This would be a map in a real implementation */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-medium">Rice Basket Express</h3>
                    <p className="text-muted-foreground">123 Rice Avenue, Grain District</p>
                    <p className="text-muted-foreground">Rice City, RC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-medium mb-2">Store Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
                <p className="text-muted-foreground">Saturday: 10am - 4pm</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-medium mb-2">Parking</h3>
                <p className="text-muted-foreground">Free parking is available for customers in our dedicated lot.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-medium mb-2">Public Transport</h3>
                <p className="text-muted-foreground">Bus routes 42 and 53 stop directly in front of our store.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
