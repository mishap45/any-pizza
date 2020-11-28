import { pizza } from '../Types/types'

export type brandPizzaTypes = {
    Pizza: Array<pizza>
}

const brandPizza: brandPizzaTypes = {
    Pizza: [
        {
            id: 6,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza/havai_new.jpg',
            namePizza: 'Гавайська',
            descPizza: 'томатна основа, курка, кукурудза, ананас',
            smallSize: true,
            mediumSize: true,
            bigSize: true,
            price: 81
        },

        {
            id: 7,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza%20firmova/9499.jpg',
            namePizza: 'Форічеллі',
            descPizza: 'томатна основа, шинка, свіжі шампіньйони, болгарський перець, кукурудза, помідори, маслини',
            smallSize: true,
            mediumSize: true,
            bigSize: true,
            price: 76
        },

        {
            id: 8,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza%20firmova/9473.jpg',
            namePizza: '4 сезони',
            descPizza: 'томатна основа, мисливська, фолічелі, салямі, болоньєзе',
            smallSize: true,
            mediumSize: true,
            bigSize: true,
            price: 81
        },

        {
            id: 9,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza%20firmova/9462.jpg',
            namePizza: 'Салямі томатна',
            descPizza: 'томатна основа, салямі, помідори, маслини',
            smallSize: true,
            mediumSize: true,
            bigSize: true,
            price: 76
        },

        {
            id: 10,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza%20firmova/9454.jpg',
            namePizza: 'Маргарита',
            descPizza: 'томатна основа, подвійний сир, подвійні помідори, зелень',
            smallSize: false,
            mediumSize: true,
            bigSize: false,
            price: 74
        },

        {
            id: 11,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza%20firmova/9509.jpg',
            namePizza: 'Салямі вершкова',
            descPizza: 'вершкова основа, салямі, помідори, маслини',
            smallSize: true,
            mediumSize: true,
            bigSize: false,
            price: 76
        }
    ]
};

export default brandPizza