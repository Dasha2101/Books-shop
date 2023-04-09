let body = document.querySelector("body");

let modalWin,
    showWin,
    buttonMD,
    nameBook,
    modals,
    buttonSM,
    overlay,
    list,
    footer,
    bagBook,
    buttonDelete,
    cart = []
    drag_id = -1,
    bagBook
    // buttonDelete
    // listId



function init(){
    let main = makeMain();
    let header = makeHeader();
    let mainSection = makeSectionForBook();
    let pageBook = book();
    let content = makeHeaderContent();
    // modalWin = popup();

    pageBook.append(mainSection);

    main.append(header);
    header.append(content);
    main.append(pageBook);

    document.body.append(main);

    let bookId = 0;

    for (book of books){
        mainSection.append(addBook(book, bookId))
        mainSection.append(popup(book))
        bookId++

    }
    buttonSM = document.querySelectorAll(".show-more")
    modals = document.querySelectorAll(".modal-win")
    initModalWin()
    makeEventAddBook()
}

function makeMain(){
    let mainElem = document.createElement("div")
    mainElem.classList.add('main')
    return mainElem
}

function makeHeader() {
    let headerElem = document.createElement('div')
    headerElem.classList.add("header")
    return headerElem
}

//make header content
 function makeHeaderContent() {
    let headerContent = document.createElement("section")
    headerContent.classList.add("header-content")

    let greetings = document.createElement("h1")
    greetings.classList.add("header-title")
    greetings.innerText = "WELCOME"

    let listId = document.createElement("ul")
    listId.classList.add("list")

    // buttonDelete = document.createElement("button")
    // buttonDelete.classList.add("button-delete")
    // listId.append(buttonDelete)

    headerContent.append(listId);

    let logoShop = document.createElement("div")
    logoShop.classList.add("logo-shop")

    let subtitleLogo = document.createElement("p")
    subtitleLogo.classList.add("subtitle-logo")
    subtitleLogo.innerText = "Online book`s store"

    let title = document.createElement("h2")
    title.classList.add("title-shop")
    title.innerText = "BOOK SHOP"

    // bagBook = document.createElement("section")
    // bagBook.classList.add("bag-for-book")
    // bagBook.ondrop = drop

    let sectionBag = document.createElement("section")
    sectionBag.classList.add("section-bag")


    bagBook = document.createElement("img")
    bagBook.src = "free-icon-basket-3081797.png"

    // bagBook.append(listId)

    bagBook.ondrop = drop



    // bagBook.addEventListener("click", showList)

    bagBook.addEventListener("dragover", (event) => {
        event.preventDefault();
      });


    headerContent.append(bagBook)

    logoShop.append(subtitleLogo)
    logoShop.append(greetings)

    headerContent.append(title)
    headerContent.append(logoShop)
    sectionBag.append(listId)
    sectionBag.append(bagBook)
    headerContent.append(sectionBag)

    return headerContent
 }

//  function showList(){
//     let listId = document.querySelectorAll(".list")

//  }



function book(){
    let pageBook = document.createElement("section")
    pageBook.classList.add('book-page')

    let titlePageBook = document.createElement("section")
    titlePageBook.classList.add("title-page-book")
    titlePageBook.innerText = "NEW ARRIVALS"

    pageBook.append(titlePageBook)

    return pageBook

}

function makeSectionForBook(){
    let sectionElem = document.createElement('div')
    sectionElem.classList.add("main-content")
    return sectionElem
}

function addBook(book, bookId){
    let bookElem = document.createElement("section")
    bookElem.classList.add("book-card")

    bookElem.draggable = true

    bookElem.dataset.bookId = bookId

    let imgBook = document.createElement("img")
    imgBook.classList.add("imgCard")
    imgBook.setAttribute('src', book.imageLink)
    imgBook.draggable = false
    bookElem.append(imgBook);

    let authorBook = document.createElement("h5")
    authorBook.classList.add('author-book')
    authorBook.innerHTML = book.author
    bookElem.append(authorBook)

    nameBook = document.createElement("h3")
    nameBook.classList.add("name-book")
    nameBook.innerHTML = book.title
    bookElem.append(nameBook)

    let sectionForButton = document.createElement("div")
    sectionForButton.classList.add("section-for-button")

    let priceBook = document.createElement("p")
    priceBook.classList.add("price-book")
    priceBook.innerHTML = "PRICE:" +  " " + book.price
    bookElem.append(priceBook)

    let buttonShowMore = document.createElement("button")
    buttonShowMore.classList.add("show-more")
    buttonShowMore.innerText = "Show more"
    // bookElem.append(buttonShowMore)

    let addBookBag = document.createElement("button")
    addBookBag.classList.add("add-bag")
    addBookBag.innerText = "Add bag"
    // bookElem.append(addBookB`ag)

    sectionForButton.append(buttonShowMore)
    sectionForButton.append(addBookBag)

    bookElem.append(sectionForButton)

    buttonShowMore.addEventListener("click", popup)

    bookElem.ondragstart = drag;


    return bookElem
}

function popup(book){
    modalWin = document.createElement("section")
    modalWin.classList.add("modal-win")

    let describeBook = document.createElement("p")
    describeBook.classList.add("describe-book")
    describeBook.innerHTML = book.description

    // nameBook = document.createElement("h3")
    // nameBook.classList.add("name-book")
    // nameBook.innerHTML = book.title

    buttonMD = document.createElement("button")
    buttonMD.classList.add("modal-button")
    buttonMD.innerText = "Close"
    modalWin.append( describeBook, buttonMD)

    buttonMD.addEventListener("click", closeModalWin)

    overlay = document.createElement('section')
    overlay.classList.add("overlay")
    // document.body.append(overlay)

    // overlay.addEventListener("click", removeOverlay)

    return modalWin
}


function initModalWin(){
    for (let i = 0; i < buttonSM.length; i++){
        buttonSM.item(i).addEventListener("click", showModalWin(i))
    }
}

function showModalWin(id){
    return function(){
        modals.item(id).classList.add("show-win")
        // overlay.classList.add("overlay");
        document.getElementsByTagName("body")[0].style.overflow = 'hidden';
    }
}

function closeModalWin(e){
    e.target.closest(".show-win").classList.remove("show-win");
    document.getElementsByTagName("body")[0].style.overflow = 'scroll'
}

// function makeFooter(){
//     footer = document.createElement("footer")
//     footer.classList.add("footer")

//     let footerContent = document.createElement("section")
//     footerContent.classList.add("footer-content")

//     let contactInfo = document.createElement("section")
//     contactInfo.classList.add("contact-info")

//     let phone = document.createElement("a")
//     phone.classList.add("phone-number")

//     let email = document.createElement("a")
//     email.classList.add("email")

//     let telegram = document.createElement("a")
//     telegram.classList.add("telegram")

// }

function makeEventAddBook(){
    let allButton = document.querySelectorAll(".add-bag")
        for (let elem of allButton){
            let card = elem.closest(".book-card")
            elem.addEventListener("click", (e) => {
                let card_id = card.dataset.bookId
                cart.push(card_id)
                renderCart()

            })
        }

    }

function allowDrop(e){
    e.preventDefault();
}

function drag  (e){
    e.dataTransfer.setData("id", e.target.dataset.bookId)
    console.log(e.target)
    e.target.classList.add('over');
}

function drop(e) {
    let itemId = e.dataTransfer.getData("id")
    console.log("dkm")
    cart.push(itemId)
    renderCart()
    e.target.classList.add('over');

}


function renderCart(){
    list = document.querySelector(".list")

    buttonDelete = document.createElement("button")
    buttonDelete.classList.add("button-delete")
    buttonDelete.innerText = "X"

    let summa = 0
    // books.forEach(e => summa += Number.parseFloat(e.price))
    list.innerHTML = ' ';
    let index = 0
    for (elem of cart){

        let itemWraper = document.createElement("section")
        itemWraper.classList.add("text-wraprt")
        itemWraper.innerText =  books[elem].author
        let buttonDelete = document.createElement("button")
        buttonDelete.classList.add("button-delete")
        buttonDelete.innerText = "X"
        let titleBook = document.createElement("section")
        titleBook.innerText = books[elem].title

        let imgSec = document.createElement("img")
        imgSec.classList.add("imgCardForBag")
        imgSec.setAttribute('src', books[elem].imageLink)



        buttonDelete.onclick = () => {
            console.log(cart)

            cart.splice(index, 1)
            renderCart()
        }

        itemWraper.append(imgSec)
        itemWraper.append(buttonDelete)
        itemWraper.append(titleBook)
        list.append(itemWraper)
        let price = document.createElement("section")
        price.innerText = "Price:" + " " + books[elem].price
        summa +=  books[elem].price
        itemWraper.append(price)
        // index++

    //     list.innerHTML += ("<li>" + " " + "<b>Author:</b>"  + books[elem].author + " " + "<button>X</button>" + "<br>" + 
    //  "<b>title:</b>" + " " + books[elem].title + "<br>" + "<b>price:</b>" + books[elem].price + "<br>" )
    }
    let Allprice = document.createElement("section")
    Allprice.innerText = "Total of money:" + " " + summa

    let buttonCreateOrder = document.createElement("button")
    buttonCreateOrder.classList.add("button-order")
    buttonCreateOrder.addEventListener("click", createOrder)

    list.append(Allprice)
    list.append(buttonCreateOrder)
}

function createOrder(){
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "delivery.html"
}





window.onload = init;
