let Yname,
    inputForName,
    error,
    surname,
    inputForSurname,
    inputStreet,
    inputHouseNum,
    inputFlat,
    buttonSubmit,
    inputForPackGift,
    inputForSale,
    secForPresent,
    inputForPostcard,
    inputForPen,
    buttonDelete,
    dataDeliver,
    title,
    street,
    houseNumber,
    flatNumber,
    customer,
    redLigth,
    secError,
    errorForSurname,
    windowOrder,
    inputForDataDeliv,
    secForname,
    secForSurname,
    inputForCard,
    messages = [],
    cart = [],
    errorArr = [],
    inputForCash,
    typeOfPay

function init(){
    makeMainContent();
    cart = JSON.parse(localStorage.getItem('cart'))
}

function makeMainContent(){
    let sectionForDelivery = document.createElement("section")
    sectionForDelivery.classList.add("secForDelivery")
    sectionForDelivery.setAttribute("id", "mainDelivery")

    let sectionPerData = document.createElement("section")
    sectionPerData.classList.add("secPersonalData")

    secForname = document.createElement("section")
    secForname.classList.add("section-input")
    secForname.setAttribute("id", "sec-name")

    Yname = document.createElement("label")
    Yname.setAttribute("for", "name")
    Yname.classList.add("name-class")

    inputForName = document.createElement("input")
    inputForName.setAttribute("type", "text")
    inputForName.setAttribute("placeholder", "Name")

    secForname.append(Yname)
    secForname.append(inputForName)

    secForSurname = document.createElement("section")
    secForSurname.classList.add("section-input")

    surname = document.createElement("label")
    surname.classList.add("surname")

    inputForSurname = document.createElement("input")

    inputForSurname.setAttribute("type", "text")
    inputForSurname.setAttribute("for", "surname")
    inputForSurname.setAttribute("placeholder", "Surname")

    secForSurname.append(surname)
    secForSurname.append(inputForSurname)

    //3
    typeOfPay = document.createElement("section")
    typeOfPay.setAttribute("id", "allchoos")

    let title = document.createElement("p")
    title.classList.add("pay-title")
    title.innerText = "Payment type"

    let allChoosen = document.createElement("section")
    allChoosen.classList.add("two-radio-button")
    let cardChoosen = document.createElement("section")

    let choosenCard = document.createElement("label")
    choosenCard.classList.add("rad-label")
    choosenCard.innerText = 'Card'

    inputForCard = document.createElement("input")
    inputForCard.setAttribute("type", "radio")
    inputForCard.setAttribute("value", "card")
    inputForCard.setAttribute("name", "pay")
    inputForCard.setAttribute("id", "pay")
    inputForCard.checked = false

    cardChoosen.append(choosenCard)
    cardChoosen.append(inputForCard)

    let cashChoosen = document.createElement("section")

    let choosenCash = document.createElement("label")

    choosenCash.innerText = 'Cash'

    inputForCash = document.createElement("input")
    inputForCash.setAttribute("type", "radio")
    inputForCash.setAttribute("value", "cash")
    inputForCash.setAttribute("name", "pay")
    inputForCash.setAttribute("id", "pay")
    inputForCash.checked = false

    cashChoosen.append(choosenCash)
    cashChoosen.append(inputForCash)

    allChoosen.append(cardChoosen)
    allChoosen.append(cashChoosen)

    typeOfPay.append(title)
    typeOfPay.append(allChoosen)

    //4

    sectionForPressentAndTtile = document.createElement("section")
    secForPresent = document.createElement("select")

    titlePresent = document.createElement("p")
    titlePresent.classList.add("title-present")
    titlePresent.innerHTML = "Choose two gifts"

    secForPresent.setAttribute("multiple", "multiple")
    secForPresent.setAttribute("id", "multiple")

    secForPresent.addEventListener("change", checkSelect)

    let secPackGift = document.createElement("option")
    secPackGift.setAttribute("value", "pack")
    secPackGift.innerText = "pack as a gift"

    let secPostcard = document.createElement("option")
    secPostcard.setAttribute("value", "postcard")
    secPostcard.innerText = "add postcard"

    //4.3
    let secSale = document.createElement("option")
    secSale.setAttribute("value", "sale")
    secSale.innerText = "provide 2% discount to the next time"

    //4.4
    let secPen = document.createElement("option")
    secPen.setAttribute("value", "pen")
    secPen.innerText = "branded pen or pencil"

    //
    secForPresent.append(secPackGift)
    secForPresent.append(secPostcard)
    secForPresent.append(secSale)
    secForPresent.append(secPen)

    sectionForPressentAndTtile.append(titlePresent)
    sectionForPressentAndTtile.append(secForPresent)
    //Add all section in sectionPerData

    sectionPerData.append(secForname)
    sectionPerData.append(secForSurname)
    sectionPerData.append(typeOfPay)
    sectionPerData.append(sectionForPressentAndTtile)

    //Adress
    let adress = document.createElement("section")
    adress.classList.add("adress")

    //1
    dataDeliver = document.createElement("section")
    dataDeliver.classList.add("delivery")

    let labelDataDeliv = document.createElement("label")
    labelDataDeliv.classList.add("delivery-data")
    labelDataDeliv.setAttribute("for", "date")


    inputForDataDeliv = document.createElement("input")
    inputForDataDeliv.setAttribute("type", "date")
    inputForDataDeliv.setAttribute("min", "11-04-2023")

    dataDeliver.append(labelDataDeliv)
    dataDeliver.append(inputForDataDeliv)

    //2
    let street = document.createElement("section")

    let labelStreet = document.createElement("label")
    labelStreet.classList.add("street")

    inputStreet = document.createElement("input")
    inputStreet.setAttribute("type", "text")
    inputStreet.setAttribute("placeholder", "Street")

    street.append(labelStreet)
    street.append(inputStreet)

    //3
    let numHouse = document.createElement("section")

    let labelNumHouse = document.createElement("label")
    labelNumHouse.classList.add("house-num")

    inputHouseNum = document.createElement("input")
    inputHouseNum.setAttribute("type", "text")
    inputHouseNum.setAttribute("placeholder", "House`s number")

    numHouse.append(labelNumHouse)
    numHouse.append(inputHouseNum)

    //4
    let secFlatNumber =  document.createElement("section")

    let labelFlat = document.createElement("label")
    labelFlat.classList.add("flat-number")

    inputFlat = document.createElement("input")
    inputFlat.setAttribute("type", "text")
    inputFlat.setAttribute("min", "0")
    inputFlat.setAttribute("placeholder", "Flat`s number")

    secFlatNumber.append(labelFlat)
    secFlatNumber.append(inputFlat)

    //5
    buttonSubmit = document.createElement("button")
    buttonSubmit.innerText = "Submit"
    buttonSubmit.classList.add("button-submit")
    buttonSubmit.setAttribute("type", "button")
    buttonSubmit.disabled = true

    //Add all section in Adress
    adress.append(dataDeliver)
    adress.append(street)
    adress.append(numHouse)
    adress.append(secFlatNumber)
    adress.append(buttonSubmit)

    sectionForDelivery.append(sectionPerData)
    sectionForDelivery.append(adress)

    let formAction = document.createElement("form")
    formAction.classList.add("form-action")
    formAction.setAttribute("action", "")
    formAction.setAttribute("metod", "GET")

    formAction.append(sectionPerData)
    formAction.append(adress)

    renderCart()

    secError = document.createElement("p")
    secError.classList.add("show-error")
    sectionForDelivery.append(secError)

    formAction.addEventListener("blur", validBlur, true)

    sectionForDelivery.append(formAction)

    document.body.append(sectionForDelivery);

}

function validationName(e){
    let regName = /^[a-z]{4,}$/gi

        if (!regName.test(inputForName.value)) {
            messages.push("Error 1")
            if (!inputForName.classList.contains("invalid") && (inputForName == e.target)){
                inputForName.classList.add("invalid")
                secError.innerHTML = 'Please enter a valid name'
            }
        } else {
                if (inputForName.classList.contains("invalid")){
                    inputForName.classList.remove("invalid")
                    inputForName.classList.add("label:valid")
                    secError.innerHTML = ''

        }
    }

}

function validationSurname(e){
    let regSurname = /^[a-z]{5,}$/gi
    if (!regSurname.test(inputForSurname.value)) {
        messages.push("Error 2")
        if (!inputForSurname.classList.contains("invalid") && (inputForSurname == e.target)){
            inputForSurname.classList.add("invalid")
            secError.innerHTML = 'Please enter a valid surname'
            console.log(e.target)
    }
    } else {
        if (inputForSurname.classList.contains("invalid")){
            inputForSurname.classList.remove("invalid")
            secError.innerHTML = ''
        }

    }
}


function validationStreet (e){
    let regStreet = /^[a-z\d\s]{5,}$/gi
    if (!regStreet.test(inputStreet.value)) {
        messages.push("Error 3")
        if (!inputStreet.classList.contains("invalid") && (inputStreet == e.target)){
            inputStreet.classList.add("invalid")
            secError.innerHTML = 'Please enter a valid street'
        }

    } else {
        if (inputStreet.classList.contains("invalid")){
            inputStreet.classList.remove("invalid")
            secError.innerHTML = ''
        }
    }
}

function validationHouse (e){
    let regHouseNum = /^[\d]{0,}$/gi

    if (!regHouseNum.test(Number(inputHouseNum.value)) || inputHouseNum.value == ""){
        messages.push("Error 4")
        if (!inputHouseNum.classList.contains("invalid") && (inputHouseNum == e.target)){
            inputHouseNum.classList.add("invalid")
            secError.innerHTML = 'Please enter a valid house'
        }
    } else {
        if (inputHouseNum.classList.contains("invalid")){
            inputHouseNum.classList.remove("invalid")
            secError.innerHTML = ''
        }
    }
}

function validationFlat (e){
        let regFlatNum = /^\d+-*\d*$/g
        let check = regFlatNum.test(inputFlat.value)
        if (!check){
            messages.push("Error 5")
            if (!inputFlat.classList.contains("invalid") && (inputFlat == e.target)){
                inputFlat.classList.add("invalid")
                secError.innerHTML = 'Please enter a valid flat'
        }
    } else {
        console.log(inputFlat.value)
        if (inputFlat.classList.contains("invalid")){
            inputFlat.classList.remove("invalid")
            secError.innerHTML = ''
        }
    }
}

function validationDate (e){
    let a = new Date()
    a = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    // let date = inputForDataDeliv.value.split('-')
    let date = new Date(inputForDataDeliv.value)
    a.setDate(a.getDate() + 1)
    console.log(a)
    console.log(date)
    if (a > date){
        messages.push("Error 6")
        if (!inputForDataDeliv.classList.contains("invalid") && (inputForDataDeliv == e.target)){
            inputForDataDeliv.classList.add("invalid")
            secError.innerHTML = 'Please enter a valid data'
    }
        } else {
              if (inputForDataDeliv.classList.contains("invalid")){
                inputForDataDeliv.classList.remove("invalid")
                secError.innerHTML = ''
        }
    }
}

function makeButtonAvaluable (){
    if (!messages.length){
        buttonSubmit.disabled = false
        buttonSubmit.addEventListener("click", popupOrder)

    }
}

function renderCart(){

    let secForBook = document.createElement("section")
    secForBook.classList.add("section-for-book")
    document.body.prepend(secForBook)
    cart = JSON.parse(localStorage.getItem("cart"))

    let Allprice = 0
    cart.list.forEach((book, index) => {
    let itemWraper = document.createElement("section")
    itemWraper.classList.add("text-wraprt")

    let imgSec = document.createElement("img")
    imgSec.classList.add("imgCard")
    imgSec.setAttribute('src', books[book].imageLink)

    buttonDelete = document.createElement("button")
    buttonDelete.classList.add("button-delete")
    buttonDelete.innerText = "X"

    let infoBooks = document.createElement("section")
    infoBooks.classList.add("info-books-order")

    let authorBook = document.createElement("section")
    authorBook.classList.add("author-book")
    authorBook.innerHTML = "<b>" + "Author:" + "</b>" + " " + books[book].author

    let titleBook = document.createElement("section")
    titleBook.classList.add("title-author")
    titleBook.innerHTML = "<b>" + "Title:" + "</b>" + " " + books[book].title


    let priceBook = document.createElement("section")
    priceBook.innerHTML += "<b>" + "Price:" + "</b>" + " " + books[book].price


    buttonDelete.onclick = () => {
        cart.list.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(cart))
        secForBook.remove()
        renderCart()
    }

    Allprice += books[book].price

    infoBooks.append(authorBook)
    infoBooks.append(titleBook)
    infoBooks.append(priceBook)
    infoBooks.append(buttonDelete)

    itemWraper.append(imgSec)
    itemWraper.append(infoBooks)

    secForBook.append(itemWraper)
})
    let totalPrice = document.createElement('span')
    totalPrice.classList.add("total-price")
    totalPrice.innerHTML = "<b>" + "Total price:" + "</b>" + " " +  Allprice
    secForBook.append(totalPrice)
}

function checkSelect(e){
    let count = 0
    let options = Array.from(secForPresent.children)
    options.forEach(option => {
      if (option.selected) count ++
    } )
    if (count > 2){
        options.forEach(option => {
            option.selected = false
        })
    }

}

function popupOrder(){
    windowOrder = document.createElement("section")

    title = document.createElement("p")

    street = document.createElement("section")
    houseNumber = document.createElement("section")
    flatNumber = document.createElement("section")
    customer = document.createElement("section")

    deleteButton = document.createElement("button")
    deleteButton.classList.add("button-delete-window")
    deleteButton.addEventListener("click", removeModal)
    deleteButton.innerHTML = "Close"

    windowOrder.append(title)
    windowOrder.append(street)
    windowOrder.append(houseNumber)
    windowOrder.append(flatNumber)
    windowOrder.append(customer)
    windowOrder.append(deleteButton)

    document.body.append(windowOrder)
    setData()

}

function setData(){
    title.innerHTML = "<b>" + "Create order" + "</b>"
    street.innerHTML =  "<b>" + "Delivery address:" + "</b>" + " " + inputStreet.value
    houseNumber.innerHTML = "<b>" + "House:" + "</b>" + " " +  inputHouseNum.value
    flatNumber.innerHTML = "<b>" + "Flat" + "</b>" + " " + inputFlat.value
    customer.innerHTML = "<b>" + "Customer:" + "</b>" + " " + inputForName.value + " " + inputForSurname.value
    console.log(title)
    showWin()

}

function validBlur(e){
    messages = []
    validationName(e)
    validationSurname(e)
    validationStreet(e)
    validationHouse(e)
    validationFlat(e)
    validationDate(e)
    makeButtonAvaluable ()
    console.log(messages)
}

function showWin(){
    windowOrder.classList.add("show-window")

}

function removeModal(){
    windowOrder.style.display = "none"
}



window.onload = init;
