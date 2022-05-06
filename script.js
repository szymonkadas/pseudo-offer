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
let deviceType = test();
const goToWordpress = ()=>{
    window.open('http://localhost/wordpress')
}
const goToPrices = ()=>{
    deviceType = test();
    if(deviceType="desktop"){
        window.scroll(0,775);
    }
    else if(deviceType="tablet"){
        window.scroll(0,100);
    }
    console.log(deviceType);
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
        licznik++;
        return;
    }
    else if(licznik==1){
        obiekt.style.display = "none";
        licznik = 0;
        return;
    }
}
    