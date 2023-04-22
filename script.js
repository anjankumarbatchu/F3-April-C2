let btn=document.querySelector('.click');
let map=document.getElementById('map');
let latitudeObj = document.getElementById('lat');
let longitudeObj = document.getElementById('longi');
let pos=false;
function getLocation() {
    if (navigator.geolocation) {
        if(localStorage.getItem('lat')||localStorage.getItem('long')){
            pos=false;
            showPosition(pos);
        }
        else{
            pos=true;
             navigator.geolocation.getCurrentPosition(showPosition);

        }
        
    } else {
      map.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
   if(!pos){
   map.innerHTML="<iframe src='https://maps.google.com/maps?q="+localStorage.getItem('lat')+","+ localStorage.getItem('long')+"&z=15&output=embed' width='80%' height='200' frameborder='0' style='border:0'></iframe>";
   latitudeObj.innerHTML = localStorage.getItem('lat')
   longitudeObj.innerHTML = localStorage.getItem('long')
}
   else{
    localStorage.setItem('lat',position.coords.latitude);
    localStorage.setItem('long',position.coords.longitude);
    latitudeObj.innerHTML = position.coords.latitude;
    longitudeObj.innerHTML = position.coords.longitude;
    map.innerHTML = "<iframe src='https://maps.google.com/maps?q="+position.coords.latitude+","+ position.coords.longitude+"&z=15&output=embed' width='80%' height='200' frameborder='0' style='border:0'></iframe>";
  }
  }
btn.addEventListener('click',getLocation);

