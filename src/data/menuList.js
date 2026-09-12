import margheritaPizza from "./../assets/pizza-images/margherita-pizza.jpg"
import pepperoniPizza from "./../assets/pizza-images/pepperoni-pizza.jpg"
import fourCheesePizza from "./../assets/pizza-images/four-cheese-pizza.jpg"
import bbqChickenPizza from "./../assets/pizza-images/bbq-chicken-pizza.jpg"
import supremePizza from "./../assets/pizza-images/supreme-pizza.jpg"
import chickenAlfredoPizza from "./../assets/pizza-images/chicken-alfredo-pizza.jpg"
import mediterraneanPizza from "./../assets/pizza-images/mediterranean-pizza.jpg"
import neapolitanPizza from "./../assets/pizza-images/neapolitan-pizza.jpg"
import sicilianPizza from "./../assets/pizza-images/sicilian-pizza.jpg"
import mushroomPizza from "./../assets/pizza-images/mushroom-pizza.jpg"
import veggiePizza from "./../assets/pizza-images/veggie-pizza.jpg"
import newYorkStylePizza from "./../assets/pizza-images/new-york-style-pizza.jpg"

export const menuList = [
    {
        name: "Margherita Pizza",
        image: margheritaPizza,
        price: 249,
        category: ["veg", "popular"]
    },
    {
        name: "Pepperoni Pizza",
        image: pepperoniPizza,
        price: 349,
        category: ["nonveg", "popular"]
    },
    {
        name: "Mediterranean Pizza",
        image: mediterraneanPizza,
        price: 299,
        category: ["veg", "specialty", "popular"]
    },
    {
        name: "New York Style Pizza",
        image: newYorkStylePizza,
        price: 349,
        category: ["specialty", "popular"]
    },
    {
        name: "Four Cheese Pizza",
        image: fourCheesePizza,
        price: 399,
        category: ["veg", "cheese", "popular"]
    },
    {
        name: "BBQ Chicken Pizza",
        image: bbqChickenPizza,
        price: 429,
        category: ["nonveg", "popular"]
    },
    {
        name: "Supreme Pizza",
        image: supremePizza,
        price: 350,
        category: ["nonveg"]
    },
    {
        name: "Chicken Alfredo Pizza",
        image: chickenAlfredoPizza,
        price: 399,
        category: ["nonveg"]
    },
    {
        name: "Neapolitan Pizza",
        image: neapolitanPizza,
        price: 350,
        category: ["veg", "specialty"]
    },
    {
        name: "Sicilian Pizza",
        image: sicilianPizza,
        price: 299,
        category: ["veg", "specialty"]
    },
    {
        name: "Mushroom Pizza",
        image: mushroomPizza,
        price: 399,
        category: ["veg"]
    },
    {
        name: "Veggie Pizza",
        image: veggiePizza,
        price: 399,
        category: ["veg"]
    },
]