const URL = process.env.NEXT_PUBLIC_SERVER_URL
console.log(URL)
export async function createStartup(startupData) {
    const response = await fetch(`${URL}/api/startups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(startupData),
  });

  if (!response.ok) {
    throw new Error("Failed to create startup");
  }

  return response.json();
}