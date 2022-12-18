import data from './products.json' assert { type: "json" };
console.log(data)

const body = document.querySelector('body')

const widget = document.createElement('div')
widget.className = 'widget'

const categoriesTabsList = document.createElement('ul')
categoriesTabsList.className = 'tabs-list'
const productsList = document.createElement('ul')
productsList.className = 'products-list'

let activeTabId = 1

const categories = data.categories
console.log(categories)
const products = data.products
console.log(products)




const changeActiveTab = (e) => {
    activeTabId = +e.target.id
    renderCategoryTabs(activeTabId, categories)
    renderProductsList()
}



const renderCategoryTabs = () => {
    categoriesTabsList.innerHTML = ''
    for (let i = 0; i < categories.length; i++){
        const categoryTab = document.createElement('li')
        categoryTab.id = categories[i].categoryId
        categoryTab.className = 'tab-item'
        categoryTab.addEventListener('click', changeActiveTab)
        if(categories[i].categoryId === activeTabId){
            categoryTab.className = 'tab-item active'
        }
        categoryTab.innerText = categories[i].categoryName
        categoriesTabsList.appendChild(categoryTab)
    }
}

const renderProductsList = () => {
    productsList.innerHTML = ''
    for (let i = 0; i < products.length; i++) {
        const product = document.createElement('li')
        product.className = 'product-card'
        const productPhoto = document.createElement('img')
        productPhoto.className = 'product-photo'
        productPhoto.src = "./img/tovar.jpg"
        
        if(products[i].categoryId === activeTabId){
            const productTitle = document.createElement('span')
            productTitle.className = 'product-title'
            productTitle.innerText = products[i].productName
            product.appendChild(productPhoto)
            product.appendChild(productTitle)
            productsList.appendChild(product)
    
        }
    }
}



renderCategoryTabs()
renderProductsList()



widget.appendChild(categoriesTabsList)
widget.appendChild(productsList)
body.appendChild(widget)