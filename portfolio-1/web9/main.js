$(function(){
    getLocation();
});
function getLocation(){
    if(navigator.geolocation==undefined){
        alert("Fail to get location");
        return;
    }
    let settings ={
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(result, error, settings);
}
function result(position){
    let thisCoords=position.coords;
    console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`);
    window.location.href= `https://maps.google.com.tw?q=${thisCoords.latitude},${thisCoords.longitude}`;
}
function error(err){
    alert(err);
}