import { NextRequest, NextResponse } from 'next/server';

//https://graph.facebook.com/v21.0/494631267069316_122093203064680598/?access_token=EAARbR1yiu8gBO41Vodfhf5CSPrF42ymxljDNMy7rMUGtkNNVkZCsoEFsQq8URhNSaZCU7ZADIVvrS4LOv2KjOkMDzO7K5ipb2eAObUusDMYm3yiGncWvNaxGXewz0U9F99W3AEC28rfxgRHnev9KrJIuDDzB4bwpyTUlBjyYARMlt97qIwp9sgaXDzFi8EFvjDa3bYG6ZBYdPHUfGh3F3yMJ

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
