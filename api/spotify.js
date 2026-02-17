export default async function handler(req, res) {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  // Get fresh access token
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  const tokenData = await tokenRes.json();
  const access_token = tokenData.access_token;

  // Get the most recently played track
  const recentRes = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  const recentData = await recentRes.json();
  const track = recentData.items?.[0]?.track;
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json({
    name: track?.name,
    artist: track?.artists?.map(a => a.name).join(", "),
    albumImage: track?.album?.images?.[0]?.url,
    songUrl: track?.external_urls?.spotify,
  });
}
