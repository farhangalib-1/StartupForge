
const URL = process.env.NEXT_PUBLIC_SERVER_URL

export async function getStartUpData(){
    const res = await fetch(`${URL}/api/my-startups`, {
    cache: "no-store",
  })
    return res.json()
}

export async function getOpportunities() {
       const res = await fetch(`${URL}/api/opportunities`, {
    cache: "no-store",
  })
        return res.json()
    
}

export async function getOpportunity(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/opportunities/${id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}
export async function getStartup(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/my-startups/${id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function updateStartup(id, data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/my-startups/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return res.json();
}

export async function deleteStartup(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/my-startups/${id}`, {
    method: "DELETE",
  });

  return res.json();
}

export async function updateOpportunity(id, data) {
  const res = await fetch(
   `${process.env.NEXT_PUBLIC_SERVER_URL}/api/opportunities/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return res.json();
}
export async function deleteOpportunity(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/opportunities/${id}`, {
    method: "DELETE",
  });

  return res.json();
}

export async function getUsers(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users`)
  const data = await res.json();
  return data 
}

export async function paymentData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/payment`)
  const data = await res.json();
  return data
} 


export async function approveStartup(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/startups/${id}`,
    {
      method: "PATCH",
    }
  );

  return res.json();
}



export async function updateProfile(userId, data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${userId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return res.json();
}


export async function getOwnStartUpData(userId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/ownstartups/${userId}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}


export async function getFeaturedStartups() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/featured-startups`, {
    cache: "no-store",
  });

  return res.json();
}