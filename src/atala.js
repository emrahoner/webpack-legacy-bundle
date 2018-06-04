if(jQuery) {
    console.log(`JQuery : ${jQuery ? "LOADED" : "NOT LOADED"} , Version : ${jQuery.fn.jquery}`);    
    console.log(`JQuery-ui : ${jQuery.ui ? "LOADED" : "NOT LOADED"} , Version : ${jQuery.ui.version}`);
    console.log(`JQuery-easing : ${jQuery.easing ? "LOADED" : "NOT LOADED"}`);
    console.log(`JQuery-fileupload : ${jQuery.fn.fileupload ? "LOADED" : "NOT LOADED"}`);
    console.log(`Bootstrap : ${jQuery.fn.tooltip ? "LOADED" : "NOT LOADED"}`);
    console.log(`Respond.js : ${respond ? "LOADED" : "NOT LOADED"}`);
    console.log(`Raphael.js : ${Raphael ? "LOADED" : "NOT LOADED"}`);
} else {
    console.log("JQuery is not defined.");
}
