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
const goToPrices = ()=>{
    const obiekt = document.querySelector("#nav-ul-phone");
    if(window.innerWidth>1280){
        window.scroll(0,800);
    }
    else if(window.innerWidth<1280&&window.screen.width>895){
        window.scroll(0,820);
    }
    else{
        window.scroll(0,22000);
    }
    zwijacz(obiekt);
    console.log(window.innerWidth);
}
const goToFeatures = ()=>{
    window.scroll(0,0);
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
    if(licznik == 0){
        obiekt.style.display = "flex";
        zwijacz(obiekt);
        licznik++; 
        return;
    }
    else if(licznik!=0){
        zwijacz(obiekt);
        licznik = 0;
        setTimeout(()=>{obiekt.style.display = "none"},900)
        return;
    }
}
    