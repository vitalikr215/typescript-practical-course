/// <reference types="@types/google.maps" />

/**instruction for other classes what properties should they have to be able to
add markers*/
export interface Mappable{
  location : {
    lat: number,
    lon: number
  }

  markerContent(): string
}

export class CustomMap{
  private googleMap: google.maps.Map;
  
  constructor(elementID: string){
    this.googleMap = new google.maps.Map(document.getElementById(elementID) as HTMLElement, {
      zoom:12,
      center: { lat: 48.46764446564062, lng: 35.054582849243744}
    });
  }

  addMarker(mappable: Mappable):void{
    const marker = new google.maps.Marker({
      map: this.googleMap,
      /*label: {
        color: "black",
        text: user.name
      },*/
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lon
      }
    });

    marker.addListener('click', ()=>{
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}