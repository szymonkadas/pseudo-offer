function test(){
    const ua = navigator.userAgent;
    if (/(tablet|iPad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};
function zwijacz(target=document.querySelector("#nav-ul-phone")){
    target.style.transform=`translateY(${target.style.transform == "" || target.style.transform=="translateY(-150%)"  ? "0" : "-150%"})`;
}
let deviceType = test();
const goToWordpress = ()=>{
    window.open('http://localhost/wordpress')
}
const goToPrices = ()=>{
    const obiekt = document.querySelector("#nav-ul-phone");
    deviceType = test();
    if(deviceType="desktop"){
        window.scroll(0,1100);
    }
    else if(deviceType="tablet"){
        window.scroll(0,100);
    }
    zwijacz(obiekt);
    console.log(deviceType);
}
const goToFeatures = ()=>{
    window.scroll(0,0);
    const obiekt = document.querySelector("#nav-ul-phone");
    zwijacz(obiekt);
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
    else if(licznik==1){
        zwijacz(obiekt);
        licznik = 0;
        return;
    }
}
    