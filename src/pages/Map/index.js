/**
 * Created by Daphne on 04.01.2017.
 */
import React from 'react';
import './style.css';


class Map extends React.Component {

    componentDidMount = () => {
        window.initMap = this.initMap;
        if(!document.getElementById('googlemap')){
            const script = document.createElement("script");
            script.id = 'googlemap';
            script.async = true;
            script.defer = true;
            script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBMb8aS2DL4dU-59cb7j_5uDEek0Vy7n7E&callback=initMap";
            document.body.appendChild(script);
        } else {this.initMap()};
    }

     initMap = () => {
            const hedrumKirke = {lat: 59.12322169999999, lng: 10.059034800000063};
            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: hedrumKirke
            });
            //HedrumKirke
            const marker1 = new window.google.maps.Marker({
                position: {lat: 59.12322169999999, lng: 10.059034800000063},
                title: 'Hedrum kirke'
            })
            const infowindow1 = new window.google.maps.InfoWindow({
                content: '<div class="infoWindow"><h2>Hedrum kirke</h2><p>kriken de gifter seg i</p></div>'
            });
            marker1.setMap(map);
            marker1.addListener('click', function() {
                infowindow2.close(map, marker2);
                infowindow1.open(map, marker1);

            });
            //AspargesGarden
            const marker2 = new window.google.maps.Marker({
                position: {lat: 59.047309, lng: 10.124072999999953},
                title: 'Aspargesgården'
            })
            const infowindow2 = new window.google.maps.InfoWindow({
                content: '<div class="infoWindow"><h2>Aspargesgården</h2></div>'
            });
            marker2.setMap(map);
            marker2.addListener('click', function() {
                infowindow1.close(map, marker1);
                infowindow2.open(map, marker2);
            });


  
     }
    
    render() {
        return (
            <div className='mapContent'>
                <div id="map" className="map" />
            </div>
        );
    }

    
}
export default Map;
