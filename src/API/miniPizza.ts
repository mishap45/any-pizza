import { pizza } from '../Types/types'

export type miniPizzaTypes = {
    Pizza: Array<pizza>
}

const miniPizza: miniPizzaTypes = {
    Pizza: [
        {
            id: 12,
            imgPizza: 'https://tiptop-pizza.com.ua/image/catalog/pizza/9625.jpg',
            namePizza: 'Міні піца з куркою',
            descPizza: 'томатна основа, курка, кукурудза',
            smallSize: true,
            mediumSize: false,
            bigSize: false,
            price: 26
        },

        {
            id: 13,
            imgPizza: 'https://tiptop-pizza.com.ua/image/cache/catalog/pizza/9628-800x800.jpg',
            namePizza: 'Міні піца з ковбасою',
            descPizza: 'томатна основа, салямі, помідори',
            smallSize: true,
            mediumSize: false,
            bigSize: false,
            price: 26
        },

        {
            id: 14,
            imgPizza: 'https://www.korzyna.com/img/300/300/resize/d/s/dscf5543.jpg',
            namePizza: 'Піца з шинкою',
            descPizza: 'моцарелла, твердий сир, шинка, помідори (томати), домашній соус',
            smallSize: true,
            mediumSize: false,
            bigSize: false,
            price: 48
        },

        {
            id: 15,
            imgPizza: 'https://quickly-food.com.ua/image/cache/catalog/pizza/milano-500x500.png',
            namePizza: 'Мілано',
            descPizza: 'Філе курки, мисливські ковбаски, салямі, помідор, печериці, оливки, маслини, зелень, перець болгарський, моцарела, соус',
            smallSize: true,
            mediumSize: false,
            bigSize: false,
            price: 74
        }
    ]
};

export default miniPizza