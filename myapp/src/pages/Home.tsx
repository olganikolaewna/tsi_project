import React, { PureComponent, ReactNode } from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Text from '../Components/Text';
import ProductModal from '../Components/ProductModal';
import ProductCard from '../Components/ProductCard';

interface Props {}
interface State {
    inputValue: string;
    products: Array<{
        title: string;
        description: string;
        price: string;
    }>;
    isModalOpen: boolean;
}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            inputValue: '',
            products: [
                {
                    title: "Пример товара",
                    description: "Это пример описания товара",
                    price: "5000"
                }
            ],
            isModalOpen: false,
        };
    }

    handleButtonClick = (buttonName: string) => {
        console.log(`${buttonName} button clicked`);
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: event.target.value });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Отправлено значение:', this.state.inputValue);
    };

    toggleModal = () => {
        this.setState(prev => ({ isModalOpen: !prev.isModalOpen }));
    };

    handleAddProduct = (product: { title: string; description: string; price: string }) => {
        this.setState(prev => ({
            products: [...prev.products, product],
        }));
    };

    render(): ReactNode {
        const { products, isModalOpen } = this.state;

        return (
            <>
                <main className="flex-grow flex flex-col items-center justify-center px-8 py-12">
                    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
                        <img src="/home1.jpg" alt="cosmetics" className="w-full md:w-1/2 rounded-lg shadow-md"/>
                        <div className="md:w-1/2 bg-pink-100 p-6 rounded-xl shadow">
                            <h2 className="text-4xl font-bold text-black mb-4">skin care</h2>
                            <Text className="text-black mb-6">
                                Ваш персональный гид по выбору уходовой косметики! <br />
                                Здесь вы можете найти подходящий уход для вашей кожи, также
                                узнать, какие бренды сейчас в тренде, и почитать советы от
                                косметологов!
                            </Text>
                            
                            <Button onClick={this.toggleModal} className="mb-6">
                                Добавить товар
                            </Button>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                {products.map((product, index) => (
                                    <ProductCard
                                        key={index}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                    />
                                ))}
                            </div>

                            <form onSubmit={this.handleSubmit} className="flex flex-col items-center mb-4">
                                <Input
                                    value={this.state.inputValue}
                                    onChange={this.handleInputChange}
                                    placeholder="Введите текст"
                                    className="mb-4"
                                />
                                <Button onClick={() => this.handleButtonClick('отправить')}>Отправить</Button>
                            </form>
                            <div className="flex-grow flex items-center justify-center gap-4">
                                <Button onClick={() => this.handleButtonClick('подобрать уход')}>
                                    подобрать уход
                                </Button>
                                <Button onClick={() => this.handleButtonClick('в тренде')}>
                                    в тренде
                                </Button>
                                <Button onClick={() => this.handleButtonClick('советы')}>
                                    советы
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>

                <ProductModal
                    isOpen={isModalOpen}
                    onClose={this.toggleModal}
                    onSubmit={this.handleAddProduct}
                />
            </>
        );
    }
}

export default Home;