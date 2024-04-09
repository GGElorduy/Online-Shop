//* Variables  */
/*  PRODUCTOS */
const products$$ = [
  {
    name: 'Red Mermaid',
    type: 'Wall decor',
    price: 32.0,
    stock: 3,
    image:
      'https://i.etsystatic.com/10602273/r/il/74aa62/5242557276/il_794xN.5242557276_ir9n.jpg',
    description:
      'Introducing Mermaids! inspired by my participation in the Mermay challenge this year. I have created a collection of unique mermaids, each with its own enchanting charm. These mermaids can be placed on the frame of a door, window, switch, shelf, or any other special spot in your home, adding a touch of magic to your surroundings.Every mermaid is meticulously hand-cut and painted, ensuring that each one is truly one-of-a-kind. I use reclaimed wood panels that may have minor imperfections, which are barely noticeable as I ensure they are kept on the back, they add character and tell the story of each mermaid. The mermaids are beautifully painted with acrylic paint and protected with a thin layer of varnish.',
    size: 'The piece measures approximately 28x 17 cm',
    materials: ' wood, paint, varnish'
  },
  {
    name: 'Yellow Mermaid',
    type: 'Wall decor',
    price: 32.0,
    stock: 4,
    image:
      'https://i.etsystatic.com/10602273/r/il/a2e15f/5242520964/il_794xN.5242520964_jsib.jpg',
    description:
      'Introducing Mermaids! inspired by my participation in the Mermay challenge this year. I have created a collection of unique mermaids, each with its own enchanting charm. These mermaids can be placed on the frame of a door, window, switch, shelf, or any other special spot in your home, adding a touch of magic to your surroundings.Every mermaid is meticulously hand-cut and painted, ensuring that each one is truly one-of-a-kind. I use reclaimed wood panels that may have minor imperfections, which are barely noticeable as I ensure they are kept on the back, they add character and tell the story of each mermaid. The mermaids are beautifully painted with acrylic paint and protected with a thin layer of varnish.',
    size: 'The piece measures approximately 28x 17 cm (11 x 6.7 inches)',
    materials: ' wood, paint, varnish'
  },
  {
    name: 'Blue Mermaid',
    type: 'Wall decor',
    price: 32.0,
    stock: 'Rare find',
    image:
      'https://i.etsystatic.com/10602273/r/il/234b49/5242493982/il_794xN.5242493982_fc3k.jpg',
    description:
      'Introducing Mermaids! inspired by my participation in the Mermay challenge this year. I have created a collection of unique mermaids, each with its own enchanting charm. These mermaids can be placed on the frame of a door, window, switch, shelf, or any other special spot in your home, adding a touch of magic to your surroundings.Every mermaid is meticulously hand-cut and painted, ensuring that each one is truly one-of-a-kind. I use reclaimed wood panels that may have minor imperfections, which are barely noticeable as I ensure they are kept on the back, they add character and tell the story of each mermaid. The mermaids are beautifully painted with acrylic paint and protected with a thin layer of varnish.',
    size: 'The piece measures approximately 28x 17 cm (11 x 6.7 inches)',
    materials: ' wood, paint, varnish'
  },
  {
    name: 'Yellow Bloomed Skull',
    type: 'Plant Ornament',
    price: 15.0,
    stock: 'Rare find',
    image:
      'https://i.etsystatic.com/10602273/r/il/d66ce7/5205764717/il_794xN.5205764717_k6ud.jpg',
    description:
      'This listings is for ONE skull ornament, the skull that you can see in the first and second picture.Each Skull is hand cut and painted, making each one unique. It is painted with acrylic paint and have layer of varnish to protect them. The back of the Skull is painted in bone white and signed.',
    size: 'Only Skull: 9,5 x 9,5 cm approx. / 3,7 x 3,7 inches approx. Stick: 13,5 cm approx. / 5,3 inches appro',
    materials: ' Materials: wood, paint, varnish, cord'
  },
  {
    name: 'Red Bloomed Skull',
    type: 'Plant Ornament',
    price: 15.0,
    stock: 'Rare find',
    image:
      'https://i.etsystatic.com/10602273/r/il/11b83e/5205762447/il_794xN.5205762447_jbdo.jpg',
    description:
      'This listings is for ONE skull ornament, the skull that you can see in the first and second picture.Each Skull is hand cut and painted, making each one unique. It is painted with acrylic paint and have layer of varnish to protect them. The back of the Skull is painted in bone white and signed.',
    size: 'Only Skull: 9,5 x 9,5 cm approx. / 3,7 x 3,7 inches approx. Stick: 13,5 cm approx. / 5,3 inches appro',
    materials: ' Materials: wood, paint, varnish, cord'
  },
  {
    name: 'Aengus the Ghost.',
    type: 'Plant Ornament',
    price: 12.0,
    stock: 2,
    image:
      'https://i.etsystatic.com/10602273/r/il/57f484/5106724865/il_794xN.5106724865_qit1.jpg',
    description:
      'Each Ghost is hand cut and painted, making each one unique. It is painted with acrylic paint and have a thin layer of varnish to protect them. The back of the toad is painted in black and signed.    If the stick is too long for your plant pot and you need to cut it shorter, you can simply cut the stick with some pliers.',
    size: 'Only Ghost: 12 x 5 cm approx. / 4,7 x 2 inches approx -- Stick: 13,5 cm approx / 5,3 inches approx.',
    materials: ' wood, paint, varnish, cord'
  },
  {
    name: 'Magical snail.',
    type: 'Plant Ornament',
    price: 12.0,
    stock: 2,
    image:
      'https://i.etsystatic.com/10602273/r/il/796b10/5058634670/il_794xN.5058634670_kmgo.jpg',
    description:
      'Each Snail is hand cut and painted, making each one unique. It is painted with acrylic paint and have a thsin layer of varnish to protect them. The back of the snail is painted in black/purple and signed.',
    size: 'Only Snail: 5,5 x 10 cm approx. / 2,1 x 4 inches approx.Stick: 13,5 cm approx / 5,3 inches approx',
    materials: ' wood, paint, varnish, cord'
  },
  {
    name: 'Aengus the ghost with a flower',
    type: 'Plant Ornament',
    price: 12.0,
    stock: 2,
    image:
      'https://i.etsystatic.com/10602273/r/il/e72c72/5294356085/il_794xN.5294356085_gpyf.jpg',
    description:
      'Each Ghost is hand cut and painted, making each one unique. It is painted with acrylic paint and have a thin layer of varnish to protect them. The back of the toad is painted in black and signed.    If the stick is too long for your plant pot and you need to cut it shorter, you can simply cut the stick with some pliers.',
    size: 'Only Ghost: 12 x 5 cm approx. / 4,7 x 2 inches approx -- Stick: 13,5 cm approx / 5,3 inches approx.',
    materials: ' wood, paint, varnish, cord'
  },
  {
    name: 'Black lagoon monster',
    type: 'Plant Ornament',
    price: 12.0,
    stock: 'Rare find',
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077477/Proyecto%20-%20Tienda/assets/img/productos/Black_Lagoon_5_yjypfv.jpg',
    description:
      'This is the Black lagoon Monster and it is hand cut and painted, making each one unique. It is painted with acrylic paint and have a thin layer of varnish to protect them. The back of the toad is painted in black and signed.    If the stick is too long for your plant pot and you need to cut it shorter, you can simply cut the stick with some pliers.',
    size: 'Only the monster: 15 x 5 cm approx. / 4,7 x 2 inches approx -- Stick: 13,5 cm approx / 5,3 inches approx.',
    materials: ' wood, paint, varnish, cord'
  },
  {
    name: 'Moon Raven. Wall Hanger 🌙',
    type: 'Bird🕊',
    price: 32.0,
    stock: 'Rare find',
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077466/Proyecto%20-%20Tienda/assets/img/productos/raven_moon_03_olpy5x.jpg',
    description:
      "Ravens. I see them every time I go to the forest, soaring high above my head, beautifully gliding between the trees. With the Moon Raven wall hanger, each moon and raven is carefully hand-cut and painted, ensuring that each one is unique. I use reclaimed wood panels that may have slight imperfections, but this only adds character and tells the story of each bird. The pieces are painted with acrylic paint and coated with a thin layer of varnish for protection. The hanger comes with a dark grey hemp string for easy hanging. .If you have a specific bird in mind, feel free to let me know, and I'd be happy to create it for you.",
    size: 'The full hanger measures approximately 35x37.5 cm (13.7x14.7 inches), while the Raven is around 16x37.5 cm (6.2x14.7 inches) and the Moon is approximately 6x7.5 cm (2.3x2.9 inches)',
    materials: ' wood, paint, varnish'
  },
  {
    name: 'Glampire bird',
    type: 'Halloween birds. 🐦',
    price: 15.0,
    stock: 'Unique',
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077440/Proyecto%20-%20Tienda/assets/img/productos/Glampire_bird_utfafm.jpg',
    description:
      "Introducing the Halloween Birds Wall Decoration, the perfect solution for bird lovers who don't like having birds in cages. These colorful birds can be placed on top of the frame of a door, window, switch, shelf, or anywhere you'd like your little feathery friend to perch. They will add a pop of color and life to any spot in your home. Each bird is hand cut and painted, making each one unique. I use reclaimed wood panels that may have slight imperfections, but this adds character and tells the story of each bird. The birds are painted with acrylic paint and have a thin layer of varnish to protect them. These are a one-of-a-kind pieces, and I won't be making them again - so if you love them, you only have one chance to make them yours! To affix the birds, simply use sticky tack or double-sided tape (thick mounting tape works best) to stick them to your desired area.",
    size: 'The piece measures approximately 19x7 cm',
    materials: ' wood, paint, varnish'
  },
  {
    name: 'Hairy bird',
    type: 'Halloween birds. 🐦',
    price: 15.0,
    stock: 'Unique',
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077418/Proyecto%20-%20Tienda/assets/img/productos/hairy_bird_2_ame8ml.jpg',
    description:
      "Introducing the Halloween Birds Wall Decoration, the perfect solution for bird lovers who don't like having birds in cages. These colorful birds can be placed on top of the frame of a door, window, switch, shelf, or anywhere you'd like your little feathery friend to perch. They will add a pop of color and life to any spot in your home. Each bird is hand cut and painted, making each one unique. I use reclaimed wood panels that may have slight imperfections, but this adds character and tells the story of each bird. The birds are painted with acrylic paint and have a thin layer of varnish to protect them. These are a one-of-a-kind pieces, and I won't be making them again - so if you love them, you only have one chance to make them yours! To affix the birds, simply use sticky tack or double-sided tape (thick mounting tape works best) to stick them to your desired area.",
    size: 'The piece measures approximately 19x7 cm',
    materials: ' wood, paint, varnish'
  },
  {
    name: 'Ocean bird',
    type: 'Halloween birds. 🐦',
    price: 15.0,
    stock: 'Unique',
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1712056914/Proyecto%20-%20Tienda/assets/img/productos/ocean_bird_ujjjyb.jpg',
    description:
      "Introducing the Halloween Birds Wall Decoration, the perfect solution for bird lovers who don't like having birds in cages. These colorful birds can be placed on top of the frame of a door, window, switch, shelf, or anywhere you'd like your little feathery friend to perch. They will add a pop of color and life to any spot in your home. Each bird is hand cut and painted, making each one unique. I use reclaimed wood panels that may have slight imperfections, but this adds character and tells the story of each bird. The birds are painted with acrylic paint and have a thin layer of varnish to protect them. These are a one-of-a-kind pieces, and I won't be making them again - so if you love them, you only have one chance to make them yours! To affix the birds, simply use sticky tack or double-sided tape (thick mounting tape works best) to stick them to your desired area.",
    size: 'The piece measures approximately 19x7 cm',
    materials: ' wood, paint, varnish'
  },
  {
    name: 'Heart bird',
    type: 'Halloween birds. 🐦',
    price: 15.0,
    stock: 1,
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1712056991/Proyecto%20-%20Tienda/assets/img/productos/heart_bird_wpfmoe.jpg',
    description:
      "Introducing the Halloween Birds Wall Decoration, the perfect solution for bird lovers who don't like having birds in cages. These colorful birds can be placed on top of the frame of a door, window, switch, shelf, or anywhere you'd like your little feathery friend to perch. They will add a pop of color and life to any spot in your home. Each bird is hand cut and painted, making each one unique. I use reclaimed wood panels that may have slight imperfections, but this adds character and tells the story of each bird. The birds are painted with acrylic paint and have a thin layer of varnish to protect them. These are a one-of-a-kind pieces, and I won't be making them again - so if you love them, you only have one chance to make them yours! To affix the birds, simply use sticky tack or double-sided tape (thick mounting tape works best) to stick them to your desired area.",
    size: 'The piece measures approximately 19x7 cm',
    materials: ' wood, paint, varnish'
  },
  {
    name: 'Bat',
    type: 'Halloween birds. 🐦',
    price: 15.0,
    stock: 1,
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077417/Proyecto%20-%20Tienda/assets/img/productos/bat_02_t41wqf.jpg',
    description:
      "Introducing the Halloween Birds Wall Decoration, the perfect solution for bird lovers who don't like having birds in cages. These colorful birds can be placed on top of the frame of a door, window, switch, shelf, or anywhere you'd like your little feathery friend to perch. They will add a pop of color and life to any spot in your home. Each bird is hand cut and painted, making each one unique. I use reclaimed wood panels that may have slight imperfections, but this adds character and tells the story of each bird. The birds are painted with acrylic paint and have a thin layer of varnish to protect them. These are a one-of-a-kind pieces, and I won't be making them again - so if you love them, you only have one chance to make them yours! To affix the birds, simply use sticky tack or double-sided tape (thick mounting tape works best) to stick them to your desired area.",
    size: 'The piece measures approximately 23x15cm',
    materials: ' wood, paint, varnish'
  },
  {
    name: 'Swan',
    type: 'Painting 🌆',
    price: 250.0,
    stock: 1,
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1710144827/Proyecto%20-%20Tienda/assets/img/Pintura/Cisne_ivnrzd.jpg'
  },
  {
    name: 'Owl',
    type: 'Painting 🌆',
    price: 250.0,
    stock: 1,
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1710144824/Proyecto%20-%20Tienda/assets/img/Pintura/Barn_owl_-_acrylic_on_wood_-_76x70_5cm_pdhd9r.jpg'
  },
  {
    name: 'Seagul',
    type: 'Painting 🌆',
    price: 250.0,
    stock: 1,
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1710144822/Proyecto%20-%20Tienda/assets/img/Pintura/seagull_F_inb3c6.jpg'
  },
  {
    name: 'Flamenco',
    type: 'Painting 🌆',
    price: 250.0,
    stock: 1,
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1710144819/Proyecto%20-%20Tienda/assets/img/Pintura/flamenco_instagram_tpdho1.jpg'
  },
  {
    name: 'Moon phase',
    type: 'Painting 🌆',
    price: 250.0,
    stock: 1,
    image:
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1710144817/Proyecto%20-%20Tienda/assets/img/Pintura/Phases_of_the_moon_ri97uw.jpg'
  }
]

/* HEADER */
const headernav = [
  {
    key: 'Contact',
    src: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1712586287/Proyecto%20-%20Tienda/assets/img/contact_k1wnz1.png'
  },
  {
    key: 'Language',
    src: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077413/Proyecto%20-%20Tienda/assets/img/icono-lenguaje_ajkef6.png'
  },
  {
    key: 'Log In',
    src: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077411/Proyecto%20-%20Tienda/assets/img/account_rgupgw.png'
  },
  {
    key: 'Basket',
    src: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077411/Proyecto%20-%20Tienda/assets/img/basket_bxcl36.png'
  }
]
/* FILTROS */
let TYPES = []
let TYPE = ''
let displayedProducts = []

/* Para aplicar el filtro type que se ha seleccionado */
const filtertype = () => {
  let filtered = []

  for (const element of displayedProducts) {
    if (TYPE.includes(element.type)) {
      filtered.push(element)
    }
  }

  printProduct(filtered)
}
/* Funcion para aplciar filtrar los elementos por dinero */
const filterPrice = () => {
  const amount = document.getElementById('amountInput').value

  let filteredProducts = []

  for (const element of displayedProducts) {
    if (amount >= element.price) {
      filteredProducts.push(element)
    }
  }

  printProduct(filteredProducts)
}
/*  Funcion para filtrar los elementos por tipo */
const filtertypes = (elements) => {
  TYPES.splice(0)
  for (const element of elements) {
    if (!TYPES.includes(element.type)) {
      TYPES.push(element.type)
    }
  }
}
filtertypes(products$$)
// funcion para printar el header
const printHeader = () => {
  const header = document.createElement('Header')
  const logo = document.createElement('img')
  logo.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077414/Proyecto%20-%20Tienda/assets/img/Logo_Sil-Elo_1_jw3wd6.png'
  logo.alt = 'Logo Sil Elo'
  logo.classList.add('logo-img')
  header.appendChild(logo)

  const headerUl = document.createElement('ul')
  headerUl.classList.add('headerUl')

  for (let index = 0; index < 4; index++) {
    const li = document.createElement('li')
    const div = document.createElement('div')
    const aimg = document.createElement('a')
    const img = document.createElement('img')
    const atext = document.createElement('a')

    div.classList.add('flex-container')
    atext.classList.add('letras')

    img.src = headernav[index].src
    atext.textContent = headernav[index].key

    headerUl.appendChild(li)
    li.appendChild(div)
    div.appendChild(aimg)
    aimg.appendChild(img)
    div.appendChild(atext)
  }
  header.appendChild(logo)

  header.appendChild(headerUl)
  document.body.parentNode.insertBefore(header, document.body)
}
printHeader()
//funcion para printar el menu desplegable

/* const dropDownMenuGenerator = () => {
  const dropMenu = document.createElement('img')
  dropMenu.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077412/Proyecto%20-%20Tienda/assets/img/icono-hamburguesa_v3psyk.png'
  dropMenu.classList.add('dropMenu')
  const header = document.querySelector('header')
  header.appendChild(dropMenu)
}
dropDownMenuGenerator() */
//FUNCION PARA LOS CORAZONES
const fillHeart = (heart) => {
  if (heart.classList.contains('heart-2')) {
    heart.classList.add('heart-1')
    heart.classList.remove('heart-2')
  } else {
    heart.classList.add('heart-2')
    heart.classList.remove('heart-1')
  }
}

// funcion para printear los productos
const printProduct = (paper) => {
  const divProduct = document.querySelector('#products')
  divProduct.innerHTML = ''
  displayedProducts = []

  if (paper.length === 0) {
    /*     setTimeout(() => {
      alert(
        'No se encontraron productos. Por favor, elimine los filtros de búsqueda.'
      )
    }, 1000) */

    const divNoElement = document.createElement('div')
    const text = document.createElement('h2')
    text.textContent =
      'No se encontraron productos. Por favor, elimine los filtros de búsqueda.'
    divNoElement.classList.add('divNoElement')

    divProduct.appendChild(divNoElement)
    divNoElement.appendChild(text)
    return
  }
  for (const element of paper) {
    const divElement = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const divprice = document.createElement('div')

    const price = document.createElement('p')
    const fav = document.createElement('div')
    const basket = document.createElement('button')

    divImg.classList.add('imgContainer')
    fav.classList.add('heart-2')
    divElement.classList.add('product')
    divElement.classList.add('flex-container')
    divprice.classList.add('productFoot')

    img.src = element.image
    name.textContent = element.name
    price.textContent = `${element.price} €`
    basket.textContent = 'Add to  the basket'
    fav.addEventListener('click', function () {
      fillHeart(this)
    })
    divProduct.appendChild(divElement)
    divElement.appendChild(divImg)
    divImg.appendChild(img)
    divElement.appendChild(name)
    divElement.appendChild(divprice)
    divprice.appendChild(price)
    divprice.appendChild(fav)
    divprice.appendChild(basket)

    displayedProducts.push(element)
  }
}

printProduct(products$$)

// funcion para printar el filtro type
const optionPred = 'All'
const createFilterType = () => {
  const sectionFilter = document.querySelector('#filter')
  const divFilter = document.createElement('div')
  const title = document.createElement('label')
  const selectType = document.createElement('select')
  const optionAll = document.createElement('option')

  optionAll.value = 'All'
  optionAll.textContent = 'All'
  selectType.appendChild(optionAll)
  divFilter.classList.add('filterType')
  selectType.classList.add('selectOption')

  const optionsArray = []

  for (const type of TYPES) {
    const option = document.createElement('option')
    option.value = type
    option.textContent = type
    optionsArray.push(option)
  }

  optionsArray.sort((a, b) => a.textContent.localeCompare(b.textContent)) // Orden alfabético

  for (const option of optionsArray) {
    selectType.appendChild(option)
  }

  title.textContent = 'Filter by type of product'

  sectionFilter.appendChild(divFilter)
  divFilter.appendChild(title)
  divFilter.appendChild(selectType)

  selectType.addEventListener('change', (event) => {
    if (event.target.value != 'All') {
      TYPE = event.target.value
      filtertype()
    } else {
      printProduct(products$$)
    }
  })
}
createFilterType()
// funcion para printar el filtro money
const createFilterMoney = () => {
  const sectionFilter = document.querySelector('#filter')
  const divFilter = document.createElement('div')
  const title = document.createElement('label')
  const moneyInput = document.createElement('input')
  const submit = document.createElement('button')

  sectionFilter.appendChild(divFilter)
  divFilter.appendChild(title)
  divFilter.appendChild(moneyInput)
  divFilter.appendChild(submit)

  divFilter.classList.add('filterMoney')
  title.textContent = 'Filter by price'
  title.for = 'amountInput'
  submit.textContent = 'Submit'
  moneyInput.placeholder = 'Set the amount '
  moneyInput.type = 'number'
  moneyInput.id = 'amountInput'

  submit.addEventListener('click', filterPrice)
}
createFilterMoney()

// funcion para printar filtro reset

const resetFilter = () => {
  const sectionFilter = document.querySelector('#filter')
  const divFilter = document.createElement('div')
  const title = document.createElement('label')

  const clearButton = document.createElement('button')

  divFilter.classList.add('divClear')
  clearButton.textContent = 'Clear Filter'

  sectionFilter.appendChild(divFilter)
  divFilter.appendChild(title)
  divFilter.appendChild(clearButton)

  title.textContent = 'Show all products'

  clearButton.addEventListener('click', () => {
    //! cambiar el valor de amountInt a 0

    const amountInput = document.querySelector('#amountInput')
    amountInput.value = null

    //! cambiar el valor de selectType a ALL

    const selectType = document.querySelector('.selectOption')
    selectType.value = optionPred

    printProduct(products$$)
  })
}
resetFilter()
