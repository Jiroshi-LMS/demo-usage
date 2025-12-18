import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-[var(--success)] rounded-full mr-2 animate-pulse"></span>
              Join 50,000+ students learning online
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Master New Skills with{' '}
              <span className="gradient-text">Expert Instructors</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Discover world-class courses taught by industry professionals. Learn at your own pace and achieve your goals with our comprehensive learning platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <Link href="/courses" className="gradient-bg text-white font-medium px-8 py-4 rounded-full hover:opacity-90 smooth-transition shadow-lg w-full sm:w-auto inline-flex items-center justify-center">
                Browse Courses
              </Link>
              <button className="bg-background border-2 border-[var(--border)] text-foreground font-medium px-8 py-4 rounded-full hover:border-[var(--primary)] smooth-transition w-full sm:w-auto">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-[var(--border)] animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text">500+</div>
                <div className="text-sm text-[var(--muted-foreground)] mt-1">Courses</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-[var(--muted-foreground)] mt-1">Students</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text">4.8★</div>
                <div className="text-sm text-[var(--muted-foreground)] mt-1">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Start learning with our most popular courses taught by industry experts
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="bg-background rounded-2xl overflow-hidden card-hover shadow-md">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative">
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-purple-600">
                  Bestseller
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    Development
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)]">12 hours</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Complete Web Development Bootcamp
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                  Master modern web development with HTML, CSS, JavaScript, React, and Node.js
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                    <span className="text-sm font-medium text-foreground">Sarah Chen</span>
                  </div>
                  <div className="text-2xl font-bold gradient-text">$49</div>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-background rounded-2xl overflow-hidden card-hover shadow-md">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative">
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                  New
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Data Science
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)]">18 hours</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Python for Data Science & AI
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                  Learn Python, data analysis, machine learning, and AI fundamentals from scratch
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                    <span className="text-sm font-medium text-foreground">Dr. James Liu</span>
                  </div>
                  <div className="text-2xl font-bold gradient-text">$59</div>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-background rounded-2xl overflow-hidden card-hover shadow-md">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 relative">
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-orange-600">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                    Design
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)]">10 hours</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  UI/UX Design Masterclass
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                  Create stunning user experiences with modern design principles and Figma
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500"></div>
                    <span className="text-sm font-medium text-foreground">Maria Garcia</span>
                  </div>
                  <div className="text-2xl font-bold gradient-text">$45</div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link href="/courses" className="inline-flex items-center border-2 border-[var(--border)] text-foreground font-medium px-8 py-3 rounded-full hover:border-[var(--primary)] hover:text-[var(--primary)] smooth-transition">
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose LearnHub?
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-[var(--muted)] hover:bg-background hover:shadow-lg smooth-transition">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                🎓
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Instructors</h3>
              <p className="text-[var(--muted-foreground)]">
                Learn from industry professionals with years of real-world experience
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-[var(--muted)] hover:bg-background hover:shadow-lg smooth-transition">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Learn at Your Pace</h3>
              <p className="text-[var(--muted-foreground)]">
                Access courses anytime, anywhere with lifetime access to all materials
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-[var(--muted)] hover:bg-background hover:shadow-lg smooth-transition">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold">
                🏆
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Certificate of Completion</h3>
              <p className="text-[var(--muted-foreground)]">
                Earn recognized certificates to showcase your new skills and knowledge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--muted)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning on LearnHub. Start your journey today with our 30-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="gradient-bg text-white font-medium px-8 py-4 rounded-full hover:opacity-90 smooth-transition shadow-lg w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="bg-background border-2 border-[var(--border)] text-foreground font-medium px-8 py-4 rounded-full hover:border-[var(--primary)] smooth-transition w-full sm:w-auto">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">LearnHub</h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Empowering learners worldwide with quality education
              </p>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">Browse Courses</a></li>
                <li><a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">Become Instructor</a></li>
                <li><a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">Pricing</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">About Us</a></li>
                <li><a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">Careers</a></li>
                <li><a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">Contact</a></li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">Help Center</a></li>
                <li><a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-[var(--muted-foreground)]">
              © 2025 LearnHub. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              <a href="#" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] smooth-transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
