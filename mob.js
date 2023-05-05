let hambug =document.querySelector('.nav_hamburger')

let close =document.querySelector('.cross')

let main =document.querySelector('.main')


hambug.addEventListener('click', ()=>{
main.classList.add('active')
})

close.addEventListener('click', ()=>{
main.classList.remove('active')
})

function reload (){
    main.classList.add('active')

}
reload()



























