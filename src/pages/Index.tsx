
import { useState, useEffect } from "react";
import { Music, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !role) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Thanks for joining the nation! We'll be in touch soon.");
    setEmail("");
    setRole("");
  };

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 animate-float">
        <Music className="w-6 h-6 text-rock-neon-green opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-rock-violet rounded-full opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-2 h-2 bg-rock-silver rounded-full opacity-50" />
      </div>
    </div>
  );

  const WaveformVisualizer = () => (
    <div className="flex items-center justify-center space-x-1 mb-8">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="waveform-bar w-1 rounded-full"
          style={{
            height: `${Math.random() * 40 + 20}px`,
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-rock-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <FloatingElements />
        
        <div className={`container mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <WaveformVisualizer />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Rock Nation UAE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-rock-silver mb-4 font-light">
            The Sound of the Middle East
          </p>
          
          <p className="text-lg md:text-xl text-rock-warm-gray mb-12 max-w-md mx-auto">
            Discover. Promote. Perform.
          </p>
          
          <form onSubmit={handleSignup} className="max-w-md mx-auto space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-rock-gray border-rock-warm-gray text-white placeholder-rock-silver"
            />
            
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="bg-rock-gray border-rock-warm-gray text-white">
                <SelectValue placeholder="I am a..." />
              </SelectTrigger>
              <SelectContent className="bg-rock-gray border-rock-warm-gray">
                <SelectItem value="musician" className="text-white hover:bg-rock-warm-gray">Musician</SelectItem>
                <SelectItem value="fan" className="text-white hover:bg-rock-warm-gray">Fan</SelectItem>
                <SelectItem value="brand" className="text-white hover:bg-rock-warm-gray">Brand</SelectItem>
                <SelectItem value="promoter" className="text-white hover:bg-rock-warm-gray">Promoter</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              type="submit" 
              className="w-full bg-rock-neon-green text-black hover:bg-rock-neon-green/90 font-semibold neon-glow"
            >
              Get Early Access
            </Button>
          </form>
        </div>
      </section>

      {/* Editorial Preview */}
      <section className="py-20 bg-rock-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Weekly Editorials & Music Culture
          </h2>
          <p className="text-rock-silver text-center mb-12 max-w-2xl mx-auto">
            Deep dives into the Middle East's music scene, artist spotlights, and cultural commentary.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "The Rise of Underground Rock in Dubai",
                subtitle: "How local venues are shaping the future",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600"
              },
              {
                title: "Female Artists Breaking Barriers",
                subtitle: "Voices changing the regional music landscape",
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600"
              },
              {
                title: "Festival Culture in the Gulf",
                subtitle: "From intimate gigs to major productions",
                image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600"
              }
            ].map((article, index) => (
              <Card key={index} className="bg-rock-warm-gray border-rock-warm-gray hover-lift cursor-pointer group">
                <div className="aspect-video bg-gradient-to-br from-rock-neon-green/20 to-rock-violet/20 rounded-t-lg mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-rock-neon-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-rock-silver">{article.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" className="border-rock-neon-green text-rock-neon-green hover:bg-rock-neon-green hover:text-black">
              See What's Coming
            </Button>
          </div>
        </div>
      </section>

      {/* Artist Management Preview */}
      <section className="py-20 bg-rock-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            100+ Artists, One Stage
          </h2>
          <p className="text-rock-silver text-center mb-12 max-w-2xl mx-auto">
            Rock Nation will give every artist a home with bios, media, and booking access.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Sarah Al-Rashid", genre: "Alternative Rock" },
              { name: "Khalid Nasrallah", genre: "Indie Folk" },
              { name: "Maya Tehrani", genre: "Electronic" },
              { name: "Omar Farouk", genre: "Progressive Metal" },
              { name: "Layla Hassan", genre: "Jazz Fusion" },
              { name: "Ahmed Al-Zahra", genre: "Acoustic" },
              { name: "Nour Khoury", genre: "Post-Rock" },
              { name: "Yusuf Rahman", genre: "Experimental" }
            ].map((artist, index) => (
              <Card key={index} className="bg-rock-gray border-rock-warm-gray hover-lift cursor-pointer group relative overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-rock-violet/30 to-rock-neon-green/30 relative">
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music className="w-12 h-12 text-white/60" />
                  </div>
                  <div className="absolute top-2 right-2 bg-rock-neon-green text-black text-xs px-2 py-1 rounded-full font-semibold">
                    Coming Soon
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white group-hover:text-rock-neon-green transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-sm text-rock-silver">{artist.genre}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" className="border-rock-violet text-rock-violet hover:bg-rock-violet hover:text-white">
              Explore the Vision
            </Button>
          </div>
        </div>
      </section>

      {/* Future Features Teaser */}
      <section className="py-20 bg-rock-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            More Than Just a Platform
          </h2>
          <p className="text-rock-silver text-center mb-16 max-w-3xl mx-auto">
            Coming soon: Gig discovery, merch stores, advertising, and more — all designed for the Middle East's music ecosystem.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-rock-neon-green to-rock-violet rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Music className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">🎫 Gigs & Listings</h3>
              <p className="text-rock-silver">Discover and promote live music events across the region</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-rock-violet to-rock-silver rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-rock-violet rounded" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">🛍️ Merch Platform</h3>
              <p className="text-rock-silver">Direct-to-fan merchandise and music sales</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-rock-silver to-rock-neon-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 text-white font-bold text-2xl">📢</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">📢 Brand Advertising</h3>
              <p className="text-rock-silver">Connect brands with music culture and audiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Signup Section */}
      <section className="py-20 bg-rock-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Join the Nation</span>
          </h2>
          <p className="text-xl text-rock-silver mb-12 max-w-md mx-auto">
            Artists. Fans. Brands. This is your stage.
          </p>
          
          <form onSubmit={handleSignup} className="max-w-md mx-auto space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-rock-gray border-rock-warm-gray text-white placeholder-rock-silver"
            />
            
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="bg-rock-gray border-rock-warm-gray text-white">
                <SelectValue placeholder="Select your role..." />
              </SelectTrigger>
              <SelectContent className="bg-rock-gray border-rock-warm-gray">
                <SelectItem value="musician" className="text-white hover:bg-rock-warm-gray">Musician</SelectItem>
                <SelectItem value="fan" className="text-white hover:bg-rock-warm-gray">Fan</SelectItem>
                <SelectItem value="brand" className="text-white hover:bg-rock-warm-gray">Brand</SelectItem>
                <SelectItem value="promoter" className="text-white hover:bg-rock-warm-gray">Promoter</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              type="submit" 
              className="w-full bg-rock-neon-green text-black hover:bg-rock-neon-green/90 font-semibold neon-glow text-lg py-6"
            >
              Get Early Access
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-rock-gray border-t border-rock-warm-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-gradient mb-2">Rock Nation UAE</h3>
              <p className="text-rock-silver text-sm">Made in Dubai with Heart & Sound</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-rock-silver hover:text-rock-neon-green transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-rock-silver hover:text-rock-neon-green transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-rock-silver hover:text-rock-neon-green transition-colors">
                <Music className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-rock-warm-gray text-center">
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-rock-silver">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
            <p className="text-rock-silver text-sm mt-4">© 2024 Rock Nation UAE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
