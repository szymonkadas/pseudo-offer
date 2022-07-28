function zwijacz(mode, target=document.querySelector('#nav-ul-phone')){
    if(mode == 2){
        target.style.transform='translateY(-150%)';
        target.style.height = '0px';
    }
    else{
        target.style.height = `${target.style.height == '200px' ? '0px' : '200px'}`;
        target.style.transform=`translateY(${target.style.transform == '' || target.style.transform=='translateY(-150%)'  ? '0': '-150%'})`;
        if(target.style.transform == 'translateY(-150%)'){
            target.style.visibility = 'hidden';
        }
        else{
            target.style.visibility = 'visible';
        }
    }
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
    if(licznik === 0){
        zwijacz();
        licznik = 1; 
        return;
    }
    else if(licznik === 1){
        zwijacz();
        licznik = 0;
        return;
    }
}
let mobile;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    mobile = true; 
  }else{
    // false for not mobile device
    mobile = false;
  }

const rozwin = document.querySelector('#rozwin');
const main = document.querySelector('main');
if (mobile == true){
    rozwin.addEventListener('touchstart', openMenu);
    main.addEventListener('touchstart', ()=> zwijacz(mode=2));
}
else{
    rozwin.addEventListener('click', openMenu);
    main.addEventListener('click', ()=> zwijacz(mode=2));
}
