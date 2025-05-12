
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { CreditCard, ShoppingCart, Truck } from 'lucide-react';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  
  const [step, setStep] = useState(1);
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + shipping;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleNextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const handlePrevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would process the payment here
    
    // Simulate successful order
    setTimeout(() => {
      toast({
        title: "Order Placed Successfully!",
        description: "Your order has been placed and will be shipped soon.",
        duration: 5000,
      });
      clearCart();
      navigate('/order-confirmation');
    }, 1500);
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h1 className="text-2xl font-medium mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Add some delicious rice to your cart before proceeding to checkout.
            </p>
            <Button onClick={() => navigate('/shop')}>
              Continue Shopping
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-heading font-semibold mb-8 text-center">Checkout</h1>
            
            {/* Checkout Steps */}
            <div className="mb-8">
              <div className="flex justify-between">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary bg-primary text-white' : 'border-muted'}`}>
                    1
                  </div>
                  <span className="mt-2 text-sm">Shipping</span>
                </div>
                <div className={`flex-1 border-t-2 ${step >= 2 ? 'border-primary' : 'border-muted'} self-center mx-4`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary bg-primary text-white' : 'border-muted'}`}>
                    2
                  </div>
                  <span className="mt-2 text-sm">Payment</span>
                </div>
                <div className={`flex-1 border-t-2 ${step >= 3 ? 'border-primary' : 'border-muted'} self-center mx-4`}></div>
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-primary bg-primary text-white' : 'border-muted'}`}>
                    3
                  </div>
                  <span className="mt-2 text-sm">Review</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Shipping Information */}
                    {step === 1 && (
                      <div>
                        <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          <div className="sm:col-span-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">State</Label>
                            <Input
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input
                              id="zip"
                              name="zip"
                              value={formData.zip}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <Button 
                            type="button" 
                            onClick={handleNextStep} 
                            className="w-full"
                          >
                            Continue to Payment
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {/* Step 2: Payment Information */}
                    {step === 2 && (
                      <div>
                        <h2 className="text-xl font-medium mb-4">Payment Information</h2>
                        
                        <div className="mb-6">
                          <div className="flex items-center space-x-2 mb-4">
                            <CreditCard className="h-6 w-6 text-muted-foreground" />
                            <span>Credit Card</span>
                          </div>
                          
                          <div className="mb-4">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input
                              id="cardName"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              placeholder="**** **** **** ****"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input
                                id="expiry"
                                name="expiry"
                                placeholder="MM/YY"
                                value={formData.expiry}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="***"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between mt-6">
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={handlePrevStep}
                          >
                            Back
                          </Button>
                          <Button 
                            type="button" 
                            onClick={handleNextStep}
                          >
                            Review Order
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {/* Step 3: Review Order */}
                    {step === 3 && (
                      <div>
                        <h2 className="text-xl font-medium mb-4">Review Your Order</h2>
                        
                        <div className="mb-6">
                          <h3 className="font-medium mb-2">Shipping Address</h3>
                          <div className="bg-muted p-4 rounded-md text-sm">
                            <p>{formData.firstName} {formData.lastName}</p>
                            <p>{formData.address}</p>
                            <p>{formData.city}, {formData.state} {formData.zip}</p>
                            <p>Email: {formData.email}</p>
                            <p>Phone: {formData.phone}</p>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="font-medium mb-2">Payment Method</h3>
                          <div className="bg-muted p-4 rounded-md text-sm flex items-center">
                            <CreditCard className="h-4 w-4 mr-2" />
                            <span>Credit Card ending in {formData.cardNumber.slice(-4)}</span>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="font-medium mb-2">Order Items</h3>
                          {cartItems.map((item) => (
                            <div key={item.id} className="flex py-3 border-b">
                              <div className="w-16 h-16 rounded overflow-hidden">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                              <div className="ml-4 flex-grow">
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                              </div>
                              <div className="text-right">
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="font-medium mb-2">Delivery</h3>
                          <div className="bg-muted p-4 rounded-md text-sm flex items-center">
                            <Truck className="h-4 w-4 mr-2" />
                            <span>Standard Delivery (2-4 business days)</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between mt-6">
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={handlePrevStep}
                          >
                            Back
                          </Button>
                          <Button type="submit">
                            Place Order
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-sm font-medium">{item.name}</span>
                          <span className="text-xs text-muted-foreground ml-1">x{item.quantity}</span>
                        </div>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? (
                          'Free'
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  
                  {shipping === 0 && (
                    <div className="mt-4 bg-green-50 p-2 rounded-md text-center text-xs text-green-800">
                      You've qualified for free shipping!
                    </div>
                  )}
                  
                  {shipping > 0 && (
                    <div className="mt-4 bg-blue-50 p-2 rounded-md text-center text-xs text-blue-800">
                      Add ${(50 - subtotal).toFixed(2)} more to get free shipping!
                    </div>
                  )}
                </div>
                
                <div className="mt-4 bg-muted p-4 rounded-md">
                  <h3 className="font-medium mb-2 text-sm">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Have questions about your order? Contact our customer support team.
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Email:</span> <a href="mailto:support@ricebasket.com" className="text-primary">support@ricebasket.com</a>
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Phone:</span> (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
