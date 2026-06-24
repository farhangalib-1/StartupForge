import React from 'react'
import CreateStartupForm from './CreateStartupForm'
import { getStartUpData } from '@/lib/actions/GetData'
import StartupCard from './StartupCard'

const page = async() => {
  const result = await getStartUpData()
  const data = await result.json()
  console.log(data[0])
  return (
    <div>
      {
        data.length > 0 ? <div><StartupCard startup = {data[0]}  /></div> : <CreateStartupForm />
      }
        
    </div>
  )
}

export default page
