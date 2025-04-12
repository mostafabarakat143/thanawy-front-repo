import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    let subjectId = searchParams.get('subjectId');

    if (!subjectId) {
      console.error("Error: No subjectId provided");
      return NextResponse.json({ error: 'Subject ID is required' }, { status: 400 });
    }

    subjectId = String(subjectId); // Ensure it's a string
    const response = await fetch(`https://backend.thanawy.com/units?subjectId=${subjectId}`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });

    console.log("Response status from backend:", response.status);

    if (!response.ok) {
      return NextResponse.json([], { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Units proxy error:', error);
    return NextResponse.json([], { status: 500 });
  }
}
