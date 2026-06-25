import { getOpportunities } from '@/lib/actions/GetData'
import React from 'react'
import OpportunityCard from './OpportunityCard'

const page = async() => {
    const result = await getOpportunities()
    console.log(result)
  return (
    <div className='space-y-3'>
      {
        result.map(opportunity=><OpportunityCard opportunity={opportunity} />)
      }
      
    </div>
  )
}

export default page
