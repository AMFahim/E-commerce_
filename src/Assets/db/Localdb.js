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

export const Products = [
    {
        id: 1,
        name: "chokbar1",
        price: 120,
        stock: "In stock"
    },
    {
        id: 2,
        name: "chokbar2",
        price: 120,
        stock: "In stock"
    },
    {
        id: 3,
        name: "chokbar3",
        price: 120,
        stock: "In stock"
    },
    {
        id: 4,
        name: "chokbar4",
        price: 120,
        stock: "In stock"
    },
    {
        id: 5,
        name: "chokbar5",
        price: 120,
        stock: "In stock"
    },
]