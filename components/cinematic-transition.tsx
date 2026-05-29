'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CinematicTransition() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if we just logged in by looking at URL params or session
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('justLoggedIn') === 'true') {
        setShow(true);
        const timer = setTimeout(() => setShow(false), 800);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Top and bottom bars sliding in */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-accent via-accent/50 to-transparent"
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-accent via-accent/50 to-transparent"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      {/* Center loading text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <motion.div className="text-center">
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-full border-3 border-transparent border-t-accent-foreground border-r-accent-foreground"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <motion.p
            className="text-accent-foreground font-semibold text-lg tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            ENTERING YOUR WORLD
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
