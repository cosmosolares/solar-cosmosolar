import { NextResponse } from 'next/server';

export async function POST(request) {
  // In a real implementation, you'd process the email here.
  // For now, just simulate a successful subscription.
  try {
    const { email } = await request.json();
    // You could add validation here.
    return NextResponse.json({ message: 'Successfully subscribed', email }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function OPTIONS() {
  // Allow CORS preflight if needed
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
