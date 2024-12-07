import { useState } from 'react';

interface PostsProps {
    id: String;
    message: String;
    createdAt: String;
    getPostsHandler: () => void;
    setIsLoading: (value: boolean) => void;
}

const Posts: React.FC<PostsProps> = ({
    id,
    message,
    createdAt,
    getPostsHandler,
    setIsLoading,
}) => {
    const deletePostHandler = async () => {
        setIsLoading(true);
        const response = await fetch('/api/delete-post', {
            method: 'DELETE',
            body: JSON.stringify({
                postId: id,
            }),
        });

        const data = await response.json();
        console.log(data);
        getPostsHandler();
        setIsLoading(false);
    };

    return (
        <div className="bg-slate-300 text-slate-800 w-fit p-4 rounded-md relative">
            <p>
                <strong>id: </strong>
                {id}
            </p>
            <p>
                <strong>created at: </strong>
                {createdAt}
            </p>
            <p>
                <strong>message: </strong>
                {message}
            </p>
            <button
                onClick={deletePostHandler}
                className="right-2 absolute bottom-2 bg-red-500 p-2 py-[2px]"
            >
                X
            </button>
        </div>
    );
};

export default Posts;
