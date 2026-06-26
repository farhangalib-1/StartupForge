import React from 'react'
import TransactionHistoryTable from './TransactionHistoryTable'
import { paymentData } from '@/lib/actions/GetData'
import NoPurchase from './NoPurchase'

const page = async() => {
    const paymentHistory = await paymentData()
  return (
    <div>
        {
            paymentHistory.length === 0 ? <NoPurchase /> :  <TransactionHistoryTable payments={paymentHistory} />
        }
    
     
    </div>
  )
}

export default page
