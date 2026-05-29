# Admin Access Setup Guide

## Your Admin Account

**Email:** hamada.laidi.14@gmail.com  
**Role:** Admin (Full Dashboard Access)  
**Status:** Activated

## How to Access Admin Dashboard

### Method 1: Quick Admin Login Button (EASIEST)

1. Go to: `http://localhost:3000/auth`
2. Look for the red button at the bottom that says:
   ```
   "Admin Login (hamada.laidi.14@gmail.com)"
   ```
3. Click the button
4. Wait for cinematic transition (1.2 seconds)
5. Automatically redirects to Admin Dashboard at `/admin`

### Method 2: Manual Login

1. Go to: `http://localhost:3000/auth`
2. Enter your email: `hamada.laidi.14@gmail.com`
3. Enter any password (e.g., "password123" or "admin")
4. Click "Sign In"
5. Redirects to Admin Dashboard

### Method 3: Direct URL (After First Login)

Once logged in, you can directly visit:
```
http://localhost:3000/admin
```

## What You Get as Admin

### Admin Dashboard Features

Your admin panel includes:

1. **Statistics Overview**
   - Total Users: 4
   - Active Users: 2
   - Inactive Users: 1
   - Spam Reports: 0

2. **User Activity Pie Chart**
   - Visual representation of active vs inactive users
   - Interactive tooltips
   - Real-time data updates

3. **Revenue Charts**
   - Toggle between Monthly and Yearly views
   - Monthly: Jan-Jun 2024 (8K-18K DA)
   - Yearly: 2022-2024 (120K-185K DA)
   - Trend analysis capabilities

4. **User Management Table**
   - View all registered users
   - Search by name or email
   - See user information:
     - Name
     - Email
     - Status (Active/Inactive)
     - Age
     - Height (cm)
     - Weight (kg)
     - Revenue (DA currency)

5. **User Control Actions**
   - **Eye Icon**: Toggle user active/inactive status
   - **Alert Icon**: Mark users as spam
   - **QR Icon**: View full user profile with details

6. **User Profile Modal**
   - Click QR icon to view complete user information
   - Displays:
     - Name & Email
     - Age & Sex
     - Height & Weight
     - Membership tier
     - Join date
     - Total revenue
     - QR code

## User Data Available

### Pre-loaded Sample Users

**User 1: Karim Ahmed**
- Email: karim@gym.com
- Status: Active
- Membership: Premium
- Age: 28, Male
- Height: 180cm, Weight: 75kg
- Join Date: 2024-01-15
- Revenue: 2,999 DA

**User 2: Fatima Belhadj**
- Email: fatima@gym.com
- Status: Active
- Membership: Elite
- Age: 26, Female
- Height: 165cm, Weight: 58kg
- Join Date: 2024-02-20
- Revenue: 3,499 DA

**User 3: Amin Boukerch**
- Email: amin@gym.com
- Status: Inactive
- Membership: Free
- Age: 32, Male
- Height: 175cm, Weight: 70kg
- Join Date: 2024-01-10
- Revenue: 0 DA

## Admin Capabilities

### View Information
✓ All user statistics and metrics
✓ User activity patterns
✓ Revenue trends (monthly/yearly)
✓ Individual user complete profiles
✓ User QR codes
✓ Physical measurements (height, weight, age, sex)

### Manage Users
✓ Activate/Deactivate user accounts
✓ Flag accounts as spam
✓ Search users by name or email
✓ Filter data by timeframe
✓ View membership details
✓ Track user revenue

### Monitor System
✓ Active user count
✓ Inactive user count
✓ Spam reports count
✓ Revenue analytics
✓ User demographics
✓ Account status overview

## Technical Details

### Components Used

- **AdminDashboard.tsx** (375 lines)
  - Main dashboard container
  - Charts (pie & line)
  - User management table
  - Search & filtering
  - User profile modal

- **AdminProtected.tsx** (45 lines)
  - Route guard component
  - Role-based access control
  - Automatic redirects for non-admins

- **admin/page.tsx** (13 lines)
  - Page wrapper component

### Store Features

**Admin-specific User Fields:**
```typescript
role: 'admin' | 'user'           // User role
isActive: boolean                // Account status
isSpam: boolean                  // Spam flag
height: number                   // Height in cm
weight: number                   // Weight in kg
age: number                      // Age in years
sex: 'male' | 'female' | 'other' // Gender
joinDate: string                 // Registration date
revenue: number                  // Total revenue (DA)
qrCode: string                   // QR code data
```

**Store Actions for Admin:**
```typescript
toggleUserActive(userId)           // Toggle account status
markUserAsSpam(userId)            // Flag account
updateUserInfo(userId, info)      // Update user data
getAllUsers()                     // Get all users
```

## Design & Features

### Dark Theme
- Background: Black to dark gray gradient (#000000 → #111111)
- Cards: Dark with subtle white borders (#1a1a1a)
- Text: White & gray tones

### Color Coding
- Active: Green (#4ade80)
- Inactive: Red (#ef4444)
- Spam: Yellow (#fbbf24)
- Brand: Red (#DC2626)

### Responsive Design
- Mobile optimized (single column)
- Tablet optimized (2 columns)
- Desktop optimized (full layout)

### Animations
- Staggered stat cards entrance
- Smooth chart transitions
- Table row animations
- Modal scale & fade effects
- Button hover animations

## Data Persistence

- **Zustand Store**: State management
- **localStorage**: Data persistence across sessions
- **User actions**: Reflected instantly in UI
- **Store updates**: Propagated in real-time

## Session Management

Your session is stored in:
- Browser localStorage (auto-loads on page refresh)
- Cookie (for server-side verification)

Logout by navigating away or clearing browser data.

## Troubleshooting

### Not Seeing Admin Button?
1. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Refresh page (Ctrl+R or Cmd+R)
3. Make sure you're on: `http://localhost:3000/auth`

### Can't Click Admin Button?
1. Wait a moment for page to fully load
2. Try refreshing the page
3. Check browser console for errors (F12)
4. Use the manual login method instead

### Not Redirecting to Admin Dashboard?
1. Check that you're using the correct email: `hamada.laidi.14@gmail.com`
2. Wait 1-2 seconds after clicking button for transition
3. Check browser network tab (F12 → Network)
4. Ensure dev server is running: `pnpm dev`

### Can't See User Data?
1. Make sure you're logged in as admin
2. Check that you're on the `/admin` page
3. Try refreshing the page
4. Search in the user management table to filter

## Server Setup

### Start Dev Server
```bash
cd /vercel/share/v0-project
pnpm dev
```

Server runs on: `http://localhost:3000`

### Build for Production
```bash
pnpm build
pnpm start
```

## File Structure

```
/vercel/share/v0-project/
├── app/
│   ├── auth/page.tsx          # Auth with admin button
│   ├── admin/page.tsx         # Admin dashboard page
│   └── ...
├── components/
│   ├── admin/
│   │   ├── AdminDashboard.tsx # Main dashboard
│   │   └── AdminProtected.tsx # Route guard
│   └── ...
├── lib/
│   └── store.ts               # Zustand store
└── ...
```

## Quick Reference

| Action | URL | Email | Password |
|--------|-----|-------|----------|
| Admin Login | `/auth` | hamada.laidi.14@gmail.com | any |
| Quick Admin Button | `/auth` | (auto-filled) | (auto-filled) |
| Admin Dashboard | `/admin` | (requires login) | (requires login) |

## Support

For issues or questions:
1. Check this guide first
2. Review the component documentation
3. Check browser console (F12)
4. Review dev server logs

## Next Steps

1. Start the server: `pnpm dev`
2. Visit: `http://localhost:3000/auth`
3. Click "Admin Login (hamada.laidi.14@gmail.com)" button
4. Explore the admin dashboard features
5. Test user management (toggle active/spam)
6. View user profiles and QR codes

---

**Status:** ✅ Admin access configured and ready  
**Your Email:** hamada.laidi.14@gmail.com  
**Access Level:** Full Admin  
**Dashboard:** `/admin`
