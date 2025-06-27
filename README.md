# JobBoardly – Modern AI-Powered Job Board

A modern, responsive job board application built with Next.js (App Router), React, Tailwind CSS, and react icons. This project demonstrates advanced Next.js concepts, static and dynamic routing, SEO, and state management with Context API.

---

## 🚀 Features

-   **Job Listings**: Browse all available jobs with AI match scores.
-   **Job Details**: View detailed information about each position, including structured data for SEO.
-   **Application Tracking**: Apply to jobs and track your applications (persisted in localStorage).
-   **Responsive Design**: Works seamlessly on desktop and mobile devices.
-   **Real-time Updates**: Application count updates instantly in the navbar.
-   **Loading & Skeleton States**: Smooth user experience with loading indicators.
-   **Modern Icons**: All icons are now from react icons.
-   **SEO & Social Sharing**: Dynamic metadata, Open Graph, Twitter cards, and structured data for job postings.
-   **App Directory Structure**: Uses Next.js 14+ App Router for modern routing and layouts.

---

## 🛠️ Tech Stack

-   **Framework**: Next.js 15 (App Router)
-   **Frontend**: React 19
-   **Styling**: Tailwind CSS 4
-   **Icons**: react-icons (Heroicons)
-   **State Management**: React Context API
-   **Routing**: Next.js App Router (src/app)
-   **Persistence**: localStorage (via custom hook)
-   **SEO**: Dynamic metadata, Open Graph, Twitter, and JSON-LD structured data

---

## 📁 Project Structure

```
src/
  app/
    jobs/
      [id]/
        page.js              # Server component for job details (SEO, structured data)
        JobDetailClient.js   # Client component for interactive job details (apply, icons)
        JobDetailSkeleton.js # Skeleton loader for job details
      page.js                # Job listings page
    layout.js                # Global layout (providers, navbar)
    page.js                  # Home page
  components/
    JobCard.js               # Job listing card (uses react-icons)
    Navbar.js                # Navigation bar with application counter
    LoadingSpinner.js        # Loading indicator
  contexts/
    ApplicationContext.js    # Global state for job applications
  data/
    jobs.js                  # Mock job data
  hooks/
    useLocalStorage.js       # Custom hook for persistent state
  styles/
    globals.css              # Tailwind and global styles
public/
  *.svg                      # Static assets
jsconfig.json                # Path aliases (e.g., @/ for src/)
next.config.mjs              # Next.js config
postcss.config.mjs           # PostCSS/Tailwind config
```

---

## 🚦 Getting Started

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
    - Visit [http://localhost:3000](http://localhost:3000)

---

## 🗂️ Key Implementation Details

### Next.js App Router

-   **App Directory**: Uses `src/app` for routing, layouts, and server/client components.
-   **Dynamic Routing**: Job details use `[id]/page.js` and generate static params for SSG.
-   **SEO**: Dynamic metadata, Open Graph, Twitter, and JSON-LD structured data for job postings.
-   **Global Providers**: Application state and navbar are provided in `layout.js`.

### React Patterns

-   **Context API**: Global state for job applications (`ApplicationContext.js`).
-   **Custom Hooks**: `useLocalStorage` for persistent state.
-   **Component Composition**: Reusable components (JobCard, Navbar, LoadingSpinner, Skeletons).
-   **Client/Server Components**: Job details split into server (SEO, data) and client (interactivity, icons).

### Styling

-   **Tailwind CSS**: Utility-first, responsive, and modern design.
-   **Custom Animations**: Fade-in, slide-up, and pulse for smooth UI.
-   **Consistent Design System**: Color palette, spacing, typography, and shadows.

### Icons

-   **react-icons**: All icons are now from react icons.
-   No inline SVGs—icons are React components for consistency and maintainability.

---

## 🧪 Testing the Application

-   **Browse Jobs**: Visit `/jobs` to see all available positions.
-   **View Details**: Click any job card for full details.
-   **Apply to Jobs**: Click "Apply Now" on job detail pages.
-   **Track Applications**: Navbar counter updates in real-time.
-   **Loading States**: Skeletons and spinners provide feedback during data fetching.

---

## 🔧 Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📝 Future Enhancements

-   Job filtering and search
-   User authentication and profiles
-   Job posting for employers
-   Application management dashboard
-   Email notifications
-   Enhanced error handling and loading states
-   Pagination for large job lists

---

## 🧑‍💻 Developer Notes

-   **Path Aliases**: Use `@/` for imports from `src/` (see `jsconfig.json`).
-   **App Router**: All routing and layouts are in `src/app/`.
-   **SEO**: Job detail pages include dynamic metadata and structured data for better discoverability.
-   **Icons**: To use a new icon, import from `react-icons/hi` and use as a React component.

---

## 📱 Responsive Features

-   Mobile-friendly navigation and layouts
-   Responsive grid for job cards
-   Touch-friendly buttons and controls

---

## ❤️ Built for learning, demo, and technical assessment
