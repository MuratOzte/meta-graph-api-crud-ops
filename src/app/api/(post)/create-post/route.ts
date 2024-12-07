import { NextRequest, NextResponse } from 'next/server';

//! create post
//https://graph.facebook.com/494631267069316/feed?message=Deneme&access_token=EAARbR1yiu8gBO41Vodfhf5CSPrF42ymxljDNMy7rMUGtkNNVkZCsoEFsQq8URhNSaZCU7ZADIVvrS4LOv2KjOkMDzO7K5ipb2eAObUusDMYm3yiGncWvNaxGXewz0U9F99W3AEC28rfxgRHnev9KrJIuDDzB4bwpyTUlBjyYARMlt97qIwp9sgaXDzFi8EFvjDa3bYG6ZBYdPHUfGh3F3yMJ

//! get post
//https://graph.facebook.com/v21.0/494631267069316/published_posts?access_token=EAARbR1yiu8gBOZBWM8qURFVo9pLy57PZANTzn77pONzJcinZBBOIqnxjnq5y4bWRRkmdbKn2p8nXx028fN9FOunGAeNUi86UUP0EmmNOEknYum6ZBz9CR7NCsHlbB7s8WbFy1davcttNntucGTFsqWhkCG23xt4VKLderMN3ZBGgBX6j8fRgnIuhFVQUgAjnGYFKKKcL4XVXNft56ZAhkCn0Qg

//! delete post
//https://graph.facebook.com/v21.0/494631267069316_122093203064680598/?access_token=EAARbR1yiu8gBO41Vodfhf5CSPrF42ymxljDNMy7rMUGtkNNVkZCsoEFsQq8URhNSaZCU7ZADIVvrS4LOv2KjOkMDzO7K5ipb2eAObUusDMYm3yiGncWvNaxGXewz0U9F99W3AEC28rfxgRHnev9KrJIuDDzB4bwpyTUlBjyYARMlt97qIwp9sgaXDzFi8EFvjDa3bYG6ZBYdPHUfGh3F3yMJ

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
