import { pizza } from '../Types/types'

export type pizzaOnWoodTypes = {
    Pizza: Array<pizza>
}

const pizzaOnWood: pizzaOnWoodTypes = {
    Pizza: [
        {
            id: 1,
            imgPizza: 'https://tiptop-pizza.com.ua/image/cache/catalog/pizza/test1-800x800.jpg',
            namePizza: 'Бармаліні',
            descPizza: 'томатна основа, шинка, бекон, мисливські ковбаски, прошутто, помідори',
            smallSize: false,
            mediumSize: true,
            bigSize: false,
            price: 105
        },

        {
            id: 2,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza/9439.jpg',
            namePizza: 'Кампанья',
            descPizza: 'томатна основа, салямі, шинка, помідори, мариновані шампіньйони',
            smallSize: false,
            mediumSize: true,
            bigSize: true,
            price: 86
        },

        {
            id: 3,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza/9430.jpg',
            namePizza: 'Бранді гостра',
            descPizza: 'томатна основа, бекон, мисливські ковбаски, кукурудза, перець чилі, зелень',
            smallSize: false,
            mediumSize: true,
            bigSize: true,
            price: 86
        },

        {
            id: 4,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza/9491.jpg',
            namePizza: 'Капрічоза',
            descPizza: 'томатна основа, шинка, помідори, свіжі шампіньйони, оливки',
            smallSize: true,
            mediumSize: true,
            bigSize: true,
            price: 86
        },

        {
            id: 5,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza/9434.jpg',
            namePizza: 'Вегетеріана',
            descPizza: 'томатна основа, броколі, помідори, кукурудза, перець болгарський, свіжі шампіньйони, оливки',
            smallSize: false,
            mediumSize: true,
            bigSize: false,
            price: 91
        },

        {
            id: 555,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza/9447.jpg',
            namePizza: 'Фелічіта',
            descPizza: 'томатна основа, шинка, кукурудза, цибуля, орегано, зелень',
            smallSize: false,
            mediumSize: true,
            bigSize: true,
            price: 76
        }
    ]
};

export default pizzaOnWood