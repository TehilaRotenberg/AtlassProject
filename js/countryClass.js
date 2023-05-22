
import { ObjectToString, doApi, findByCodeName } from "./bodyManeger.js";
export default class CountryClass{
    constructor(_parent,_item){
      
      this.parent=_parent;
      this.countryName=_item.name.common;
      this.flags=_item.flags;
      this.population=_item.population;
      this.languages=_item.languages;
      if(_item.hasOwnProperty('currencies')){
        this.coins=_item.currencies;
      }else{
        this.coins=["-"];
      }
      this.region=_item.region;
      this.lat=_item.latlng[0];
      this.lon=_item.latlng[1];
    if(_item.hasOwnProperty('capital')){
      this.capital=_item.capital[0];
    }else{
      this.capital="-"
    }
    this.borders=_item.borders;
    }

    render(){
      let div=document.createElement("div");
    
     
        // ObjectToString(this.languages);
        div.classList="row border center country bg-light";
        console.log(div);
        div.innerHTML=`
        <div class=" col center ">
        <img src="${this.flags.png}" alt="${this.flags.alt}">
        </div>
        <div  class="col row center">
        <h2>${this.countryName}</h2>
        <div><b>population:</b> ${this.population}</div>
        <div><b>region:</b> ${this.region}</div>
        <div><b>Languages:</b> ${ObjectToString(this.languages)}</div>
        <div><b>Coins:</b>${Object.keys(this.coins)[0]}, ${Object.values(this.coins)[0].name}</div>
        <div><b>capital:</b> ${this.capital}</div>
        <div class="link"><b>borders:</b> </div>
        
        </div>
        <iframe class="row m-3 center" src="https://www.google.com/maps?q=${this.lat},${this.lon}&z=3&amp;output=embed"  height="450" style="border:0;" allowfullscreen="" loading="lazy"referrerpolicy="no-referrer-when-downgrade" ></iframe>`;
       
        let links=div.querySelector(".link")
        this.borders.forEach(element => {
          let link=document.createElement("a");
          link.innerHTML=element;
      //  link.className="m-2"
          link.setAttribute("herf","#");
          links.append(link);
          link.classList="m-2"

          link.addEventListener("click",function(e){
                document.querySelector(this.parent).innerHTML="";
                findByCodeName(element);
          }.bind(this))
        });
        
        document.querySelector(this.parent).append(div);
        let map=document.createElement("div");
        
        document.querySelector(this.parent).append(map);
        map.innerHTML=``;

}


renderCardContry(){
  let div=document.createElement("div");
  div.classList="card col-md-3 m-2";
  div.innerHTML=` <img src="${this.flags.png}" class="card-img-top" alt="${this.flags.alt}">
  <h3 class="card-title text-center">
      ${this.countryName.toUpperCase}
  </h3>`;
}



}