export async function getPosts() {
    const response = await fetch('/api/get-post', {
        method: 'GET',
    });

    const data = await response.json();
    console.log(data);
    return data;
}

export async function createPost(post: string) {
    const response = await fetch('/api/create-post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    const data = await response.json();
    console.log(data);
}

export async function deletePost(id: string) {
    const response = await fetch('/api/delete-post', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
    });

    const data = await response.json();
    console.log(data);
}
