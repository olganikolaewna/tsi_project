import React, { PureComponent, ReactNode } from 'react'
import Button from '../Components/Button'
import Input from '../Components/Input'
import Text  from '../Components/Text'
interface Props {}
interface State {
    inputValue: string;
}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            inputValue: '',
        }
    }
    handleButtonClick = (buttonName: string) => {
        console.log(`${buttonName} button clicked`);
    };
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: event.target.value }); // Обновляем состояние при изменении значения
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        console.log('Отправлено значение:', this.state.inputValue);
        // Здесь вы можете добавить обработку отправленного значения
    };

    render(): ReactNode {
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
             <p className="text-black mb-6"></p>
            <form onSubmit={this.handleSubmit} className="flex flex-col items-center mb-4">
                                <Input
                                    value={this.state.inputValue}
                                    onChange={this.handleInputChange}
                                    placeholder="Введите текст"
                                    className="mb-4" // Отступ снизу
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
            </>
        )
    }
}

export default Home
