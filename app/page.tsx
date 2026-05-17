'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                Premium Fitness Experience
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Transform Your Body, Master Your Craft
              </h1>
              <p className="text-xl text-foreground/70 text-balance">
                Advanced 3D exercise visualization, AI-powered coaching, and premium fitness gear all in one platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/exercises">
                <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                  Explore Exercises
                </Button>
              </Link>
              <Link href="/shop">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-foreground/20 text-foreground hover:bg-foreground/5">
                  View Shop
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-foreground/10">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-accent">500+</p>
                <p className="text-sm text-foreground/60">Exercises</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-accent">50+</p>
                <p className="text-sm text-foreground/60">Workouts</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-accent">24/7</p>
                <p className="text-sm text-foreground/60">AI Coach</p>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-xl bg-accent/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-lg bg-accent/40"></div>
                </div>
                <p className="text-sm text-foreground/60">3D Exercise Visualization Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-foreground/10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Why Choose Kimo&apos;s Gym</h2>
          <p className="text-lg text-foreground/60">Everything you need for your fitness journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['3D Visualization', 'AI Coaching', 'Premium Gear'].map((feature) => (
            <div key={feature} className="p-6 rounded-xl border border-foreground/10 bg-card hover:border-accent/50 transition">
              <div className="w-12 h-12 rounded-lg bg-accent/20 mb-4"></div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature}</h3>
              <p className="text-foreground/60">Experience cutting-edge technology for optimal results.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Transform?</h2>
          <p className="text-foreground/60 max-w-md mx-auto">Join thousands of fitness enthusiasts using Kimo&apos;s Gym</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Start Free Trial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
