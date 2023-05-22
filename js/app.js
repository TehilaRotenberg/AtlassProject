
import { createDefultArray, doApi, findByCodeName, local_ar   } from "./bodyManeger.js";
import { declareEvents } from "./eventsView.js";
const codeCountries=["USA","IL","FR","TH"];
let arr;
const init=()=>{
createDefultArray(codeCountries);
declareEvents();
document.querySelector("#parent").innerHTML="";
}


init();