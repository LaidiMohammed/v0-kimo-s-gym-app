'use client';

import { useStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, User, Settings, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';

export function UserMenu() {
  const { user, logout } = useStore();
  const router = useRouter();

  if (!user) {
    return (
      <div className="hidden md:flex items-center gap-4">
        <Link href="/auth">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
        </Link>
        <Link href="/auth">
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Join Now
          </Button>
        </Link>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20 hover:border-accent/40 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-white font-bold text-sm">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground">{user.name}</p>
            <p className="text-xs text-accent capitalize">{user.membership}</p>
          </div>
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-card border-foreground/10">
        <DropdownMenuItem className="text-foreground/60 cursor-default hover:bg-transparent">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-foreground">{user.name}</p>
            <p className="text-xs">{user.email}</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-foreground/10" />
        
        <Link href="/profile">
          <DropdownMenuItem className="cursor-pointer hover:bg-foreground/5">
            <User className="w-4 h-4 mr-2 text-accent" />
            <span>My Profile</span>
          </DropdownMenuItem>
        </Link>

        <Link href="/workouts">
          <DropdownMenuItem className="cursor-pointer hover:bg-foreground/5">
            <Dumbbell className="w-4 h-4 mr-2 text-accent" />
            <span>My Workouts</span>
          </DropdownMenuItem>
        </Link>

        <Link href="/settings">
          <DropdownMenuItem className="cursor-pointer hover:bg-foreground/5">
            <Settings className="w-4 h-4 mr-2 text-accent" />
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator className="bg-foreground/10" />

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer hover:bg-red-500/10 text-red-500 hover:text-red-600"
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
