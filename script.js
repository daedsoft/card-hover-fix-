const cards = document.querySelectorAll('.card')
let isShowed = false

for (let i = 0; i < cards.length; i++){    
    cards[i].addEventListener('click', () => {
        console.log('click')
        if (isShowed == false){
            cards[i].childNodes[5].style.transform = "translateY(30%)"
            isShowed = true
        }else{
            cards[i].childNodes[5].style.transform = "translateY(100%)"            
            isShowed = false
        }
    })
}