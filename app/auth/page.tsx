'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AuthPage() {
  const router = useRouter();
  const setUser = useStore((state) => state.setUser);
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log('[v0] Login button clicked');
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    
    // Simulate auth
    setTimeout(() => {
      console.log('[v0] Setting user and redirecting');
      setUser({
        id: '1',
        name: email.split('@')[0],
        email,
        membership: 'premium',
      });
      setLoading(false);
      router.push('/');
    }, 800);
  };

  const handleSignUp = () => {
    console.log('[v0] Sign up button clicked');
    setError('');
    
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      console.log('[v0] Setting user and redirecting');
      setUser({
        id: Date.now().toString(),
        name,
        email,
        membership: 'free',
      });
      setLoading(false);
      router.push('/');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-3 mb-8">
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-lg shadow-accent/40">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
              </svg>
            </motion.div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Kimo&apos;s Gym</h2>
            <p className="text-xs text-accent uppercase tracking-wider font-semibold">Premium Fitness</p>
          </div>
        </Link>

        {/* Card */}
        <motion.div
          className="border border-accent/20 rounded-2xl p-8 bg-card/80 backdrop-blur space-y-6 shadow-xl shadow-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Tabs */}
          <div className="flex gap-4 bg-foreground/5 rounded-lg p-1">
            <button
              onClick={() => {
                setIsLogin(true);
                setError('');
              }}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                isLogin
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setError('');
              }}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                !isLogin
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground mb-1">
                {isLogin ? 'Welcome Back' : 'Get Started'}
              </h3>
              <p className="text-sm text-foreground/60">
                {isLogin
                  ? 'Sign in to access your fitness journey'
                  : 'Create account to join our community'}
              </p>
            </div>

            {/* Name Field - Sign Up Only */}
            {!isLogin && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <label className="text-sm font-medium text-foreground block mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-accent/60" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setError('');
                    }}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-foreground/40 focus:border-accent/50 focus:outline-none transition-all"
                  />
                </div>
              </motion.div>
            )}

            {/* Email Field */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <label className="text-sm font-medium text-foreground block mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-accent/60" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-foreground/40 focus:border-accent/50 focus:outline-none transition-all"
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <label className="text-sm font-medium text-foreground block mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-accent/60" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  className="w-full pl-10 pr-10 py-2 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-foreground/40 focus:border-accent/50 focus:outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-accent/60 hover:text-accent transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              onClick={isLogin ? handleLogin : handleSignUp}
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-11 rounded-lg bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-medium hover:shadow-lg hover:shadow-accent/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  {isLogin ? 'Signing In...' : 'Creating...'}
                </>
              ) : isLogin ? (
                'Sign In'
              ) : (
                'Create Account'
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-center text-xs text-foreground/60 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          By continuing, you agree to our{' '}
          <a href="#" className="text-accent hover:underline font-medium">
            Terms of Service
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
