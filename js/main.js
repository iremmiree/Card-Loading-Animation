const header = document.querySelector(".img-box")
const cardTitle = document.querySelector(".card-title")
const cardText = document.querySelector(".card-text")
const userName = document.querySelector("#name")
const userImg = document.querySelector(".user-img")
const userDate = document.querySelector("#date")

const animatedBg = document.querySelectorAll(".animated-bg")
const animatedBgText = document.querySelectorAll(".animated-bg-text")

setTimeout(getCardData, 2000)

function getCardData(){
    header.innerHTML = '<img src="images/img.jpg" alt="" class="card-img">'
    cardTitle.innerHTML ="Lorem ipsum dolor sit"
    cardText.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad esse es et libero."
    userImg.innerHTML = '<img src="images/avatar.png" alt="">'
    userName.innerHTML = "Albert Deep"
    userDate.innerHTML = "May 28, 2023"

    animatedBg.forEach(bg => bg.classList.remove("animated-bg"))
    animatedBgText.forEach(bgText => bgText.classList.remove("animated-bg-text"))
}