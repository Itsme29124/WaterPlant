"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageCircle,
  Droplets,
  Truck,
  Shield,
  Clock,
  Star,
  MapPin,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-primary-foreground/10 p-1.5 sm:p-2 rounded-lg">
                <Droplets className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl font-bold font-serif">
                  Suhema Sweet Water
                </h1>
                <p className="text-xs sm:text-sm opacity-90">
                  Pure Water, Pure Trust
                </p>
              </div>
            </div>
            <nav className="hidden sm:flex items-center gap-4 lg:gap-6">
              <a
                href="#home"
                className="text-sm lg:text-base hover:opacity-80 transition-opacity"
              >
                Home
              </a>
              <a
                href="#products"
                className="text-sm lg:text-base hover:opacity-80 transition-opacity"
              >
                Products
              </a>
              <a
                href="#about"
                className="text-sm lg:text-base hover:opacity-80 transition-opacity"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm lg:text-base hover:opacity-80 transition-opacity"
              >
                Contact
              </a>
            </nav>
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="sm:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>

          {isMobileMenuOpen && (
            <nav className="sm:hidden mt-4 pb-4 border-t border-primary-foreground/20">
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="#home"
                  className="text-sm hover:opacity-80 transition-opacity py-2 px-2 rounded hover:bg-primary-foreground/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#products"
                  className="text-sm hover:opacity-80 transition-opacity py-2 px-2 rounded hover:bg-primary-foreground/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </a>
                <a
                  href="#about"
                  className="text-sm hover:opacity-80 transition-opacity py-2 px-2 rounded hover:bg-primary-foreground/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-sm hover:opacity-80 transition-opacity py-2 px-2 rounded hover:bg-primary-foreground/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-secondary py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 font-serif leading-tight">
              Fresh Water Delivered to Your Door
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
              Premium bottled water from our family to yours. Same-day delivery,
              competitive prices, and unmatched purity you can trust.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
              <b>Location :</b> At. Rahiyad, Ta. Vagra, Dist. Bharuch
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <a href="tel:+919979766951" className="w-full xs:w-auto">
                <Button
                  size="lg"
                  className="w-full xs:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Call Now: +919979766951
                </Button>
              </a>
              <a
                href="https://wa.me/919979766951"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full xs:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-sm sm:text-base"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp Order
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section id="products" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 font-serif">
              Our Products & Services
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto px-4">
              Choose from our range of premium water products with flexible
              delivery options
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Chilled Jug (Bulk Delivery)
                </CardTitle>
                <br></br>
                <CardDescription className="text-sm">
                  Perfect for families and offices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Enjoy pure, refreshing water every day with our premium
                  chilled water jug service, perfect for families, offices, and
                  gatherings. Each jug is filled with crystal-clear purified
                  water and delivered in reusable, eco-friendly bottles. We also
                  provide convenient pickup of empty jugs, ensuring a
                  hassle-free experience. Fresh, cool, and always reliable, this
                  is our most popular choice for households and workplaces
                  alike.
                </p>
                <Badge variant="secondary" className="text-xs">
                  Most Popular
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  20L Jar (Bulk Delivery)
                </CardTitle>
                <br></br>
                <CardDescription className="text-sm">
                  Convenient Non-Chilled option
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Our 20-liter jar is a convenient and cost-effective choice for
                  households, small offices, or personal use. Filled with pure,
                  high-quality drinking water, it provides an ample supply to
                  keep you hydrated throughout the day. Delivered in sturdy,
                  reusable jars, this eco-friendly option ensures both freshness
                  and sustainability at an affordable price.
                </p>
                <Badge variant="outline" className="text-xs">
                  Eco-Friendly
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Delivery Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">
                Same-Day Delivery
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Order in prior for same-day delivery
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">
                Quality Guaranteed
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                100% pure, tested water with quality guarantee
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">
                Local Service
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Family-owned, serving our community for 20+ years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-12 sm:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 font-serif">
              About Suhema Sweet Water
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
              For over 20 years, our family-owned business has been committed to
              delivering the purest, freshest water to homes and businesses in
              our community. We believe that access to clean, safe drinking
              water shouldn't be a luxury—it's a necessity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-3">
                  Our Promise
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                    Rigorous quality testing for every batch
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                    Reliable, on-time delivery service
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                    Competitive pricing with no hidden fees
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                    Exceptional customer service
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-3">
                  Why Choose Us?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Unlike large corporations, we know our customers by name.
                  We're your neighbors, and we take pride in providing
                  personalized service that big companies simply can't match.
                  Every bottle is handled with care, and every delivery is made
                  with a smile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 font-serif">
                Ready to Order?
              </h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 px-2">
                Get fresh, pure water delivered to your door. Fill out the form
                below or contact us directly.
              </p>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-lg mx-auto">
                <a href="tel:+919979766951">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm sm:text-base"
                  >
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden xs:inline">Call: </span>+91
                    9979766951
                  </Button>
                </a>

                <a
                  href="https://wa.me/919979766951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xs:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full xs:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-sm sm:text-base"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    WhatsApp Order : Click Here
                  </Button>
                </a>
              </div>
            </div>

            <ContactForm />

            <div className="mt-8 sm:mt-12">
              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>All Day Operation:</span>
                    <span className="font-medium">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base"></div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      <strong>Emergency Service:</strong> Available 24/7 for
                      existing customers
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="bg-primary-foreground/10 p-1.5 sm:p-2 rounded-lg">
              <Droplets className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h4 className="font-bold font-serif text-sm sm:text-base">
                Suhema Sweet Water
              </h4>
              <p className="text-xs sm:text-sm opacity-90">
                Pure Water, Pure Trust
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm opacity-80">
            © 2025 Suhema Sweet Water. Family-owned and operated since 2008.
          </p>
          <p className="text-xs opacity-70 mt-1 sm:mt-2">
            Serving the community with premium water delivery services.
          </p>
          <p className="text-xs opacity-70 mt-1 sm:mt-2">
            Credits for the Site Dev ~ Nasir Mansuri
          </p>
        </div>
      </footer>
    </div>
  );
}
