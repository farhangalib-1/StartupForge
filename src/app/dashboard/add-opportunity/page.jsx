import React from 'react'
import OpportunityForm from './OpportunityForm'
import { getOpportunities, getOwnStartUpData, getStartUpData } from '@/lib/actions/GetData'
import NoStartupFound from './NoStartupFound'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

const page = async() => {
   const session = await auth.api.getSession({
  headers: await headers(),
});
    const result = await getOpportunities()
    const startUpData = await getOwnStartUpData(session?.user?.id)
  return (
    <div>
      {
        startUpData.length > 0 ? <OpportunityForm result={result} /> : <NoStartupFound />
      }
      
    </div>
  )
}

export default page
