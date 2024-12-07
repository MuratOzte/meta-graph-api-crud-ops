import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    const { message } = await req.json();
    const accessToken = process.env.META_ACCESS_TOKEN;
    const pageId = process.env.PAGE_ID;

    console.log(message, accessToken, pageId);

    const url = `https://graph.facebook.com/${pageId}/feed?message=${message}&access_token=${accessToken}`;

    const response = await fetch(url, {
        method: 'POST',
    });

    const data = await response.json();

    return NextResponse.json(data);
}
