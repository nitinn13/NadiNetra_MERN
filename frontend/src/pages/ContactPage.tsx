import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Send, Clock, MessageSquare, ChevronRight, ArrowRight, Check } from 'lucide-react';

export default function ContactPage() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your backend
    console.log('Form submitted:', formState);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <Droplets className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Nadinetra</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/#features" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Features</a>
              <a href="/#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</a>
              <a href="/#testimonials" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Testimonials</a>
              {/* <a href="/contact" className="text-blue-600 dark:text-blue-400">Contact</a> */}
            </div>
            <button
              onClick={() => navigate('/auth')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-1"
            >
              <span>Log In</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="pt-20 pb-12 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Have questions about Nadinetra? We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@nadinetra.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+91 11 2345 6789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      421 Tech Park<br />
                      Sector 21, Delhi<br />
                      India 110001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Office Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                    <div className="w-5 h-5 bg-current opacity-70 rounded-sm"></div>
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                    <div className="w-5 h-5 bg-current opacity-70 rounded-full"></div>
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                    <div className="w-5 h-5 bg-current opacity-70 rounded"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              {!formSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                      >
                        <span>Send Message</span>
                        <Send className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center p-4 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 mb-6">
                    <Check className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Thank you for contacting us. We will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-blue-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to commonly asked questions about Nadinetra
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-3 shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  What is Nadinetra?
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-12">
                Nadinetra is an advanced water body monitoring system specifically designed for Delhi's lakes and reservoirs, providing real-time water quality tracking and analytics.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-3 shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  How does the monitoring system work?
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-12">
                Our system uses a network of IoT sensors deployed in water bodies to continuously measure various parameters like pH, dissolved oxygen, and turbidity, sending data to our cloud platform for analysis.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-3 shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  Can individuals access the platform?
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-12">
                Yes, we offer different access levels. Community members can view public data and report issues, while researchers and government agencies can access more detailed analytics.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-3 shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  How can I report water quality issues?
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-12">
                You can report issues through our mobile app or web platform. Our community engagement feature allows you to submit reports with photos and descriptions that are verified and addressed by our team.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Still have questions?
            </p>
            <button
              onClick={() => {
                const contactForm = document.querySelector('#contactForm');
                if (contactForm) contactForm.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center mx-auto"
            >
              <span>Contact Support</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <span>Location</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Find Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Visit our office in Delhi's Tech Park
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400 opacity-50" />
              <div className="absolute text-center">
                <p className="text-gray-600 dark:text-gray-300 font-medium">Map placeholder</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Interactive map would load here</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold text-white">Nadinetra</span>
              </div>
              <p className="mb-4">
                Advanced water body monitoring system for Delhi's lakes and reservoirs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Real-time Monitoring</a></li>
                <li><a href="#" className="hover:text-white">Advanced Analytics</a></li>
                <li><a href="#" className="hover:text-white">Interactive Mapping</a></li>
                <li><a href="#" className="hover:text-white">Early Warning System</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Nadinetra. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white mr-4">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}