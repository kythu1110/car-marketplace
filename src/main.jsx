import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ClerkProvider} from '@clerk/clerk-react'
import Home from './home.jsx';
import Contact from './contact.jsx';
import Profile from './profile/index.jsx';
import AddListing from './add-listing/index.jsx';
import { Toaster } from 'sonner';
import SearchByCategory from './search/[category]/index.jsx';
import SearchByOptions from './search/index.jsx';
import ListingDetail from './listing-details/[id]/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/add-listing',
    element: <AddListing/>
  }, 
  {
    path: '/search',
    element: <SearchByOptions/>
  },
  {
    path: '/search/:category',
    element: <SearchByCategory/>
  },
  {
    path: '/listing-details/:id',
    element: <ListingDetail/>
  }
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router = {router} />
      <Toaster/>
    </ClerkProvider>
  </StrictMode>,
)
