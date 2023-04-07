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
    redLigth

function init(){
    makeMainContent();
    // validation();

}

function makeMainContent(){

    let sectionForDelivery = document.createElement("section")
    sectionForDelivery.classList.add("secForDelivery")
    sectionForDelivery.setAttribute("id", "mainDelivery")

    let sectionPerData = document.createElement("section")
    sectionPerData.classList.add("secPersonalData")

    //1
    let secForname = document.createElement("section")

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
    let secForSurname = document.createElement("section")

    surname = document.createElement("label")
    surname.classList.add("surname")
    surname.innerText = "Surname"

    inputForSurname = document.createElement("input")
    inputForSurname.setAttribute("id", "surname")
    inputForSurname.setAttribute("type", "submitter")

    secForSurname.append(surname)
    secForSurname.append(inputForSurname)

    //3
    let typeOfPay = document.createElement("section")

    let title = document.createElement("p")
    title.innerText = "Payment type"

    let allChoosen = document.createElement("section")
    allChoosen.classList.add("all-choosen")

    let cardChoosen = document.createElement("section")

    let choosenCard = document.createElement("label")
    // choosenCard.setAttribute("for", "pay")
    choosenCard.innerText = 'Card'

    let inputForCard = document.createElement("input")
    inputForCard.setAttribute("type", "radio")
    inputForCard.setAttribute("value", "card")
    inputForCard.setAttribute("name", "pay")


    cardChoosen.append(choosenCard)
    cardChoosen.append(inputForCard)

    let cashChoosen = document.createElement("section")

    let choosenCash = document.createElement("label")
    // choosenCash.setAttribute("for", "pay")
    choosenCash.innerText = 'Cash'

    let inputForCash = document.createElement("input")
    inputForCash.setAttribute("type", "radio")
    inputForCash.setAttribute("value", "cash")
    inputForCash.setAttribute("name", "pay")


    cashChoosen.append(choosenCash)
    cashChoosen.append(inputForCash)

    allChoosen.append(cardChoosen)
    allChoosen.append(cashChoosen)


    typeOfPay.append(title)
    typeOfPay.append(allChoosen)

    //4
    let secForPresent = document.createElement("section")

    let titlePresent = document.createElement("p")
    titlePresent.innerText = "Choose 2 gifts:"

    //4.1 (first present)
    let secPackGift = document.createElement("section")

    let presentPackGift = document.createElement("label")
    presentPackGift.setAttribute("for", "pack as a gift")
    presentPackGift.innerText = "pack as a gift"

    let inputForPackGift = document.createElement("input")
    inputForPackGift.setAttribute("type", "checkbox")
    inputForPackGift.setAttribute("name", "pack as a gift")

    secPackGift.append(presentPackGift)
    secPackGift.append(inputForPackGift)

    //4.2
    let secPostcard = document.createElement("section")

    let presentPostcard = document.createElement("label")
    presentPostcard.setAttribute("for", "add postcard")
    presentPostcard.innerText = "add postcard"

    let inputForPostcard = document.createElement("input")
    inputForPostcard.setAttribute("type", "checkbox")
    inputForPostcard.setAttribute("name", "add postcard")

    secPostcard.append(presentPostcard)
    secPostcard.append(inputForPostcard)

    //4.3
    let secSale = document.createElement("section")

    let presentSale = document.createElement("label")
    presentSale.setAttribute("for", "provide 2% discount to the next time")
    presentSale.innerText = "provide 2% discount to the next time"

    let inputForSale = document.createElement("input")
    inputForSale.setAttribute("type", "checkbox")
    inputForSale.setAttribute("name", "provide 2% discount to the next time")

    secSale.append(presentSale)
    secSale.append(inputForSale)


    //4.4
    let secPen = document.createElement("section")

    let presentPen = document.createElement("label")
    presentPen.setAttribute("for", "branded pen or pencil")
    presentPen.innerText = "branded pen or pencil"

    let inputForPen = document.createElement("input")
    inputForPen.setAttribute("type", "checkbox")
    inputForPen.setAttribute("name", "branded pen or pencil")

    secPen.append(presentPen)
    secPen.append(inputForPen)
    //
    secForPresent.append(titlePresent)

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
    let dataDeliver = document.createElement("section")
    dataDeliver.classList.add("delivery")

    let labelDataDeliv = document.createElement("label")
    labelDataDeliv.classList.add("delivery-data")
    labelDataDeliv.setAttribute("for", "date")
    labelDataDeliv.innerText = "Delivery date"

    let inputForDataDeliv = document.createElement("input")
    inputForDataDeliv.setAttribute("type", "date")

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
    inputHouseNum.setAttribute("type", "number")
    inputHouseNum.setAttribute("min", "0")

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
    buttonSubmit.setAttribute("type", "submit")
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

    // let randomInput = document.createElement("input")
    // randomInput.setAttribute("type", "number")
    // formAction.append(randomInput)

    error = document.createElement("section")
    error.setAttribute("id", "error")
//
    formAction.append(error)
    formAction.addEventListener("blur", validation, true)

    sectionForDelivery.append(formAction)
    document.body.append(sectionForDelivery);

}

function validation(e){
    let messages = []
    let regName = /^[a-z]{4,}$/gi
    let regSurname = /^[a-z]{5,}$/gi
    let regStreet = /^[a-z\d\s]{5,}$/gi
    let regFlatNum = /^\d+-*\d*$/gi

    if (!regName.test(inputForName.value)) {
        messages.push("Error")
        // error.innerText = messeges.join(", ")
    }
    if (!regSurname.test(inputForSurname.value)) {
        messages.push("Error")
    }
    if (!regStreet.test(inputStreet.value)) {
        messages.push("Error")
    }

    if (Number(inputHouseNum.value) < 0){
        messages.push("Error")
    }

    if (!regFlatNum.test(inputFlat.value)){
        messages.push("Error")
    }

    if (!messages.includes("Error")){
        buttonSubmit.disabled = false
    }

    console.log(messages)
    // e.preventDefault()
}
    



window.onload = init;
