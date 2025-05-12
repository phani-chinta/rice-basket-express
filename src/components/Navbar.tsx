
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/hooks/useCart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-rice-600 font-heading font-semibold text-2xl">Rice Basket</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Cart Button */}
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-xs h-5 w-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[350px] sm:w-[450px]">
              <CartSidebar />
            </SheetContent>
          </Sheet>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-4">
            <button onClick={toggleMenu} className="text-foreground">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-4 py-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Cart sidebar component
const CartSidebar = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  
  const totalPrice = cartItems.reduce((total, item) => 
    total + (item.price * item.quantity), 0);
    
  if (cartItems.length === 0) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">Your cart is empty</h3>
        <p className="text-muted-foreground mt-2">Add some delicious rice to get started!</p>
        <Link to="/shop">
          <Button className="mt-6">Browse Products</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-xl font-medium">Shopping Cart</h2>
        <Button variant="ghost" size="sm" onClick={clearCart}>Clear all</Button>
      </div>
      
      <div className="flex-grow overflow-auto py-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex py-4 border-b">
            <div className="w-20 h-20 rounded overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <button 
                  className="w-6 h-6 border rounded-full flex items-center justify-center" 
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button 
                  className="w-6 h-6 border rounded-full flex items-center justify-center" 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button 
                  className="ml-auto text-sm text-muted-foreground hover:text-destructive" 
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4">
        <div className="flex justify-between py-2">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <Link to="/checkout">
          <Button className="w-full mt-4">Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
