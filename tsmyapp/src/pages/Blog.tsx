import React, { PureComponent, ReactNode } from 'react';

interface Props {}
interface State {
    posts: Array<{
        id: number;
        title: string;
        content: string;
    }>;
    loading: boolean;
    error: string | null;
}

class Blog extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            posts: [],
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000'); // Укажите ваш API
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            const data = await response.json();
            this.setState({ posts: data, loading: false });
        } catch (error: unknown) {
            if (error instanceof Error) {
                this.setState({ error: error.message, loading: false });
            } else {
                this.setState({ error: 'Неизвестная ошибка', loading: false });
            }
        }
    };

    render(): ReactNode {
        const { posts, loading, error } = this.state;

        if (loading) {
            return <div style={{ backgroundColor: 'red', padding: '20px' }}>Загрузка...</div>;
        }

        if (error) {
            return <div style={{ backgroundColor: 'red', padding: '20px' }}>Ошибка: {error}</div>;
        }

        return (
            <div style={{ backgroundColor: 'pink', padding: '20px' }}>
                <h1>Блог</h1>
                {posts.map(post => (
                    <div key={post.id} style={{ marginBottom: '20px' }}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Blog;
