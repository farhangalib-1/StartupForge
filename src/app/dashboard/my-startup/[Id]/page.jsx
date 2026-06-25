import React from 'react'
import Editform from './Editform'
import { getStartup } from '@/lib/actions/GetData';

const page = async({params}) => {
    const {Id} = await params
   const startup = await getStartup(Id);
   console.log(startup)
  return (
    <div>
      <Editform startup={startup} />
    </div>
  )
}

export default page
