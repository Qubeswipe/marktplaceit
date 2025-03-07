import React from 'react';
import { 
  ArrowRight, 
  RefreshCw, 
  Zap, 
  TrendingUp, 
  ShieldCheck,
  AlertTriangle,
  Upload,
  MousePointerClick,
  BarChart3,
  Award,
  CheckCircle2,
  Star
} from 'lucide-react';
import { FeatureSteps } from './components/ui/feature-steps';

const features = [
  {
    step: 'Step 1',
    title: 'Creates Multiple Variations',
    content: 'Bypass Facebook\'s duplicate detection with AI-generated unique listings.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    step: 'Step 2',
    title: 'Automates Posting',
    content: 'No more manual tweaking. Set it and forget it.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: 'Step 3',
    title: 'Increases Clicks',
    content: 'More visibility means more potential buyers seeing your items.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: 'Step 4',
    title: 'Scales Easily',
    content: 'List 10, 20, or 50+ products effortlessly.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 nav-gradient border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <RefreshCw className="h-8 w-8 text-sky-400" />
              <span className="ml-2 text-xl font-bold">Markt Place It</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="/login" className="text-gray-300 hover:text-white transition">Login</a>
              <button className="button-gradient px-4 py-2 rounded-full font-medium hover:opacity-90 transition glow">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              More Visibility. More Clicks.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                More Sales.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Stay on top of the Marketplace game. Get your listings seen more, sell faster, and scale easily.
            </p>
            <button className="button-gradient px-8 py-4 rounded-full font-medium hover:opacity-90 transition glow text-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 section-gradient" id="problems">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Struggling to Sell on Facebook Marketplace?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-sky-400/50 transition animate-float">
              <AlertTriangle className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Listings Disappear Fast</h3>
              <p className="text-gray-400">Your posts get buried under thousands of others within hours.</p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-sky-400/50 transition animate-float delay-100">
              <ShieldCheck className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Facebook Blocks Reposts</h3>
              <p className="text-gray-400">Try reposting manually? Get flagged and lose visibility.</p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-sky-400/50 transition animate-float delay-200">
              <TrendingUp className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scaling is Impossible</h3>
              <p className="text-gray-400">Manual tweaking and reposting doesn't scale with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24" id="features">
        <FeatureSteps 
          features={features}
          title="One Click. More Listings. More Sales."
          autoPlayInterval={4000}
        />
      </section>

      {/* Social Proof */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Join the Smart Sellers Making More Sales with AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
              <Award className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Top-Rated Tool</h3>
              <p className="text-gray-400">#1 Choice for Professional Marketplace Sellers</p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
              <Star className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">200% More Clicks</h3>
              <p className="text-gray-400">Average increase in listing views in the first week</p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
              <CheckCircle2 className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">5x Faster Sales</h3>
              <p className="text-gray-400">Items sell faster with optimized visibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">List Faster. Sell Faster.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Upload className="w-16 h-16 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Upload Products</h3>
              <p className="text-gray-400">Simply upload your product details and images.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Zap className="w-16 h-16 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. AI Magic</h3>
              <p className="text-gray-400">Our AI generates multiple unique listing variations.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <MousePointerClick className="w-16 h-16 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. One-Click Post</h3>
              <p className="text-gray-400">Stay ahead of competition with automated posting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Competition is Using This. Are You?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Don't let your listings get buried again. Start automating your Facebook Marketplace success today.
            </p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <button className="button-gradient px-8 py-4 rounded-full font-medium hover:opacity-90 transition glow flex items-center gap-2">
                Get Started Now – It's Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-gray-400">
                <ShieldCheck className="w-5 h-5" />
                <span>14-day free trial, no credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2025 Markt Place It. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;