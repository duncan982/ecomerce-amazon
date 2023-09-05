
import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: "Mz1",
      email: "mz1@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true
    },
     {
      name: "Mz2",
      email: "mz2@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false
    },
  ],
  products: [
    {
      name: "Free shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Fit shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      price: 80,
      brand: "Adidas",
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Slim shirt",
      slug: "slim-shirt",
      category: "Shirts",
      image: "/images/shirt3.jpg",
      price: 90,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Golf pants",
      slug: "golf-pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 90,
      brand: "Oliver",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      name: "Fit pants",
      slug: "fit-pants",
      category: "Pants",
      image: "/images/pants2.jpg",
      price: 80,
      brand: "Zara",
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Best pants",
      slug: "best-pants",
      category: "Pants",
      image: "/images/pants3.jpg",
      price: 100,
      brand: "Zapra",
      rating: 3,
      numReviews: 70,
      countInStock: 20,
      description: "A popular pants",
    },
  ],
};

export default data;
