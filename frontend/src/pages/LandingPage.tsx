import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplets, Activity, Shield, BarChart2, Map, Users, ChevronRight, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Auto-rotate featured items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Get instant updates on water quality parameters including pH, dissolved oxygen, turbidity, and more.',
      color: 'bg-blue-600'
    },
    {
      icon: BarChart2,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis with predictive insights and historical trends visualization.',
      color: 'bg-indigo-600'
    },
    {
      icon: Map,
      title: 'Interactive Mapping',
      description: 'Visual representation of water bodies with detailed information and status indicators.',
      color: 'bg-teal-600'
    },
    {
      icon: Shield,
      title: 'Early Warning System',
      description: 'Immediate alerts for critical changes in water quality parameters.',
      color: 'bg-red-600'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Platform for community reporting and collaborative water quality management.',
      color: 'bg-amber-600'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Tools and insights for effective water resource management and conservation.',
      color: 'bg-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Nadinetra</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Features</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Testimonials</a>
              
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

      {/* Hero Section with Animation */}
      <div className="relative pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 lg:pr-8 text-left">
              <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                <span>Next Generation Water Management</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Nadinetra
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Advanced Water Body Monitoring System for Delhi's Lakes and Reservoirs
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => navigate('/auth')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <a
                  href="#features"
                  className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg text-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                >
                  View Demo
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 rounded-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Droplets className="h-32 w-32 text-white/80" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-xl font-semibold">Monitoring Dashboard</div>
                      <div className="text-sm opacity-80">Real-time water quality metrics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path 
              fill="currentColor" 
              fillOpacity="0.05"
              d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              className="text-blue-500 dark:text-blue-700"
            ></path>
            <path 
              fill="currentColor" 
              fillOpacity="0.1"
              d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,69.3C840,85,960,107,1080,106.7C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              className="text-blue-400 dark:text-blue-600"
            ></path>
          </svg>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="bg-white dark:bg-gray-800 py-8 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">TRUSTED BY</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="font-bold text-xl text-red-600 dark:text-gray-500">Delhi Water Board</div>
            <div className="font-bold text-xl text-red-600 dark:text-gray-500">Environmental Agency</div>
            <div className="font-bold text-xl text-red-600 dark:text-gray-500">Delhi Municipality</div>
            <div className="font-bold text-xl text-red-600 dark:text-gray-500">Research Institute</div>
          </div>
        </div>
      </div>

      {/* Features Section with Interactive Elements */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <span>Features</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Water Quality Management
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform provides end-to-end solutions for monitoring, analyzing, and managing water resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeFeature === index ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${activeFeature === index ? feature.color : 'bg-gray-100 dark:bg-gray-700'}`}>
                    <feature.icon className={`h-6 w-6 ${activeFeature === index ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg p-1">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-8 h-full">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${features[activeFeature].color}`}>
                  {/* <features[activeFeature].icon className="h-8 w-8 text-white" /> */}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ml-4">
                  {features[activeFeature].title}
                </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {features[activeFeature].description}
              </p>
              <div className="aspect-video bg-white dark:bg-gray-900 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center p-8">
                  {/* <features[activeFeature].icon className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4 opacity-30" /> */}
                  <p className="text-gray-500 dark:text-gray-400">Feature demo visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section with Stats */}
      <div id="about" className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800/50 dark:to-indigo-900/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                <span>About</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Nadinetra?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Nadinetra combines cutting-edge technology with environmental stewardship to protect and preserve Delhi's vital water resources.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Environmental Protection</h3>
                    <p className="text-gray-600 dark:text-gray-300">Safeguarding Delhi's water bodies through continuous monitoring and preventive action</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Data-Driven Decisions</h3>
                    <p className="text-gray-600 dark:text-gray-300">Empowering authorities with actionable insights for better resource management</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Community Involvement</h3>
                    <p className="text-gray-600 dark:text-gray-300">Creating a collaborative approach to water conservation with citizen participation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                  <div className="inline-flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400 mb-4">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-900 dark:text-white font-medium">Continuous Monitoring</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                  <div className="inline-flex items-center justify-center bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-green-600 dark:text-green-400 mb-4">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">95%</div>
                  <div className="text-gray-900 dark:text-white font-medium">Accuracy Rate</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                  <div className="inline-flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-600 dark:text-purple-400 mb-4">
                    <Map className="h-6 w-6" />
                  </div>
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">7+</div>
                  <div className="text-gray-900 dark:text-white font-medium">Water Bodies Monitored</div>
                </div>
                <div className="md:col-span-3 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">Our Impact</h3>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 w-3/4 rounded-full"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Water Quality Improvement</span>
                    <span>75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from the professionals who use Nadinetra to manage and protect water resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">DC</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Dr. Chopra</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Environmental Scientist</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              "Nadinetra has transformed how we monitor water quality. The real-time alerts have helped us prevent several potential contamination events."
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-green-600 dark:text-green-400 font-semibold">RS</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Rajan Singh</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Delhi Water Board</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              "The analytics dashboard provides invaluable insights that help us make better decisions about resource allocation and conservation efforts."
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">AP</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Anjali Patel</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Community Activist</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              "The community engagement features have empowered local residents to participate in water conservation efforts and report issues promptly."
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl">
                Join us in our mission to protect and preserve Delhi's water bodies through advanced monitoring and community engagement.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => navigate('/auth')}
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  <span>Sign Up Now</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3 bg-transparent text-white border border-white rounded-lg text-lg font-medium hover:bg-blue-700 hover:bg-opacity-30 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <Droplets className="h-32 w-32 text-white/30" />
            </div>
          </div>
        </div>
      </div>

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