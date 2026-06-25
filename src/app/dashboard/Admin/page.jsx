import React from 'react'
import Overview from './Overview'
import { getOpportunities, getStartUpData, getUsers, paymentData} from '@/lib/actions/GetData'

const page = async() => {
    const usersData = await getUsers()
    const startUpData = await getStartUpData()
    const opportunitiesData = await getOpportunities()
    const totalUsers = usersData.length
    const totalStartups = startUpData.length
    const totalOpportunities = opportunitiesData.length
    const payment = await paymentData()
    const totalRevenue = payment.length
    
  return (
    <div>
      <Overview totalUsers={totalUsers} totalStartups={totalStartups} totalOpportunities={totalOpportunities} totalRevenue={totalRevenue} />
    </div>
  )
}

export default page
