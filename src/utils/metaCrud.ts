export async function getPosts() {
    const response = await fetch('/api/get-post', {
        method: 'GET',
    });

    const data = await response.json();
    console.log(data);
}
