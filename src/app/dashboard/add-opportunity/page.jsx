import React from 'react'
import OpportunityForm from './OpportunityForm'
import { getOpportunities, getStartUpData } from '@/lib/actions/GetData'
import NoStartupFound from './NoStartupFound'

const page = async() => {
    const result = await getOpportunities()
    const startUpData = await getStartUpData()
  return (
    <div>
      {
        startUpData.length > 0 ? <OpportunityForm result={result} /> : <NoStartupFound />
      }
      
    </div>
  )
}

export default page
