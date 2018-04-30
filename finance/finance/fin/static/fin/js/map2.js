function initMap2() {
        var uluru = {lat: 35.7796, lng: -78.6382};
        var map2 = new google.maps.Map(document.getElementById('map2'), {
          zoom: 7,
          center: uluru
        });
        var markersecond = new google.maps.Marker({
          position: uluru,
          map: map2,
        });
}
