'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const setUser = useStore((state) => state.setUser);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate auth delay
    setTimeout(() => {
      if (isLogin) {
        // Mock login
        setUser({
          id: '1',
          name: email.split('@')[0],
          email,
          membership: 'premium',
        });
      } else {
        // Mock signup
        setUser({
          id: Date.now().toString(),
          name,
          email,
          membership: 'free',
        });
      }
      setLoading(false);
      router.push('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded bg-accent"></div>
          <span className="text-2xl font-bold text-foreground">Kimo&apos;s Gym</span>
        </Link>

        {/* Card */}
        <div className="border border-foreground/10 rounded-lg p-8 bg-card space-y-6">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {isLogin ? 'Welcome Back' : 'Get Started'}
            </h1>
            <p className="text-foreground/60">
              {isLogin
                ? 'Sign in to your account to continue'
                : 'Create an account to join Kimo&apos;s Gym'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                  className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/40"
                />
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/40"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/40"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50"
            >
              {loading ? 'Loading...' : isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-foreground/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-foreground/60">Or continue with</span>
            </div>
          </div>

          {/* Social Auth */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-foreground/10 text-foreground hover:bg-foreground/5">
              Google
            </Button>
            <Button variant="outline" className="border-foreground/10 text-foreground hover:bg-foreground/5">
              GitHub
            </Button>
          </div>

          {/* Toggle */}
          <div className="text-center text-sm">
            <span className="text-foreground/60">
              {isLogin ? 'Don&apos;t have an account? ' : 'Already have an account? '}
            </span>
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setEmail('');
                setPassword('');
                setName('');
              }}
              className="text-accent font-medium hover:underline"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-foreground/60 mt-6">
          By continuing, you agree to our{' '}
          <a href="#" className="text-accent hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
}
