
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rock-black/95 backdrop-blur-sm border-b border-rock-warm-gray">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b2485b4d-ac59-4024-94f7-317fff3de5f9.png" 
              alt="Rock Nation UAE Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#editorials" className="text-rock-silver hover:text-rock-neon-green transition-colors">
              Editorials
            </a>
            <a href="#artists" className="text-rock-silver hover:text-rock-neon-green transition-colors">
              Artists
            </a>
            <a href="#features" className="text-rock-silver hover:text-rock-neon-green transition-colors">
              Features
            </a>
            <a href="#signup" className="text-rock-silver hover:text-rock-neon-green transition-colors">
              Join
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
