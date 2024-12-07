import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const accessToken = process.env.META_ACCESS_TOKEN;
    const pageId = process.env.PAGE_ID;

    console.log(accessToken, pageId);

    const url = `https://graph.facebook.com/v21.0/${pageId}/published_posts?access_token=${accessToken}`;

    const response = await fetch(url, {
        method: 'GET',
    });

    const data = await response.json();

    return NextResponse.json(data);
}