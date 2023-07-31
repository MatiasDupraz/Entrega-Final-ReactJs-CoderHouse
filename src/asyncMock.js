export const products = [
    {
        id: '1',
        name: 'Auriculares Redragon Zeus',
        codigo: 241563879,
        price: 6600,
        category: 'Auriculares',
        stock: 32,
        imgSrc: 'https://gorilagames.com/img/public/9c8374.jpg'
    },
    {
        id: '2',
        name: 'Webcam Noga NGW-110',
        codigo: 3249687987,
        price: 3800,
        category: 'Webcams',
        stock: 21,
        imgSrc: 'https://sc04.alicdn.com/kf/Hbd571d52558349d78fa40bace2234f3dg.jpg'
    },
    {
        id: '3',
        name: 'Celular Samsung A24',
        codigo: 4870315693,
        price: 134000,
        category: 'Celulares',
        stock: 7,
        imgSrc: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a245mzkoaro/gallery/ar-galaxy-a24-sm-a245-sm-a245mzkoaro-536812897?$650_519_PNG$'
    },
    {
        id: '4',
        name: 'Mouse Inalámbrico Logitech M170',
        codigo: 4324497550,
        price: 8500,
        category: 'Mouse',
        stock: 73,
        imgSrc: 'https://www.venex.com.ar/products_images/1635799193_zdfgdsfg.png'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}