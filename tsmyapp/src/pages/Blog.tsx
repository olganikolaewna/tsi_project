
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    const [data, setData] = useState<{ message: string; title: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/data");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <>
        <Helmet>
            <title>Blog</title>
            <meta name = "description" content = "Страница блога"></meta>
            <meta name = "keywords" content = "блог, описание"></meta>
        </Helmet>
        <div style={{ backgroundColor: 'pink', padding: '30px' }}>
            <h1>{data?.title}</h1>
            <p>{data?.message}</p>
        </div>
        </>
    );
};

export default Blog;
