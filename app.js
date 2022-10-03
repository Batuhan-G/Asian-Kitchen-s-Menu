const menu = [
    {
        id: 1,
        category: "Korea",
        title: "Tteokbokki",
        price: 5.99,
        img: "./img/korea/korea_tteokbokki.jpg",
        desc: "Spicy rice cakes, serving with fish cake."
    },
    {
        id: 2,
        category: "Korea",
        title: "Jajangmyeon",
        price: 9.33,
        img: "./img/korea/korea_jajangmyeon.jpg",
        desc: "Black bean sauce noodle, serving with green onion."
    },
    {
        id: 3,
        category: "Korea",
        title: "Bibimbap",
        price: 11.99,
        img: "./img/korea/korea_bibimap.jpg",
        desc: "Boiling vegetables, serving special hot sauce."
    },
    {
        id: 4,
        category: "China",
        title: "Dan Dan Mian",
        price: 5.99,
        img: "./img/korea/korea_tteokbokki.jpg",
        desc: "Dan dan noodle, serving with green onion."
    },
    {
        id: 5,
        category: "China",
        title: "Yangzhou Fried Rice",
        price: 12.99,
        img: "./img/china/china_yangzhouFriedRice.jpg",
        desc: "Yangzhou style fried rice, serving with been and pickles"
    },
    {
        id: 6,
        category: "China",
        title: "Ma Yi Shang Shu",
        price: 12.99,
        img: "./img/china/china_maYiNoodle.jpg",
        desc: "Hot, pepper sauce noodle, serving with soy bean and onion."
    },
    {
        id: 7,
        category: "Japan",
        title: "Chicken Ramen",
        price: 7.99,
        img: "./img/japan/japan_chickenRamen.jpg",
        desc: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg."
    },
    {
        id: 8,
        category: "Japan",
        title: "Onigiri",
        price: 9.99,
        img: "./img/japan/japan_onigiri.jpg",
        desc: "Rice Sandwich, serving with soy sauce."
    },
    {
        id: 9,
        category: "Japan",
        title: "Sushi",
        price: 4.99,
        img: "./img/japan/japan_sushi.jpg",
        desc: "Salmon fish, serving with 6 rolls and soy sauce."
    }
]

const content = document.querySelector('.content')
const container = document.querySelector('.btn-cont')

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu)
    displayMenuButtons()
})

function displayMenuItems (menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="col-lg-6 mb-5">
                    <div class="card">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src= ${item.img} class="img-fluid float-start rounded-start" alt="korea_tteokbokki">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <div class="row border-secondary border-bottom">
                            <div class="col-10">
                                <h5 class="card-title">${item.title}</h5>
                            </div>
                            <div class="col-2">
                                <h6>${item.price}</h6>
                            </div>
                            </div>
                            <p class="card-text mt-2">${item.desc}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>`
    });
    displayMenu = displayMenu.join("")
    content.innerHTML = displayMenu
}

function displayMenuButtons (){
    const categories = menu.reduce(function(acc, item) {
        if(!acc.includes(item.category)){
            acc.push(item.category) 
        }
        return acc
    },['All'])

    const categoryBtns = categories.map(function (category) {
        return `<a class="filter-btn nav-link 
                btn mx-2" href="#" 
                data-id=${category}>
                ${category}</a>`
    }).join("")
    container.innerHTML = categoryBtns
    const filterBtn = document.querySelectorAll('.filter-btn')

    filterBtn.forEach(function (btn){
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id
            const menuCategory = menu.filter(function (menuItem){
                if(menuItem.category === category) {
                    return menuItem
                }
            })
            if(category === 'All'){
                displayMenuItems(menu)
            }
            else{
                displayMenuItems(menuCategory)
            }
        })
    })
}