import React from 'react';
import Button from './Button';
import Input from './Input';

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (product: { title: string; description: string; price: string }) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, description, price });
        setTitle('');
        setDescription('');
        setPrice('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Добавить товар</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Название"
                        className="mb-4"
                        
                    />
                    <Input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Описание"
                        className="mb-4"
                       
                    />
                    <Input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Цена"
                        type="number"
                        className="mb-4"
                       
                    />
                    <div className="flex justify-end gap-2">
                        <Button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400">
                            Отмена
                        </Button>
                        <Button type="submit" onClick={() => {}}>
                            Добавить
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;