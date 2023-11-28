
let futureDate = new Date(2024,8,14)



let days = document.getElementById("dayValue")
let hour = document.getElementById("hourValue")
let min = document.getElementById("minValue")
let sec = document.getElementById("secValue")

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});



setInterval(() => {
    let dateNew = new Date

    days.innerHTML = Math.floor((futureDate - dateNew) / (1000 * 60 * 60 * 24 ) )
    hour.innerHTML = Math.floor((futureDate - dateNew) % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60  ) )
    min.innerHTML = Math.floor((futureDate - dateNew) % (1000 * 60 * 60  ) / (1000 * 60 ) )
    sec.innerHTML = Math.floor((futureDate - dateNew) % (1000 * 60 ) / (1000))



},1000)














