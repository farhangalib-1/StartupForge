export async function opportunities(data) {
     const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/opportunities`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();
  return result
}