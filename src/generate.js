load("./styles.css");
module.exports = function(element, options){
    // normalize input
    if(typeof options == "undefined") options = {}; // default to empty if none defined

    /*
        options.type
        enable user to select a type of button:
            - basic
            - call to action (more apparent colors)
            - text
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
        options.classes
        enable user to define a dynamic set of classes to append
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
        define title/innerHTML of button
    */
    if(typeof options.title != "undefined") options.innerHTML = options.title;
    element.querySelector(".clientside_view_button-text").innerHTML = options.innerHTML;

    /*
        decide whether to center; default to align-left
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

    // return the element
    return element;
}
