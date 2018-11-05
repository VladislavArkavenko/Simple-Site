//Button
document.querySelector(".scroll_button").onclick = function() {
    window.scroll({
        left: 0,
        top: document.querySelector(".scroll").scrollHeight,
        behavior: 'smooth'
    })
}

//Menu
let menu = document.querySelector('.menu')
document.querySelector('.logo').onclick = function() {
  if (menu.className === 'menu') {
      menu.className += " open";
  }
}
document.addEventListener('click', function(event) {
let isClickInside1 = document.querySelector('.menu.open').contains(event.target);
let isClickInside2 = document.querySelector('.logo').contains(event.target);
  if (!isClickInside1 && !isClickInside2) {
    menu.className  = "menu";
  }
});

//Map
function initMap() {
    let map = new google.maps.Map( document.getElementById('map'), {
        center: {
            lat: 49.448,
            lng: 33.049
        },
        zoom: 18,
        styles: [
           {
               "featureType": "administrative",
               "elementType": "all",
               "stylers": [
                   {
                       "color": "#dfdbd3"
                   }
               ]
           },
           {
               "featureType": "administrative",
               "elementType": "labels.text.fill",
               "stylers": [
                   {
                       "color": "#444444"
                   }
               ]
           },
           {
               "featureType": "administrative.province",
               "elementType": "geometry.fill",
               "stylers": [
                   {
                       "visibility": "off"
                   }
               ]
           },
           {
               "featureType": "landscape",
               "elementType": "all",
               "stylers": [
                   {
                       "color": "#282828"
                   }
               ]
           },
           {
               "featureType": "landscape.man_made",
               "elementType": "geometry.fill",
               "stylers": [
                   {
                       "color": "#282828"
                   }
               ]
           },
           {
               "featureType": "poi",
               "elementType": "all",
               "stylers": [
                   {
                       "visibility": "off"
                   },
                   {
                       "color": "#dfdbd3"
                   }
               ]
           },
           {
               "featureType": "road",
               "elementType": "all",
               "stylers": [
                   {
                       "saturation": -100
                   },
                   {
                       "lightness": 45
                   },
                   {
                       "color": "#383838"
                   }
               ]
           },
           {
               "featureType": "road.highway",
               "elementType": "all",
               "stylers": [
                   {
                       "visibility": "simplified"
                   }
               ]
           },
           {
               "featureType": "road.highway",
               "elementType": "geometry.fill",
               "stylers": [
                   {
                       "color": "#383838"
                   }
               ]
           },
           {
               "featureType": "road.highway.controlled_access",
               "elementType": "geometry.fill",
               "stylers": [
                   {
                       "color": "#383838"
                   }
               ]
           },
           {
               "featureType": "road.arterial",
               "elementType": "geometry.fill",
               "stylers": [
                   {
                       "color": "#383838"
                   }
               ]
           },
           {
               "featureType": "road.arterial",
               "elementType": "labels.icon",
               "stylers": [
                   {
                       "visibility": "off"
                   }
               ]
           },
           {
               "featureType": "road.local",
               "elementType": "geometry.fill",
               "stylers": [
                   {
                       "color": "#383838"
                   }
               ]
           },
           {
               "featureType": "transit",
               "elementType": "all",
               "stylers": [
                   {
                       "visibility": "off"
                   }
               ]
           },
           {
               "featureType": "water",
               "elementType": "all",
               "stylers": [
                   {
                       "visibility": "on"
                   },
                   {
                       "color": "#004044"
                   }
               ]
           }
        ]
    })
}