import CountryClass from "./countryClass.js";

export let local_ar=[]

export const doApi = async(filter) => {
    //   document.querySelector("#id_parent").innerHTML="";
      let url = `https://restcountries.com/v3.1/${filter}`;
      let resp = await fetch(url);
      console.log(resp);
      let data = await resp.json();
      
      if(filter!="all"){
        createCountry(data);
      }else{
        local_ar=data;
      }

}

export const createDefultArray=(codeCountries)=>{
 document.querySelector("#parent").innerHTML="";  
 let countries=[];
 codeCountries.forEach(element=>{
  findByCodeName(element);
    
 })
}


export const seaerch=(_text)=>{
    let country=local_ar.filter(e=>includesText(e,_text));
    console.log(country);
    createCountry(country,false);
}

export const createCountry=(_ar)=>{
    _ar.forEach(element => {
    let country=new CountryClass("#parent",element);
    country.render();

   
});

}
 
function includesText(_item,_text){
    console.log(_text);
    _text=_text.toLowerCase();
    let name=_item.name.common.toLowerCase();
    return name.includes(_text);
}

export const ObjectToString=(obj)=>{
   let str="";
    for(const prop in obj){
        if (Object.hasOwn(obj, prop)) {
            str=str.concat(obj[prop]+", ");
             } 
        }
        str=str.slice(0,str.length-2);
       return str;
}

export const findByCodeName=(codeName)=>{
    let filter=`alpha/${codeName}`;
    doApi(filter);
}






