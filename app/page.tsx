import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ShoppingCart, Users, Truck, Shield, Star, ArrowRight, Play, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AigiriLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold text-gray-800 font-sans">IGIRI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#elearning" className="text-gray-600 hover:text-orange-600 transition-colors">
              E-Learning
            </Link>
            <Link href="#ecommerce" className="text-gray-600 hover:text-orange-600 transition-colors">
              E-Commerce
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-orange-600 transition-colors">
              Testimonials
            </Link>
           
          </nav>
          {/* <Button className="bg-orange-600 hover:bg-orange-700 text-white">Get Started</Button> */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 font-serif leading-tight">
            Empowering India's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600">
              {" "}
              Digital Revolution
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            AIGIRI delivers state-of-the-art e-learning and e-commerce solutions crafted exclusively for India's diverse market. 
            Experience seamless learning and trading powered by technology that truly understands your Indian context.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 text-xl rounded-xl shadow-lg transform transition hover:scale-105">
              <Play className="w-6 h-6 mr-3" />
              Watch Demo
            </Button>
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-black text-slate-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">5K+</div>
              <div className="text-gray-600">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-600">Courses Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-gray-600">Products Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Learning Platform Section */}
      <section id="elearning" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4 font-serif">
                <BookOpen className="w-8 h-8 text-orange-600 mr-3" />
                <span className="text-orange-600 font-semibold text-lg">E-Learning Platform</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Learn Skills That Matter in Today's India
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Our comprehensive e-learning platform offers courses in Hindi, English, and regional languages. From
                technology and business to traditional crafts and modern skills, we provide education that's relevant to
                the Indian job market and entrepreneurial landscape.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Interactive courses in multiple Indian languages</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Industry-relevant certifications</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Affordable pricing for all income levels</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Mobile-first learning experience</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Start Learning Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  Browse Courses
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white shadow-xl border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">Popular Courses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-800">Digital Marketing</div>
                      <div className="text-sm text-gray-600">Hindi & English</div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-semibold">4.8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-800">Web Development</div>
                      <div className="text-sm text-gray-600">English</div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-semibold">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-800">Business Management</div>
                      <div className="text-sm text-gray-600">Hindi</div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-semibold">4.7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Platform Section */}
      <section id="ecommerce" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Card className="bg-gradient-to-br from-orange-50 to-amber-50 shadow-xl border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">Marketplace Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Truck className="w-6 h-6 text-orange-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-800">Fast Delivery</div>
                      <div className="text-sm text-gray-600">Pan-India shipping</div>
                    </div>
                  </div>
                  <div className="flex p-3 bg-white rounded-lg shadow-sm gap-x-0.5 items-center">
                    <Shield className="w-6 h-6 text-orange-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-800">Secure Payments</div>
                      <div className="text-sm text-gray-600">UPI, Cards, Wallets</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Users className="w-6 h-6 text-orange-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-800">Local Sellers</div>
                      <div className="text-sm text-gray-600">Support local businesses</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4 font-serif">
                <ShoppingCart className="w-8 h-8 text-orange-600 mr-3" />
                <span className="text-orange-600 font-semibold text-lg">E-Commerce Platform</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Shop Local, Think Global</h2>
              <p className="text-gray-600 text-lg mb-8">
                Our e-commerce platform connects you with authentic Indian products and local sellers. From traditional
                handicrafts to modern electronics, discover quality products at competitive prices while supporting
                local entrepreneurs and artisans across India.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Authentic Indian products and crafts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Support for local sellers and artisans</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Multiple payment options including UPI</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Fast delivery across India</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Start Shopping
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
             
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50" id="testimonials">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied learners and shoppers who trust AIGIRI for their digital needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "AIGIRI's e-learning platform helped me transition from a traditional job to digital marketing. The
                  Hindi courses were perfect for me!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">R</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Rajesh Kumar</div>
                    <div className="text-sm text-gray-600">Digital Marketer, Delhi</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0" >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "As a small business owner, AIGIRI's e-commerce platform gave me the perfect opportunity to reach
                  customers across India. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">P</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Priya Sharma</div>
                    <div className="text-sm text-gray-600">Artisan, Jaipur</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The quality of products and the support for local sellers makes AIGIRI my go-to platform for
                  authentic Indian products."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Amit Patel</div>
                    <div className="text-sm text-gray-600">Customer, Mumbai</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Journey?</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Join AIGIRI today and experience the future of learning and shopping designed for India
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3">
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white hover:bg-white hover:text-orange-600 px-8 py-3 text-orange-600"
            >
              Contact Sales
            </Button>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-xl font-bold">IGIRI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering India's digital transformation through innovative e-learning and e-commerce solutions.
              </p>
              <div className="text-sm text-gray-400">Made with ❤️ in India</div>
            </div>

            <div className="shadow-none">
              <h3 className="font-semibold mb-4 rounded-sm">E-Learning</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Browse Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Certifications
                  </Link>
                </li>
               
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">E-Commerce</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Shop Now
                  </Link>
                </li>
               
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Local Products
                  </Link>
                </li>
               
              </ul>
            </div>

            
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AIGIRI. All rights reserved. | Proudly serving India's digital needs</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
