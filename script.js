function zwijacz(target=document.querySelector("#nav-ul-phone")){
    if(target.style.transition == 0){
        target.setAttribute('style', 'transition: 0.7s !important')
    }
//!po użyciu 1'krotnym potem nie działa, nie wysuwa się, a po 2'gim kliku sie jebie
    target.style.height = `${target.style.height == "200px" ? "0px" : "200px"}`;
    target.style.transform=`translateY(${target.style.transform == "" || target.style.transform=="translateY(-150%)"  ? "0" : "-150%"})`;
}
const goToWordpress = ()=>{
    window.open('http://localhost/wordpress')
}
// const goTo = (destination)=>{
//     destination = document.querySelector(`${destination}`)
    
// }
const goToPrices = ()=>{
    if(window.innerWidth>1280){
        window.scroll(0,900);
    }
    else if(window.innerWidth>895){
        window.scroll(0,820);
    }
    else if(window.innerWidth > 695){
        window.scroll(0,980)
    }
    else if(window.innerWidth > 610){
        window.scroll(0,980)
    }
    else if(window.innerWidth > 550){
        window.scroll(0,940)
    }
    else if(window.innerWidth > 400){
        window.scroll(0,810)
    }
    else if(window.innerWidth > 330){
        window.scroll(0,750);
    }
    else{
        window.scroll(0,500)
    }
    // destination = document.querySelector('#features') Bardziej eleganckie podejście, trzeba byłoby pokombinować z eventami, np. żeby po zmianie rozdziałki nie było ich na raz pare :/
    // destination.addEventListener('click', window.scrollTo({top: destination.scrollHeight+250, behavior: 'smooth'}))
    zwijacz();
    console.log(window.innerWidth); //jest jeszcze window.innerWidth, gdzie screen width daje faktycznego ekranu.
}
const goToFeatures = ()=>{
    const destination = document.querySelector('#features')
    const scroll = window.scroll(0,0);
    destination.addEventListener('click', scroll)
    zwijacz()
}
const goToTwitter = ()=>{
    window.open('https://twitter.com')
}
const goToFacebook = ()=>{
    window.open('https://facebook.com')
}
const goToInstagram = ()=>{
    window.open('https://instagram.com')
}
let licznik = 0;
const openMenu = ()=>{
    const obiekt = document.querySelector("#nav-ul-phone");
    if(licznik === 0){
        obiekt.style.display = "flex";
        zwijacz(obiekt);
        licznik=1; 
        return;
    }
    else if(licznik === 1){
        zwijacz(obiekt);
        licznik = 0;
        // setTimeout(()=>{obiekt.style.display = "none"},900) Ta jedna linijka winiła problemom!
        return;
    }
}
    