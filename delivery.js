//  let body = document.querySelector("body");
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
    popupOrder()


}

function makeMainContent(){

    let sectionForDelivery = document.createElement("section")
    sectionForDelivery.classList.add("secForDelivery")
    sectionForDelivery.setAttribute("id", "mainDelivery")

    let sectionPerData = document.createElement("section")
    sectionPerData.classList.add("secPersonalData")

    //1
    secForname = document.createElement("section")
    secForname.classList.add("section-input")
    secForname.setAttribute("id", "sec-name")

    Yname = document.createElement("label")
    // name.setAttribute("id", "name")
    Yname.classList.add("name-class")
    Yname.innerText = "Name"

    inputForName = document.createElement("input")
    inputForName.setAttribute("id", "name")
    inputForName.setAttribute("name", "name")
    inputForName.setAttribute("type", "text")
    // inputForName.setAttribute("pattern", "[a-z]+")


    secForname.append(Yname)
    secForname.append(inputForName)

    //2
    secForSurname = document.createElement("section")
    secForSurname.classList.add("section-input")

    surname = document.createElement("label")
    surname.classList.add("surname")
    surname.innerText = "Surname"

    inputForSurname = document.createElement("input")
    inputForSurname.setAttribute("id", "surname")
    inputForSurname.setAttribute("type", "submitter")

    secForSurname.append(surname)
    secForSurname.append(inputForSurname)

    //3
    typeOfPay = document.createElement("section")

    let title = document.createElement("p")
    title.innerText = "Payment type"

    let allChoosen = document.createElement("section")
    allChoosen.classList.add("all-choosen")

    let cardChoosen = document.createElement("section")

    let choosenCard = document.createElement("label")
    // choosenCard.setAttribute("for", "pay")
    choosenCard.innerText = 'Card'

    inputForCard = document.createElement("input")
    inputForCard.setAttribute("type", "radio")
    inputForCard.setAttribute("value", "card")
    inputForCard.setAttribute("name", "pay")
    inputForCard.checked = false


    cardChoosen.append(choosenCard)
    cardChoosen.append(inputForCard)

    let cashChoosen = document.createElement("section")

    let choosenCash = document.createElement("label")
    // choosenCash.setAttribute("for", "pay")
    choosenCash.innerText = 'Cash'

    inputForCash = document.createElement("input")
    inputForCash.setAttribute("type", "radio")
    inputForCash.setAttribute("value", "cash")
    inputForCash.setAttribute("name", "pay")
    inputForCash.checked = false



    cashChoosen.append(choosenCash)
    cashChoosen.append(inputForCash)

    allChoosen.append(cardChoosen)
    allChoosen.append(cashChoosen)


    typeOfPay.append(title)
    typeOfPay.append(allChoosen)

    //4
    secForPresent = document.createElement("select")
    secForPresent.setAttribute("multiple", "multiple")

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

    //Add all section in sectionPerData

    sectionPerData.append(secForname)
    sectionPerData.append(secForSurname)
    sectionPerData.append(typeOfPay)
    sectionPerData.append(secForPresent)

    //Adress
    let adress = document.createElement("section")
    adress.classList.add("adress")

    //1
    dataDeliver = document.createElement("section")
    dataDeliver.classList.add("delivery")

    let labelDataDeliv = document.createElement("label")
    labelDataDeliv.classList.add("delivery-data")
    labelDataDeliv.setAttribute("for", "date")
    labelDataDeliv.innerText = "Delivery date"

    inputForDataDeliv = document.createElement("input")
    inputForDataDeliv.setAttribute("type", "date")
    inputForDataDeliv.setAttribute("min", "11-04-2023")
    // inputForDataDeliv.setAttribute("value", "21.01.2002")

    dataDeliver.append(labelDataDeliv)
    dataDeliver.append(inputForDataDeliv)

    //2
    let street = document.createElement("section")

    let labelStreet = document.createElement("label")
    labelStreet.classList.add("street")
    labelStreet.innerText = "Street"

    inputStreet = document.createElement("input")
    inputStreet.setAttribute("type", "submitter")

    street.append(labelStreet)
    street.append(inputStreet)

    //3
    let numHouse = document.createElement("section")

    let labelNumHouse = document.createElement("label")
    labelNumHouse.classList.add("house-num")
    labelNumHouse.innerText = "House`s number"

    inputHouseNum = document.createElement("input")
    // inputHouseNum.setAttribute("type", "number")
    // inputHouseNum.setAttribute("min", "0")

    numHouse.append(labelNumHouse)
    numHouse.append(inputHouseNum)

    //4
    let secFlatNumber =  document.createElement("section")

    let labelFlat = document.createElement("label")
    labelFlat.classList.add("flat-number")
    labelFlat.innerText = "Flat`s number"

    inputFlat = document.createElement("input")
    // inputFlat.setAttribute("type", "number")
    inputFlat.setAttribute("min", "0")

    secFlatNumber.append(labelFlat)
    secFlatNumber.append(inputFlat)

    //5
    buttonSubmit = document.createElement("button")
    buttonSubmit.innerText = "Submit"
    buttonSubmit.classList.add("button-submit")
    buttonSubmit.setAttribute("type", "button")
    buttonSubmit.disabled = true
    // buttonSubmit.addEventListener("click", makeButtonAvaluable)


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
    // errorForSurname = document.createElement("p")
    // // secError.innerHTML = "Please enter a valid name"
    // errorArr = ["Please enter a valid name", "Please enter a valid surname" , ""]

    formAction.addEventListener("blur", validBlur, true)


    sectionForDelivery.append(formAction)

    document.body.append(sectionForDelivery);

}

function validationName(e){
    let regName = /^[a-z]{4,}$/gi

        if (!regName.test(inputForName.value)) {
            messages.push("Error 1")
            // error.append(messages)
            if (!inputForName.classList.contains("invalid") && (inputForName == e.target)){
                inputForName.classList.add("invalid")
                secError.innerHTML = 'Please enter a valid name'
            }
        } else {
                if (inputForName.classList.contains("invalid")){
                    inputForName.classList.remove("invalid")
                    secError.innerHTML = ''

        }
    }

}



function validationSurname(e){
    let regSurname = /^[a-z]{5,}$/gi
    if (!regSurname.test(inputForSurname.value)) {
        messages.push("Error 2")
        //errorForSurname.innerHTML = "Please enter a valid Surname"
        // secForSurname.append(errorForSurname)
        if (!inputForSurname.classList.contains("invalid") && (inputForSurname == e.target)){
            inputForSurname.classList.add("invalid")
            // errorForSurname.innerHTML = "Please enter a valid Surname"
            secError.innerHTML = 'Please enter a valid surname'
            console.log(e.target)
    }
    } else {
        if (inputForSurname.classList.contains("invalid")){
            inputForSurname.classList.remove("invalid")
            secError.innerHTML = ''
            // errorForSurname.remove()
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
            // console.log(inputFlat.value)
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
    let date = inputForDataDeliv.value.split('-')
    if ((String(a.getFullYear() == date[0]) && String(a.getMonth() == date[1]) && String(a.getDate() + 1) > date[2]  || date[0] == [] || date[1] == []  || date ==[])) {
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
        buttonSubmit.addEventListener("click", setData)
    }

    // e.preventDefault()
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
    // console.log(books[book])

    let imgSec = document.createElement("img")
    imgSec.classList.add("imgCard")
    imgSec.setAttribute('src', books[book].imageLink)

    buttonDelete = document.createElement("button")
    buttonDelete.classList.add("button-delete")
    buttonDelete.innerText = "X"

    let authorBook = document.createElement("section")
    authorBook.classList.add("author-book")
    authorBook.innerText +=  books[book].author

    let titleBook = document.createElement("section")
    titleBook.classList.add("title-author")
    titleBook.innerText += books[book].title

    let priceBook = document.createElement("section")
    priceBook.innerText += `Price:"  ${books[book].price}`


    buttonDelete.onclick = () => {
        cart.list.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(cart))
        secForBook.remove()
        renderCart()
    }

    Allprice += books[book].price
    authorBook.append(buttonDelete)

    itemWraper.append(authorBook)
    itemWraper.append(imgSec)
    itemWraper.append(priceBook)
    itemWraper.append(titleBook)
    secForBook.append(itemWraper)
})
    let totalPrice = document.createElement('span')
    totalPrice.innerText = `Total: ${Allprice}`
    secForBook.append(totalPrice)
}

function checkSelect(e){
    let count = 0
    let options = Array.from(secForPresent.children)
    // console.log(secForPresent.children)
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
    // windowOrder.classList.add("show-window")

    title = document.createElement("p")

    street = document.createElement("section")
    houseNumber = document.createElement("section")
    flatNumber = document.createElement("section")
    customer = document.createElement("section")

    deleteButton = document.createElement("button")

    windowOrder.append(title)
    windowOrder.append(street)
    windowOrder.append(houseNumber)
    windowOrder.append(flatNumber)
    windowOrder.append(customer)
    windowOrder.append(deleteButton)


    document.body.append(windowOrder)


}

function setData(){
    title.innerText = "Create order"
    street.innerHTML = `Delivery address: ${inputStreet.value}`
    houseNumber.innerHTML = `house:  ${inputHouseNum.value}`
    flatNumber.innerHTML = `flat:  ${inputFlat.value}`
    customer.innerHTML = `custumer: ${inputForName.value}  ${inputForSurname.value}`
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



window.onload = init;
