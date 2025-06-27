# Mini Job Board Application

A modern, responsive job board application built with Next.js, React, and Tailwind CSS. This project demonstrates core Next.js concepts including file-based routing, static generation, and the Context API for state management.

## 🚀 Features

-   **Job Listings**: Browse all available jobs with AI match scores
-   **Job Details**: View detailed information about each position
-   **Application Tracking**: Apply to jobs and track your applications
-   **Responsive Design**: Works seamlessly on desktop and mobile devices
-   **Real-time Updates**: Application count updates instantly in the navbar

## 🛠️ Tech Stack

-   **Framework**: Next.js 14
-   **Frontend**: React 18
-   **Styling**: Tailwind CSS
-   **State Management**: React Context API
-   **Routing**: Next.js file-based routing

## 📁 Project Structure

```
jobboardly/
├── components/
│   ├── JobCard.js          # Job listing card component
│   └── Navbar.js           # Navigation bar with app counter
├── contexts/
│   └── ApplicationContext.js # Global state for job applications
├── data/
│   └── jobs.js             # Mock job data
├── pages/
│   ├── jobs/
│   │   ├── index.js        # Jobs listing page
│   │   └── [id].js         # Dynamic job detail page
│   ├── _app.js             # App wrapper with context provider
│   └── index.js            # Home page (redirects to /jobs)
└── styles/
    └── globals.css         # Global styles and Tailwind
```

## 🚀 Getting Started

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd jobboardly
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Implementation Details

### Next.js Features Used

-   **File-based Routing**: `/pages/jobs/index.js` and `/pages/jobs/[id].js`
-   **Static Generation**: `getStaticProps` for data fetching
-   **Dynamic Routes**: `getStaticPaths` for pre-rendering job detail pages
-   **Next/Link**: Client-side navigation between pages

### React Patterns

-   **Context API**: Global state management for job applications
-   **Custom Hooks**: `useApplication` hook for accessing application state
-   **Component Composition**: Reusable JobCard component

### Styling Approach

-   **Utility-First**: Tailwind CSS for rapid UI development
-   **Responsive Design**: Mobile-first approach with responsive breakpoints
-   **Interactive States**: Hover effects and focus states for accessibility

## 🧪 Testing the Application

1. **Browse Jobs**: Visit `/jobs` to see all available positions
2. **View Details**: Click on any job card to see full details
3. **Apply to Jobs**: Click "Apply Now" on job detail pages
4. **Track Applications**: Watch the counter in the navbar update
5. **Button State**: Notice how "Apply Now" becomes "Applied" after clicking

## 🔧 Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Future Enhancements

-   Job filtering and search functionality
-   User authentication and profiles
-   Job posting capabilities for employers
-   Application management dashboard
-   Email notifications
-   Loading states and error handling
-   Pagination for large job lists

## 🎨 Design Decisions

-   **Clean, Modern UI**: Professional appearance suitable for a job board
-   **Color-coded Match Scores**: Visual indicators for job compatibility
-   **Consistent Spacing**: Tailwind's spacing system for visual harmony
-   **Accessible Design**: Proper contrast ratios and focus states

## 🎨 Design System & Style Guide

### Color Palette

-   **Primary Blue**: `#3B82F6` (blue-500)
-   **Primary Blue Dark**: `#1D4ED8` (blue-700)
-   **Primary Blue Light**: `#93C5FD` (blue-300)
-   **Success Green**: `#10B981` (emerald-500)
-   **Warning Orange**: `#F59E0B` (amber-500)
-   **Error Red**: `#EF4444` (red-500)
-   **Neutral Gray**: `#6B7280` (gray-500)
-   **Light Gray**: `#F9FAFB` (gray-50)
-   **Dark Text**: `#111827` (gray-900)
-   **Medium Text**: `#4B5563` (gray-600)

### Typography Scale

-   **Display**: `text-4xl md:text-5xl font-bold`
-   **Heading 1**: `text-3xl md:text-4xl font-bold`
-   **Heading 2**: `text-2xl md:text-3xl font-semibold`
-   **Heading 3**: `text-xl md:text-2xl font-semibold`
-   **Body Large**: `text-lg font-medium`
-   **Body**: `text-base`
-   **Body Small**: `text-sm`
-   **Caption**: `text-xs font-medium uppercase tracking-wide`

### Spacing System

-   **XS**: `4px` (1)
-   **SM**: `8px` (2)
-   **MD**: `16px` (4)
-   **LG**: `24px` (6)
-   **XL**: `32px` (8)
-   **2XL**: `48px` (12)
-   **3XL**: `64px` (16)

### Border Radius

-   **Small**: `rounded-lg` (8px)
-   **Medium**: `rounded-xl` (12px)
-   **Large**: `rounded-2xl` (16px)
-   **Full**: `rounded-full`

### Shadows

-   **Card**: `shadow-lg`
-   **Card Hover**: `shadow-xl`
-   **Button**: `shadow-md`
-   **Dropdown**: `shadow-2xl`

## 📱 Responsive Features

-   **Mobile Navigation**: Condensed navbar for smaller screens
-   **Grid Layout**: Responsive job card grid (1 column → 2 → 3)
-   **Touch-Friendly**: Adequate button sizes for mobile interaction

---

Built with ❤️ for technical assessment
