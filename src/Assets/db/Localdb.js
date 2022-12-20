import { AiOutlineHome } from 'react-icons/ai';
import { BsBagCheck, BsLayers, BsPeople } from 'react-icons/bs';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';


export const Navigation = [
    {
        name: "Home",
        href: "/",
        current: false,
        icon: <AiOutlineHome/>
    },
    {
        name: "Orders",
        href: "/orders",
        current: false,
        icon: <BsBagCheck/>
    },
    {
        name: "Products",
        href: "/products",
        current: false,
        icon: <MdOutlineProductionQuantityLimits/>
    },
    {
        name: "Manages",
        href: "/manages",
        current: false,
        icon: <BsLayers/>
    },
    {
        name: "Accounts",
        href: "/accounts",
        current: false,
        icon: <BsPeople/>
    }
]




//Products local db

export const Products = [
    {
        id: 1,
        name: "chokbar1",
        price: 120,
        stock: "In stock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s"
    },
    {
        id: 2,
        name: "chokbar2",
        price: 120,
        stock: "In stock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s"
    },
    {
        id: 3,
        name: "chokbar3",
        price: 120,
        stock: "In stock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s"
    },
    {
        id: 4,
        name: "chokbar4",
        price: 120,
        stock: "In stock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s"
    },
    {
        id: 5,
        name: "chokbar5",
        price: 120,
        stock: "In stock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s"
    },
    {
        id: 6,
        name: "chokbar6",
        price: 120,
        stock: "In stock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s"
    },
    {
        id: 7,
        name: "chokbar6",
        price: 120,
        stock: "In stock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s"
    }
]