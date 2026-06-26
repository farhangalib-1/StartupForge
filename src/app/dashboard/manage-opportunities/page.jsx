import { getMyOpportunities, getOpportunities } from '@/lib/actions/GetData'
import React from 'react'
import OpportunityCard from './OpportunityCard'
import EmptyOpportunityCard from './EmptyOpportunityCard'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

const page = async() => {
    const session = await auth.api.getSession({
    headers: await headers(),
  });
    
    const getOpportunitites = await getMyOpportunities(session?.user?.id)  
  
  return (
    <div className='space-y-3'>
      {
        getOpportunitites.length === 0 ? <EmptyOpportunityCard /> :
        getOpportunitites.map(opportunity=><OpportunityCard key={opportunity._id} opportunity={opportunity} />)
      }
      
    </div>
  )
}

export default page
