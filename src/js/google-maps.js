/**
 * Projeto Burger Bachelor Maxican versão 1.0
 * @author Artur da Silva Rezende
 */

"use strict";

(()=>{

    window.onload = function() {
        
        let map = null;
        let content_map = "<p style='color: #dc3545; text-align: center; font-size: 16px; font-weight: bold;'>Estamos Aqui</p>"

        initialize();
        addMarker(-16.680519, -49.256130,'', content_map, true);
        //Podemos adicionar quantas marcas forem necessária

        function initialize(){

            let mapProp = {
                center: new google.maps.LatLng(-27.648598, -48.577423),
                scrollwheel: false, 
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP
                //mapTypeId: google.maps.MapTypeId.TERRAIN
                //mapTypeId: google.maps.MapTypeId.SATELLITE
            }

            map = new google.maps.Map(document.getElementById("mapa"), mapProp)
        }

        function addMarker(lat,long,icon,content, click){
            let latLng = {
                'lat': lat,
                'lng': long
            }

            let marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: icon
            });

            let infoWindow = new google.maps.InfoWindow({
                content: content,
                maxWidth: 200,
                pixelOffSet: new google.maps.Size(0,20)
            });

            if(click == true) {
                google.maps.event.addListener(marker, 'click', function(){
                    infoWindow.open(map,marker);
                });
            } else {
                infoWindow.open(map,marker);
            }
            
            infoWindow.open(map,marker);
        }

    }

})();