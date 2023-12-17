import { MainDish, Breakfast, SushiCombo, BrowseAll, SushiSalad, Sashimi, Seaside, Catering, FastDelivery, OnlineOrdering,GiftCards  } from "../assets"

export const Menu = [
    {
        id: 'home',
        title: 'Home'
    },
    {
        id: 'menu',
        title: 'Menu'
    },
    {
        id: 'about-us',
        title: 'About Us'
    },
    {
        id: 'services',
        title: 'Services'
    },
    {
        id: 'offers',
        title: 'Offers'
    },
]

export const categories = [
    {
        id:1,
        image: MainDish,
        title: 'Main Dish',
        content: '(86 Dishes)'
    },
    {
        id:2,
        image: Breakfast,
        title: 'Breakfast',
        content: '(12 break fast)'
    },
    {
        id:3,
        image: SushiCombo,
        title: 'Sushi Combo',
        content: '(Combo of 6)'
    },
    {
        id:4,
        image: BrowseAll,
        title: 'Browse All',
        content: '(255 Items)'
    }
]

export const dishes = [
    {
        id: 1,
        image: SushiSalad,
        title: 'Best Sushi Salad',
        description: 'Description of the item',
        rating: '4.8',
        price: '350.00',
    },
    {
        id: 2,
        image: Sashimi,
        title: 'Zen Zest Sashimi Salad',
        description: 'Description of the item',
        rating: '4.0',
        price: '600.00',
    },
    {
        id: 3,
        image: Seaside,
        title: 'Seaside Sushi Salad',
        description: 'Description of the item',
        rating: '4.5',
        price: '480.00',
    },
]
export const services = [
    {
        id: 1,
        image: Catering,
        title: 'Catering',
        description: 'Delight your guests with our flavors and  presentation',
        
    },
    {
        id: 2,
        image: FastDelivery,
        title: 'Fast Delivery',
        description: 'We deliver your order promptly to your door',
        
    },
    {
        id: 3,
        image: OnlineOrdering,
        title: 'Online Ordering',
        description: 'Explore menu & order with ease using our Online Ordering ',
        
    },
    {
        id: 4,
        image: GiftCards,
        title: 'Gift Cards',
        description: 'Give the gift of exceptional dining with Foodi Gift Cards',
        
    },
]

export const FooterLinks = [
    {
        id: 1,
        title: 'Useful Links',
        links: [
            {
                link: 'About Us'
            },
            {
                link: 'Events'
            },
            {
                link: 'Blogs'
            },
            {
                link: 'FAQ'
            },
        ]
    },
    {
        id: 2,
        title: 'Main Menu',
        links: [
            {
                link: 'Home'
            },
            {
                link: 'Offers'
            },
            {
                link: 'Menus'
            },
            {
                link: 'Reservations'
            },
        ]
    },
    {
        id: 3,
        title: 'Contact Us',
        links: [
            {
                link: 'example@email.com'
            },
            {
                link: '+64 958 248 966'
            },
            {
                link: 'SOcial Media'
            }
        ]
    }
]

