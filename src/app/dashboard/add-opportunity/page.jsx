import React from 'react'
import OpportunityForm from './OpportunityForm'
import { getOpportunities } from '@/lib/actions/GetData'

const page = async() => {
    const result = await getOpportunities()
  return (
    <div>
      <OpportunityForm result={result} />
    </div>
  )
}

export default page
