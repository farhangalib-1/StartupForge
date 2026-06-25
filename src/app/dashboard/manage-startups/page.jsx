import React from 'react'
import ManageStartupsTable from './ManageStartupsTable'
import { getStartUpData } from '@/lib/actions/GetData'

const page = async() => {
    const startUpData = await getStartUpData()
  return (
    <div>
      <ManageStartupsTable startups={startUpData} />
    </div>
  )
}

export default page
