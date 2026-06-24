"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react'

const Homepage = () => {
const { data: session } = authClient.useSession();
const name = session?.user?.name
  return (
    <div>
      <div className="mb-8 rounded-3xl border bg-white p-8 shadow-sm">
      <div className="space-y-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
          Founder Dashboard
        </span>
<h1 className="text-6xl font-bold tracking-tight">
          Welcome back, {name}
        </h1>
        <h1 className="text-4xl font-bold tracking-tight">
          Build. Recruit. Scale.
        </h1>

        <p className="max-w-2xl text-default-500">
          Manage your startup, post opportunities, review applications,
          and build your dream team from one place.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Homepage
