'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { getCourses } from '@/lib/api/courses';
import type { Course } from '@/types/course';
import { toast } from 'sonner';

export default function Home() {
  const [latestCourse, setLatestCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestCourse = async () => {
      try {
        setLoading(true);
        const response = await getCourses();
        if (response.courses.length > 0) {
          setLatestCourse(response.courses[0]);
        }
      } catch (err) {
        console.error('Failed to fetch latest course:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestCourse();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Modern Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left animate-fade-in-up">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-ping"></span>
                  Admissions Open for Winter 2026
                </div>

                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                  Accelerate Your <br />
                  <span className="gradient-text">Career Growth</span> <br />
                  with Expert Coaching
                </h1>

                <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                  Join an exclusive community of learners. Get direct mentorship from industry leaders and master the skills that actually matter in today's market.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/courses"
                    className="gradient-bg text-white font-bold px-10 py-5 rounded-2xl hover:opacity-90 smooth-transition shadow-2xl shadow-primary/20 text-center text-lg"
                  >
                    Start Learning Now
                  </Link>
                  <button className="bg-muted text-foreground font-bold px-10 py-5 rounded-2xl hover:bg-muted/80 smooth-transition text-center border border-border text-lg">
                    Success Stories
                  </button>
                </div>

                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-muted overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                    <span className="text-primary font-bold">4.9/5</span> from 2,000+ happy alumni
                  </div>
                </div>
              </div>

              <div className="relative group perspective-1000 hidden lg:block">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(var(--primary-rgb),0.3)] animate-float">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                    alt="Premium Education"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Live Workshop</div>
                    <h3 className="text-2xl font-bold">Scaling Modern Applications in 2026</h3>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10 group-hover:bg-primary/30 transition-all duration-700"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10 group-hover:bg-purple-500/30 transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Course Section */}
        <section className="py-24 bg-muted/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Latest Arrival</h2>
                <h3 className="text-4xl sm:text-5xl font-extrabold">Newest Course Launch</h3>
              </div>
              <Link href="/courses" className="text-primary font-bold hover:underline flex items-center gap-2 group text-lg">
                View All Courses <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {loading ? (
              <div className="w-full h-[400px] bg-card/50 rounded-3xl animate-pulse flex items-center justify-center border border-border">
                <span className="text-muted-foreground font-medium">Preparing curriculum...</span>
              </div>
            ) : latestCourse ? (
              <div className="bg-card rounded-[2.5rem] overflow-hidden shadow-2xl border border-border flex flex-col lg:flex-row hover:shadow-primary/5 transition-all duration-500">
                <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                  {latestCourse.thumbnail ? (
                    <img src={latestCourse.thumbnail} alt={latestCourse.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-4xl">NEW</span>
                    </div>
                  )}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold text-primary shadow-lg uppercase tracking-tight">
                    Premium Coaching
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-bold uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                      Trending
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {latestCourse.duration}
                    </span>
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-bold mb-6 hover:text-primary transition-colors cursor-pointer">
                    {latestCourse.title}
                  </h4>
                  <p className="text-lg text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                    {latestCourse.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-8 justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center font-bold text-primary text-xl shadow-inner">
                        {latestCourse.title[0]}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase text-muted-foreground">Expert Led</p>
                        <p className="font-bold">Main Academy</p>
                      </div>
                    </div>
                    <Link
                      href={`/courses/${latestCourse.id}`}
                      className="gradient-bg text-white font-bold px-10 py-4 rounded-2xl hover:opacity-90 smooth-transition shadow-xl text-center"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-3xl border border-dashed border-border">
                <p className="text-muted-foreground text-lg">No courses available at the moment. Stay tuned!</p>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us - Coaching Style */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Our Methodology</h2>
              <h3 className="text-4xl sm:text-5xl font-extrabold mb-6">Built for Outcomes, <br /> Not Just Certificates</h3>
              <p className="text-lg text-muted-foreground">We focus on high-impact learning that translates directly to career success and practical mastery.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Personalized Mentorship', desc: 'Direct access to instructors for personalized guidance and career advice.', icon: '🎓' },
                { title: 'Project-Based Learning', desc: 'Build a portfolio of real-world projects that impress recruiters.', icon: '⚡' },
                { title: 'Industry Network', desc: 'Join an exclusive alumni network of professionals at top tech companies.', icon: '🌍' }
              ].map((feature, idx) => (
                <div key={idx} className="group p-10 rounded-[2rem] bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 mb-20">
          <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[3rem] gradient-bg p-12 lg:p-24 shadow-[0_50px_100px_rgba(var(--primary-rgb),0.3)]">
            {/* Decorative background circle */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -z-0"></div>

            <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-6xl font-extrabold mb-8 leading-tight">
                Stop Learning in Isolation. <br /> Start Growing with Us.
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Take the next step in your career with a community that supports your ambition.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/courses" className="bg-white text-primary font-bold px-12 py-5 rounded-2xl hover:bg-white/90 smooth-transition text-xl shadow-2xl">
                  View Catalog
                </Link>
                <Link href="/about" className="bg-primary-foreground/10 backdrop-blur-md text-white border border-white/20 font-bold px-12 py-5 rounded-2xl hover:bg-white/10 smooth-transition text-xl">
                  Contact Admissions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <h3 className="text-2xl font-bold gradient-text mb-6">LearnHub Academy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowering the next generation of digital leaders through expert-led coaching and project-based learning.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Platform</h4>
              <ul className="space-y-4 font-medium text-muted-foreground">
                <li><Link href="/courses" className="hover:text-primary transition-colors">Course Catalog</Link></li>
                <li><Link href="/" className="hover:text-primary transition-colors">Success Stories</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">Become a Coach</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-4 font-medium text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About the Academy</Link></li>
                <li><Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/" className="hover:text-primary transition-colors">Terms of Use</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Follow Excellence</h4>
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 cursor-pointer transition-all">
                    <div className="w-5 h-5 bg-muted-foreground group-hover:bg-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
            <p>© 2026 LearnHub Academy. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a
                href="https://jiroshi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group"
              >
                <img src="/icon.png" alt="Jiroshi Icon" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-foreground">
                  Made with <span className="gradient-text">Jiroshi</span>
                </span>
              </a>
              <div className="hidden sm:flex items-center gap-8">
                <span>Status: Online</span>
                <span>Region: Global</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
