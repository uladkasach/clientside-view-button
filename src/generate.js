module.exports = function(dom_clone, options){
    /*
        normalize input
    */
    if(typeof options == "undefined") options = {}; // just create empty options object if no options are passed.
    var element = dom_clone;

    /*
        promise to load the default css
    */
    load("./view.css");


    /*
        options.type functionality :  if the user wants the type of the button to be of one of the preset types, load it
    */
    if(options.type == "basic"){
        element.classList.add("clientside_view_button-basic");
    } else if(options.type == "call_to_action"){
        element.classList.add("clientside_view_button-call_to_action-base");
        element.classList.add("clientside_view_button-call_to_action-color");
    } else if(options.type == "text"){
        element.classList.add("clientside_view_button-text_button");
    }

    /*
        options.classes functionality
    */
    if(typeof options.classes != "undefined"){ // enable user to select array of classes to append to element
        if(typeof options.classes == "string") options.classes = [options.classes];
        if(Array.isArray(options.classes)){ // ensure that list is an array
            options.classes.forEach((class_name)=>{
                element.classList.add(class_name); // add each classname
            })
        } else {
            console.warn("options.classes passed to clientside_view_button generate was not an array. ignoring") // warn the user if datatype not valid
        }
    }

    /*
        define title of button
    */
    if(typeof options.title != "undefined") options.innerHTML = options.title;
    element.querySelector(".clientside_view_button-text").innerHTML = options.innerHTML;

    /*
        decide whether to center
    */
    if(options.center !== true){
        element.querySelector(".clientside_view_button-text").style.marginLeft = "0px";
        element.querySelector(".clientside_view_button-loading-position").style.marginLeft = "0px";
    }

    /*
        enable user defining button width
    */
    if(typeof options.style != "undefined"){
        if(typeof options.style.width == "string") element.style.width = options.style.width;
    }


    /*
        assign show functionality
    */
    element.dom = {
        active : element.querySelector(".clientside_view_button-active"),
        loading : element.querySelector(".clientside_view_button-loading")
    };
    element.show = function(type){
        this.style.display = "flex";
        if(type == "loading"){
            this.dom.active.style.visibility = "hidden";
            this.dom.loading.style.display = "flex";
        } else {
            this.dom.active.style.visibility = "visible";
            this.dom.loading.style.display = "none";
        }
    }
    element.hide = function(){
        this.style.display = "none";
    }

    return element;
}
