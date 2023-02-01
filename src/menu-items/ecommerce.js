// assets
import { ShoppingOutlined, ShoppingCartOutlined } from '@ant-design/icons';

// icons
const icons = {
    ShoppingOutlined,
    ShoppingCartOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const ecommerce = {
    id: 'ecommerce',
    title: 'Ecommerce',
    type: 'group',
    children: [
        {
            id: 'product',
            title: 'Product',
            type: 'item',
            url: '/product-page',
            icon: icons.ShoppingOutlined
        },
        {
            id: 'category',
            title: 'Category',
            type: 'item',
            url: '/sample-page',
            icon: icons.ShoppingCartOutlined, 
            // external: true,
            // target: true
        }
    ]
};

export default ecommerce;