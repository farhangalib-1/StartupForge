import React from 'react'
import CreateStartupForm from './CreateStartupForm'
import { getOwnStartUpData} from '@/lib/actions/GetData'
import StartupCard from './StartupCard'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

const page = async() => {
  const session = await auth.api.getSession({
  headers: await headers(),
});

  const result = await getOwnStartUpData(session?.user?.id)
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
