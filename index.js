import products from './products.json' assert { type: "json" };
console.log(products)

const body = document.querySelector('body')
body.innerText = 'dfgh'

const categories = products.categories
console.log(categories)



const categoriesTabsList = document.createElement('ul')
console.log(categoriesTabsList)

let activeTabId = 1
const changeActiveTab = (e) => {
    activeTabId = e.target.id;
    renderCategoryTabs(activeTabId)
}



const renderCategoryTabs = (activeTabIndex) => {
    for (let i = 0; i < categories.length; i++){
        const categoryTab = document.createElement('li')
        categoryTab.id = categories[i].categoryId
        categoryTab.className = 'tab'
        categoryTab.addEventListener('click', changeActiveTab)
        if(categories[i].categoryId === activeTabIndex){
            categoryTab.className = 'tab active'
        }
        categoryTab.innerText = categories[i].categoryName
        categoriesTabsList.appendChild(categoryTab)
    }
}

renderCategoryTabs(activeTabId)




body.appendChild(categoriesTabsList)