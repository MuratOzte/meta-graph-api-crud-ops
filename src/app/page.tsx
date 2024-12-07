'use client';
import { getPosts } from '@/utils/metaCrud';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    const [inputValue, setInputValue] = useState('');

    const getPostsHandler = async () => {
        getPosts();
    };

    const createPostHandler = async () => {
        const response = await fetch('/api/create-post', {
            method: 'POST',
            body: JSON.stringify({
                message: inputValue,
            }),
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <button onClick={getPostsHandler}>GET-POSTS</button>
            <input
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <button onClick={createPostHandler}>CREATE-POST</button>
        </div>
    );
}
