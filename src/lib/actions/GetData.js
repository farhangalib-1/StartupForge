const URL = process.env.NEXT_PUBLIC_SERVER_URL

export async function getStartUpData(){
    const res = await fetch(`${URL}/api/my-startups`)
    return res.json()
}

export async function getOpportunities() {
       const res = await fetch(`${URL}/api/opportunities`)
        return res.json()
    
}