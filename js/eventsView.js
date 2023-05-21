
import {createCountry, findByCodeName, seaerch} from "./bodyManeger.js";
export const declareEvents=()=>{
    let searchBtn=document.querySelector("#searchBtn");
    searchBtn.addEventListener('click',()=>{
        document.querySelector("#parent").innerHTML="";
       let searchInput=document.querySelector("#inputId");
       seaerch(searchInput.value);
    })
    
    let a_ar=document.querySelectorAll(".nav-item");
    a_ar.forEach(element => {
        element.addEventListener("click",function(e){
            document.querySelector("#parent").innerHTML="";  
           createCountry([findByCodeName(e.target.id)],true);
        })
    });
    
}

