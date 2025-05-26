export async function GET() {
  try {
    const response = await fetch(
      'https://us-central1-YOUR_FIREBASE_PROJECT_ID.cloudfunctions.net/api/health'
    );
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}