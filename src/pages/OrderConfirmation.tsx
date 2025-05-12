
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = `RBE-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-2xl font-heading font-semibold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
          </div>
          
          <div className="border border-border rounded-md p-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Order Number</h3>
                <p className="font-medium">{orderNumber}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Date</h3>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Email</h3>
                <p className="font-medium">your.email@example.com</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Payment Method</h3>
                <p className="font-medium">Credit Card</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">What's Next?</h2>
            <div className="space-y-4">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-primary font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Order Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    We're preparing your order for shipment. You'll receive an email when your order ships.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-primary font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Shipping</h3>
                  <p className="text-sm text-muted-foreground">
                    Your order will be shipped within 1-2 business days. Standard delivery takes 2-4 business days.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-primary font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Once your package is on its way, you'll receive tracking information to monitor your delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
