//@ts-ignore
//@ts-nocheck
'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"
import { usePostHog } from 'posthog-js/react'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure this only runs on client-side
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'always', // Changed to 'always' to create profiles for anonymous users
        capture_pageview: false, // Disable automatic pageview capture
        loaded: (posthog) => {
          // Enable debug mode in development
          if (process.env.NODE_ENV === 'development') {
            posthog.debug();
          }
        }
      });
    }
  }, [])

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {children}
    </PHProvider>
  )
}

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = usePostHog()

  // Track pageviews
  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + "?" + searchParams.toString();
      }

      posthog.capture('$pageview', { 
        '$current_url': url,
        '$host': window.location.hostname
      });
      
      // Optional: Identify anonymous users
      if (!posthog.get_distinct_id()) {
        posthog.identify('anonymous_user', {
          'anonymous': true,
          'initial_path': pathname
        });
      }
    }
  }, [pathname, searchParams, posthog])

  return null
}

function SuspendedPostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  )
}