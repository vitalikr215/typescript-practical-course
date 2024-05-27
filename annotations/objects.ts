const profile = {
  name: "alex",
  age: 20,
  coords :{
    lat: 0,
    lon: 15
  },
  setAge(_age: number){
    this.age = _age;
  }
}

//distructure age field from profile
const {age} : {age: number} = profile;
const  {coords:{lat, lon}} : {coords:{lat:number, lon:number}} = profile;
console.log({coords:{lat, lon}});
