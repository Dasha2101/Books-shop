let body = document.querySelector("body");

function init(){

}

function makeMainContent(){
    let sectionForDelivery = document.createElement("section")
    sectionForDelivery.classList.add("secForDelivery")

    let sectionPerData = document.createElement("section")
    sectionPerData.classList.add("secPersonalData")

    //1
    let secForname = document.createElement("section")

    let name = document.createElement("label")
    name.classList.add("name")

    let inputForName = document.createElement("input")
    inputForName.setAttribute("submitter", "username")

    secForname.append(name)
    secForname.append(inputForName)

    //2
    let secForSurname = document.createElement("section")

    let surname = document.createElement("label")
    surname.classList.add("surnname")

    let inputForSurname = document.createElement("input")
    inputForSurname.setAttribute("submitter", "username")
}