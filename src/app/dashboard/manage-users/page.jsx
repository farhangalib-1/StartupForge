import React from 'react'
import ManageUsersTable from './ManageUsersTable'
import { getUsers } from '@/lib/actions/GetData'

const page = async() => {
  const userData = await getUsers()
  return (
    <div>
      
       <ManageUsersTable users={userData} />
      
    </div>
  )
}

export default page
