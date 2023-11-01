let section = document.querySelectorAll('section');
let container = document.querySelector('.container');
let h,w,t,l;
let div = document.createElement('div')
div.style.width = section[0].offsetWidth+'px'
div.style.height = section[0].offsetHeight+'px'
div.style.top = section[0].offsetTop+'px'
div.style.left = section[0].offsetLeft+'px'

section.forEach( item => {
    item.addEventListener('mouseenter', (e) => {
         h = item.offsetHeight;
         w = item.offsetWidth;
         t = item.offsetTop
         l = item.offsetLeft
         div.style.width = w+'px'
         div.style.height = h+'px'
         div.style.top = t+'px'
         div.style.left = l+'px'
    })

    
container.appendChild(div)
})

