export interface MenuItem {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
}

export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: 'Маргарита',
        category: 'Пицца',
        price: 500,
        description: 'Классическая пицца с томатным соусом и сыром моцарелла',

    },
    {
        id: 2,
        name: 'Пепперони',
        category: 'Пицца',
        price: 650,
        description: 'Пикантная пицца с колбасой пепперони и сыром',

    },
    {
        id: 3,
        name: 'Кока-Кола',
        category: 'Напитки',
        price: 150,
        description: 'Освежающий напиток',

    },
    {
        id: 4,
        name: 'Чизкейк',
        category: 'Десерты',
        price: 250,
        description: 'Нежный чизкейк с ягодным соусом',

    },

    {
        id: 5,
        name: 'Гавайская',
        category: 'Пицца',
        price: 700,
        description: 'Пицца с ветчиной и ананасами',

    },
    {
        id: 6,
        name: 'Лимонад',
        category: 'Напитки',
        price: 180,
        description: 'Домашний лимонад с лимоном и мятой',

    },
    {
        id: 7,
        name: 'Тирамису',
        category: 'Десерты',
        price: 300,
        description: 'Итальянский десерт с кофе и маскарпоне',

    },
    {
        id: 8,
        name: 'Салат Цезарь',
        category: 'Салаты',
        price: 400,
        description: 'Салат с курицей, сухариками и соусом Цезарь',

    },
    {
        id: 9,
        name: 'Минеральная вода',
        category: 'Напитки',
        price: 100,
        description: 'Газированная минеральная вода',

    },
    {
        id: 10,
        name: 'Карбонара',
        category: 'Паста',
        price: 550,
        description: 'Паста с беконом и сливочным соусом',

    },
];