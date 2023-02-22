export default async function handler(req, res) {
  const { token } = req.query;
  try {
    const query = `
    query {
      Viewer {
        id
      }
    }`;
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        // variables,
      })
    })
    const data = await response.json()
    res.status(200).json(data)
  } catch {
    res.status(500);
    console.log('error')
  }
}