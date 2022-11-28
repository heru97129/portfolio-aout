// BTN SERVICES
let itemsservices = document.querySelectorAll('.offer-select')
// TEXT SERVICES
let prSelect = document.querySelectorAll('.pr-select')




// OBJECT WITHTEXT FOR SERVICES
let tabInfoService = [{
    p1: `Adna développe des sites web responsive optimisés compatibles avec les dernières technologies, et adaptés à votre stratégie.`,
    p2: `Adna propose d'intégré votre design mobiles sur-mesure qui devra tenir compte de votre stratégie et de la façon dont les consommateurs utilisent le mobile. Nos développements responsive permettent une utilisation optimale quel que soit l'appareil utilisé, et nos solutions intègrent les dernières technologies pour une expérience sans faille.`
}, {
    p1: `Nous créons ensemble votre application mobile sur mesure clé en main, adaptées à votre secteur d'activité et à votre public. Que vous soyez une entreprise, une organisation à but non lucratif ou un particulier, Adna a la solution qu'il vous faut.  
 `,
    p2: `Une application Web user friendly pour une gestion interne et externe de votre entreprise ? Une application mobile, Android, IOS ou native ? Une assistance en UX/UI design ? Nous nous adaptons à vos projets et vous conseillons sur mesure.
    `
}, {
    p1: `Vous avez besoin de solliciter votre base de données clients et prospects, les tenir informer de vos actualités, de vos nouvelles offres ou bien encore de vos derniers articles de blog publiés ? `,
    p2: ` La Newsletter est l’outil qui répond à votre problématique.  Notre équipe d’expert s’occupe de la conception de votre Newsletter de A à Z ! 
    Touchez de nouvelles personnes. Fidélisez votre clientèle.`
}]


// BTN SRVICES FUNTCION 
itemsservices.forEach((btnservice, i) => {

    // CLICK ON EACH SERVICES
    btnservice.addEventListener('click', (elo) => {
        itemsservices.forEach(btnservice2 => btnservice2.style = ` transition:.3s ease-out;box-shadow:none`)

        btnservice.style = `
        transform:translateX(50px);
        transition:.3s ease-out;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;`

        // ADD TEXT BY SERVICES 
        prSelect.forEach((paragraphe, j) => {
            anime({
                targets: '.pr-select',
                perspective: 1000,
                translateZ: [-800, 0],
                duration: 400,
                opacity: [0, 1],
                easing: 'easeOutQuad'
            })
            // ADD TEXT TO THE PARA
            if (paragraphe.classList.contains("para-ser1")) {
                paragraphe.textContent = tabInfoService[i].p1
            } else {
                paragraphe.textContent = tabInfoService[i].p2
            }
        })


    })
})


anime({
    targets: itemsservices,
    opacity: 0
})

anime({
    targets: '.switch-avis .fa-solid',
    opacity: 0
})

// animation scroll
let bolanimServ = false
let bolanimExp = false
window.addEventListener('scroll', (e) => {

    let scrollListener = window.scrollY

    let services = document.querySelector('.services')
    let servicestop = services.getBoundingClientRect().top * 1.2


    if (window.scrollY > servicestop) {


        if (!bolanimServ) {
            anime({
                targets: itemsservices,
                opacity: [0, 1],
                translateX: [-200, 0],
                delay: anime.stagger(100)
            })
            return bolanimServ = true
        }
    }



    let Experience = document.querySelector('.Experience')
    let Experiencestop = Experience.getBoundingClientRect().top

    if (Experiencestop < 100) {
        console.log(Experiencestop, 'here')

        if (!bolanimExp) {
            anime({
                targets: '.card:nth-child(odd)',
                opacity: [0, 1],
                translateY: [-200, 0],
                delay: anime.stagger(100)
            })
            anime({
                targets: '.card:nth-child(even)',
                opacity: [0, 1],
                translateY: [-200, -100],
                delay: anime.stagger(100)
            })

            anime({
                targets: '.switch-avis .fa-caret-right',
                translateX: [50, 0],
                opacity: [0, 1]
            })
            anime({
                targets: '.switch-avis .fa-caret-left',
                translateX: [-50, 0],
                opacity: [0, 1]
            })
            return bolanimExp = true
        }
    }



    // menu stick
    let menu_div = document.querySelector('.menu-div')

    let sectionServices = document.querySelector('#Works')

    let sectionServicesbottom = sectionServices.getBoundingClientRect().bottom


    if (window.scrollY > sectionServicesbottom) {
        menu_div.classList.add('pos-Fix')

    } else {
        menu_div.classList.remove('pos-Fix')
    }



})

// put target at opacity 0
anime({
    targets: '.card',
    opacity: 0
})







// menu slide

// lest sections du sites
let sections = document.querySelectorAll('.scroll-section')

//  liens du menu
let menu_links = document.querySelectorAll('.menu-links')
let menu_linksContact = document.querySelectorAll('.li-contact')

// for every sections
sections.forEach((section, isec) => {
    // loop on links
    menu_links.forEach((link, imenu) => {

        //   links clicked 
        link.addEventListener('click', (_ => {
            // when u click on the link the window scroll to the sections 
            if (isec == imenu + 1) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }


        }))

    })


    menu_linksContact.forEach((linCont, imenu) => {

        //   links clicked 
        linCont.addEventListener('click', (_ => {
            // when u click on the link the window scroll to the sections 
            if (isec == imenu + 1) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }


        }))

    })


})



// burge menu mobile

let burger = document.querySelector('.burger-menu')
let roll__Down = document.querySelector('.roll-down-menu')
let bolBurger = false
console.log(burger)

burger.addEventListener('click', () => {
    bolBurger = !bolBurger

    if (bolBurger) {
        roll__Down.style = `
  
    width:100%;
    opacity:1

    `
        anime({
            targets: '.tiret-burger:nth-child(2)',
            width: 20,

        })
        anime({
            targets: '.tiret-burger:nth-child(3)',
            width: 20,


        })
    } else {

        roll__Down.style = `
    transition: .5s ease-in-out;
    width:0%;

    `
        anime({
            targets: '.tiret-burger:nth-child(odd)',
            width: 8,

        })
        anime({
            targets: '.tiret-burger:nth-child(2)',
            width: 15,

        })
    }
})



// variable

let moveItems = 0
// icone arrow
let leftArrow = document.querySelector('.left-folio')
let rightArrow = document.querySelector('.right-folio') // gallerie
let container = document.querySelector('.portfolio-project')
let boxSize = document.querySelector('.container-gallery')
let memoryMove = 0

function MoveLeft() {
    // left bounding

    let itemImg = boxSize.children[0].clientWidth + 50

    let boxContainer = boxSize.getBoundingClientRect()
    let ContainerGallery = container.getBoundingClientRect()
console.log(ContainerGallery)

// si le container va plus loin que son parent sur la droite revenir a l'endroit précis
    if (boxContainer.right < ContainerGallery.right) {
       
        boxSize.style.right = `-${ContainerGallery.right}px`
    
    }else{
        memoryMove += itemImg

    }

    boxSize.style = `
            transition: .5s ease;
            left:-${memoryMove}px;
            `

    console.log(memoryMove)

}

function MoveRight() {
    let itemImg = boxSize.children[0].clientWidth + 50

    if(memoryMove <= 5){
        memoryMove = 0
    }else{
        memoryMove -= itemImg

    }



   boxSize.style = `
   transition: .5s ease;
   left:-${memoryMove}px;
   `
   console.log(memoryMove)

}

window.addEventListener('resize', () => {

  MoveLeft()
  MoveRight()
})

leftArrow.addEventListener('click', MoveLeft)
rightArrow.addEventListener('click', MoveRight)