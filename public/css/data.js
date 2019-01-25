

const listBooks = `{
    "data": [
        {
            "id": 1,
            "name": "To Kill a Mockingbird",
            "author": "Harper Lee"
        },
        {
            "id": 2,
            "name": "Pride and Prejudice",
            "author": "Jane Austen"
        },
        {
            "id": 3,
            "name": "The Diary of Anne Frank",
            "author": "Anne Frank"
        },
        {
            "id": 4,
            "name": "1984",
            "author": "George Orwell"
        },
        {
            "id": 5,
            "name": "Harry Potter and the Sorcerer's Stone",
            "author": "J.K. Rowling"
        },
        {
            "id": 6,
            "name": "The Great Gatsby",
            "author": "F. Scott Fitzgerald"
        },
        {
            "id": 7,
            "name": "Charlotte's Web",
            "author": "E.B. White"
        }
    ],
    "meta": {
        "books": 7,
        "page": 1,
        "prev": null,
        "next": 2
    }
}`


const item = `{
    "data": [
        {
            "id": 1,
            "name": "To Kill a Mockingbird",
            "author": "Harper Lee"
        }
    ],
    "meta": {
        "books": 1
    }
}`


const products = `{
    "data": [
        {
            "id": 1,
            "name": "Crocs Men's and Women's Classic Clog 
            |Comfort Slip On Casual Water Shoe | Lightweight",
            "owner": "Crocs"
        },
        {
            "id": 2,
            "name": "Brooks Men's Cascadia 12",
            "owner": "Brooks"
        },
        {
            "id": 3,
            "name": "Nike Men's Benassi Just Do It Athletic Sandal",
            "owner": "Nike"
        },
        {
            "id": 4,
            "name": "Skechers Men's Equalizer Persistent Slip-On Sneaker",
            "owner": "Sketcher"
        },
        {
            "id": 5,
            "name": "Nike Women's Free RN 2017 Running Shoe",
            "owner": "Nike"
        },
        {
            "id": 6,
            "name": "Columbia Men's Silver Ridge Convertible Pant",
            "owner": "Columbia"
        }
    ],
    "meta": {
        "products": 6,
        "page": 2,
        "prev": 1,
        "next": 3
    }
}`


const product = `{
    "data": [
        {
            "id": 1,
            "name": "Crocs Men's and Women's Classic Clog 
            |Comfort Slip On Casual Water Shoe | Lightweight",
            "owner": "Crocs"
        }
    ],
    "meta": {
        "products": 1
    }
}`

module.exports = {
    listBooks,
    item,
    products,
    product
}