'use client';
import { getPosts } from '@/utils/metaCrud';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Posts from '@/components/Posts';
import Loading from '@/components/Loading';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const getPostsHandler = async () => {
        const p = await getPosts();
        console.log(p, 'p');
        setPosts(p.data);
    };

    const createPostHandler = async () => {
        setIsLoading(true);
        const response = await fetch('/api/create-post', {
            method: 'POST',
            body: JSON.stringify({
                message: inputValue,
            }),
        });

        const data = await response.json();
        console.log(data);
        getPostsHandler();
        setIsLoading(false);
    };

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <div className='mt-4' >
            {isLoading && <Loading />}
            <button onClick={getPostsHandler}>GET-POSTS</button>
            <input
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <button onClick={createPostHandler}>CREATE-POST</button>
            <div className="flex flex-col gap-5 mt-4">
                {posts.length > 0 &&
                    posts.map((post: any) => {
                        return (
                            <Posts
                                getPostsHandler={getPostsHandler}
                                setIsLoading={setIsLoading}
                                key={post.id}
                                id={post.id}
                                createdAt={post.created_time}
                                message={post.message}
                            />
                        );
                    })}
            </div>
        </div>
    );
}
