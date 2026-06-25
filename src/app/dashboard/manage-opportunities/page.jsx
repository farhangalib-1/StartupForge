import { getOpportunities } from '@/lib/actions/GetData'
import React from 'react'
import OpportunityCard from './OpportunityCard'
import EmptyOpportunityCard from './EmptyOpportunityCard'

const page = async() => {
    const result = await getOpportunities()
    console.log(result)
  return (
    <div className='space-y-3'>
      {
        result.length === 0 ? <EmptyOpportunityCard /> :
        result.map(opportunity=><OpportunityCard key={opportunity._id} opportunity={opportunity} />)
      }
      
    </div>
  )
}

export default page
