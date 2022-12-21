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


// Dropdown 

export const DropdownOption = [
    {
        id:1,
        name: "Today"
    },
    {
        id:2,
        name: "Last Week"
    },
    {
        id:3,
        name: "Last Month"
    },
    {
        id:4,
        name: "Last Year"
    },
]

// Overview Cards 

export const OverviewCards = [
    {
        id: 1,
        category: "Orders",
        value: 33
    },
    {
        id: 2,
        category: "Total Sales",
        value: "$2,918"
    },
    {
        id: 3,
        category: "Store Views",
        value: 301
    },
    {
        id: 4,
        category: "Product Views",
        value: "19,121"
    }
]


export const OrderData = [
    {
        id: 1,
        orderId: 4325,
        name: "Ice Creame",
        price: 20,
        stock: "In-stock",
        status: "pending",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
        payment: "Paid",
        orderCreated: "Today"
    },
    {
        id: 2,
        orderId: 4326,
        name: "Ice Creame",
        price: 20,
        stock: "In-stock",
        status: "accepted",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
        payment: "COD",
        orderCreated: "Yesterday"
    },
    {
        id: 3,
        orderId: 4327,
        name: "Ice Creame",
        price: 20,
        stock: "In-stock",
        status: "shipped",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
        payment: "Paid",
        orderCreated: "Today"
    },
    {
        id: 4,
        orderId: 4328,
        name: "Ice Creame",
        price: 20,
        stock: "In-stock",
        status: "pending",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
        payment: "Paid",
        orderCreated: "Yesterday"
    },
    {
        id: 5,
        orderId: 4329,
        name: "Ice Creame",
        price: 20,
        stock: "In-stock",
        status: "accepted",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
        payment: "COD",
        orderCreated: "Today"
    },
    {
        id: 6,
        orderId: 4330,
        name: "Ice Creame",
        price: 20,
        stock: "In-stock",
        status: "shipped",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
        payment: "COD",
        orderCreated: "Today"
    },
    {
        id: 7,
        orderId: 4331,
        name: "Ice Creame",
        price: 20,
        stock: "In-stock",
        status: "pending",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
        payment: "COD",
        orderCreated: "Yesterday"
    },
    {
        id: 8,
        orderId: 4332,
        name: "Ice Creame",
        price: 20,
        stock: "In-stock",
        status: "accepted",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
        payment: "COD",
        orderCreated: "Today"
    }
]


// All Customer 


export const CustomerList = [
    {
        id: 1,
        name: "Jhone Doe",
        profilePic: "",
        orders: [
            {
                id: 79,
                orderId: 4331,
                name: "Ice Creame",
                price: 20,
                stock: "In-stock",
                status: "pending",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
                payment: "COD",
                orderCreated: "Yesterday"
            },
            {
                id: 80,
                orderId: 4332,
                name: "Ice Creame",
                price: 20,
                stock: "In-stock",
                status: "accepted",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
                payment: "COD",
                orderCreated: "Today"
            }
        ]
    },
    {
        id: 2,
        name: "Rafsan Doe",
        profilePic: "",
        orders: [
            {
                id: 81,
                orderId: 4333,
                name: "Ice Creame",
                price: 20,
                stock: "In-stock",
                status: "pending",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
                payment: "COD",
                orderCreated: "Yesterday"
            },
            {
                id: 82,
                orderId: 4334,
                name: "Ice Creame",
                price: 20,
                stock: "In-stock",
                status: "accepted",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
                payment: "COD",
                orderCreated: "Today"
            }
        ]
    },
    {
        id: 3,
        name: "Rafin Doe",
        profilePic: "",
        orders: [
            {
                id: 85,
                orderId: 4335,
                name: "Ice Creame",
                price: 20,
                stock: "In-stock",
                status: "pending",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
                payment: "COD",
                orderCreated: "Yesterday"
            },
            {
                id: 86,
                orderId: 4336,
                name: "Ice Creame",
                price: 20,
                stock: "In-stock",
                status: "accepted",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
                payment: "COD",
                orderCreated: "Today"
            }
        ]
    },
    {
        id: 4,
        name: "Rakib Doe",
        profilePic: "",
        orders: [
            {
                id: 87,
                orderId: 4337,
                name: "Ice Creame",
                price: 20,
                stock: "In-stock",
                status: "pending",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
                payment: "COD",
                orderCreated: "Yesterday"
            },
            {
                id: 88,
                orderId: 4338,
                name: "Ice Creame",
                price: 20,
                stock: "In-stock",
                status: "accepted",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
                payment: "COD",
                orderCreated: "Today"
            }
        ]
    },
    {
        id: 5,
        name: "Atik Doe",
        profilePic: "",
        orders: [
            {
                id: 89,
                orderId: 4339,
                name: "Ice Creame",
                price: 20,
                stock: "In-stock",
                status: "pending",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
                payment: "COD",
                orderCreated: "Yesterday"
            },
            {
                id: 90,
                orderId: 4340,
                name: "Ice Creame",
                price: 20,
                stock: "In-stock",
                status: "accepted",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
                payment: "COD",
                orderCreated: "Today"
            }
        ]
    },
]

export const PaymentTransictions = [
    {
        orderId: 4345,
        productName: "Ice cream",
        payment: "On-Hold",
        price: 30,
        productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
        orderDate: "20/12/2022"
    },
    {
        orderId: 4346,
        productName: "Ice cream",
        payment: "Recived",
        price: 30,
        productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
        orderDate: "12/12/2022"
    },
    {
        orderId: 4347,
        productName: "Ice cream",
        payment: "Refund",
        price: 30,
        productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJJBOoxD5ZY85V0pz-WDgoSj4aR5bdOn3__wqmH2T&s",
        orderDate: "10/12/2022"
    },
]