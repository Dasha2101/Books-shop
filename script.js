let body = document.querySelector("body");


function init(){
    let main = makeMain();
    let header = makeHeader();
    let mainSection = makeSectionForBook();
    let pageBook = book();
    let Content = makeHeaderContent();

    pageBook.append(mainSection);

    main.append(header);
    header.append(Content);
    main.append(pageBook);

    body.append(main);

    for (book of books){
        mainSection.append(addBook(book))
    }

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

    let nameBook = document.createElement("h3")
    nameBook.classList.add("name-book")
    nameBook.innerHTML = book.title
    bookElem.append(nameBook)

    let sectionForButton = document.createElement("div")
    sectionForButton.classList.add("section-for-button")

    let priceBook = document.createElement("p")
    priceBook.classList.add("price-book")
    priceBook.innerHTML = "Price:" +  " " + book.price
     bookElem.append(priceBook)

    let buttonShowMore = document.createElement("button")
    buttonShowMore.classList.add("show-more")
    buttonShowMore.innerText = "Show more"
    // bookElem.append(buttonShowMore)

    let addBookBag = document.createElement("button")
    addBookBag.classList.add("add-bag")
    addBookBag.innerText = "Add bag"
    // bookElem.append(addBookBag)

    sectionForButton.append(buttonShowMore)
    sectionForButton.append(addBookBag)

    bookElem.append(sectionForButton)

    return bookElem
}



init();
