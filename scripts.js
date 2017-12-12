function initMap(){
  navigator.geolocation.getCurrentPosition(function(pos){
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;
    var center = {lat: lat, lng: lng};
    weather(lat, lng);

    var map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 9
    });

    var marker = new google.maps.Marker({
      position: center,
      map: map
    });
  })



} // end initMap()


function weather(lat, lng){
  $.ajax({
    url: `https://api.darksky.net/forecast/2fa92d782a3ffeaae383387750908f6c/${lat},${lng}`,
    dataType: 'jsonp',
    success: function(data){
      $('#cSum em').text(data.currently.summary);
      $('#cTemp em').text(data.currently.temperature);
      $('#cPercip em').text(data.currently.percipProbability);
      $('#windBearing em').text(data.currently.windBearing);
      $('#windGust em').text(data.currently.windGust);
      $('#windSpeed em').text(data.currently.windSpeed);
      $('#overAll').text(data.hourly.summary);
      // console.log(data);
    }
  });

}
