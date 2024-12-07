import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest, res: NextResponse) {
    const { postId } = await req.json();
    const accessToken = process.env.META_ACCESS_TOKEN;
    const pageId = process.env.PAGE_ID;

    console.log(accessToken, pageId);

    const url = `https://graph.facebook.com/v21.0/${postId}/?access_token=${accessToken}
`;

    const response = await fetch(url, {
        method: 'DELETE',
    });

    const data = await response.json();

    return NextResponse.json(data);
}
