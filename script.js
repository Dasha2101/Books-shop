let body = document.querySelector("body");
let modalWin,
    showWin,
    buttonMD,
    nameBook,
    modals,
    buttonSM,
    overlay,
    footer


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

    for (book of books){
        mainSection.append(addBook(book))
        mainSection.append(popup(book))

    }
    buttonSM = document.querySelectorAll(".show-more")
    modals = document.querySelectorAll(".modal-win")
    initModalWin()
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

    let logoShop = document.createElement("div")
    logoShop.classList.add("logo-shop")

    let subtitleLogo = document.createElement("p")
    subtitleLogo.classList.add("subtitle-logo")
    subtitleLogo.innerText = "Online book`s store"

    let title = document.createElement("h2")
    title.classList.add("title-shop")
    title.innerText = "BOOK SHOP"

    logoShop.append(subtitleLogo)
    logoShop.append(greetings)

    headerContent.append(title)
    headerContent.append(logoShop)

    return headerContent
 }

//make content for main page (book)


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

function addBook(book){
    let bookElem = document.createElement("section")
    bookElem.classList.add("book-card")

    let imgBook = document.createElement("img")
    imgBook.classList.add("imgCard")
    imgBook.setAttribute('src', book.imageLink)
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

function makeFooter(){
    footer = document.createElement("footer")
    footer.classList.add("footer")

    let footerContent = document.createElement("section")
    footerContent.classList.add("footer-content")

    let contactInfo = document.createElement("section")
    contactInfo.classList.add("contact-info")

    let phone = document.createElement("a")
    phone.classList.add("phone-number")

    let email = document.createElement("a")
    email.classList.add("email")

    let telegram = document.createElement("a")
    telegram.classList.add("telegram")

    

}

window.onload = init;
