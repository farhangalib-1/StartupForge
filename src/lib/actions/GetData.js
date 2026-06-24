const URL = process.env.NEXT_PUBLIC_SERVER_URL
export async function getStartUpData(){
    const res = await fetch(`${URL}/api/my-startups`)
    const data = await res.json()
    return data
}