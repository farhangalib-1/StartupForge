import React from 'react'
import CreateStartupForm from './CreateStartupForm'
import { getStartUpData } from '@/lib/actions/GetData'
import StartupCard from './StartupCard'

const page = async() => {
  const result = await getStartUpData()
  console.log(result)
  return (
    <div>
      {
        result.length > 0 ? <StartupCard startup={result[0]} /> : <CreateStartupForm />
      }
        
    </div>
  )
}

export default page
