// let hamburger = document.getElementById('fa-solid')

// let cross = document.getElementById('fa-regular')


// hamburger.addEventListener('click', ()=> document.querySelector('#hamburger_div').classList.remove('active'))

// cross.addEventListener('click', ()=> document.querySelector('#hamburger_div').classList.add('active'))


let hambug =document.querySelector('.nav_hamburger')

let close =document.querySelector('.cross')

let main =document.querySelector('.main')


hambug.addEventListener('click', ()=>{
main.classList.add('active')
})

close.addEventListener('click', ()=>{
main.classList.remove('active')
})






























