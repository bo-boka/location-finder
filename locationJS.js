$.getJSON("http://freegeoip.net/json/", function(data){
  $("#country").text(data.country_name);
  $("#city").text(data.city);
  $("#ip").text(data.ip);
  // var cc = ;
  $("#flag").addClass("flag-icon flag-icon-" + data.country_code.toLowerCase());

  var yourPosition = new google.maps.LatLng(data.latitude, data.longitude);
  var mapOptions = {
    zoom: 10, //REQUIRED
    center: yourPosition, //REQUIRED
    disableDefaultUI: true, //removes map icons
    styles: [{"stylers":[
      {"hue":"#ff1a00"},
      // {"invert_lightness":true},
      // {"saturation":-50},
      // {"lightness":25},
      // {"gamma":0.5}
    ]}]
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
});
