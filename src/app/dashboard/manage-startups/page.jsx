import React from 'react'
import ManageStartupsTable from './ManageStartupsTable'
import { getStartUpData } from '@/lib/actions/GetData'
import NoStartupsAdmin from './NoStartupsAdmin'

const page = async() => {
    const startUpData = await getStartUpData()
  return (
    <div>
        {
            startUpData.length === 0 ? <NoStartupsAdmin /> : <ManageStartupsTable startups={startUpData} /> 
        }
      
    </div>
  )
}

export default page
