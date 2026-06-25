import React from 'react'
import EditingOpportunity from './EditingOpportunity'
import { getOpportunity } from '@/lib/actions/GetData';

const page = async({params}) => {
    const {Id} = await params
    const opportunity = await getOpportunity(Id);
  return (
    <div>
      <EditingOpportunity opportunity={opportunity} />
    </div>
  )
}

export default page
