load("./styles.css");
module.exports = async function(element, options){
    // normalize input
    if(typeof options == "undefined") options = {}; // default to empty if none defined

    /*
        options.type defines what type of button this is
        enable user to select a type of button:
            - text
            - outline
            - contained

        The classes appended below define the operational structure of the elements
            - e.g., when to border, when to background, etc
    */
    if(typeof options.type == "undefined") options.type = "contained"; // default to most noticable
    if(["text","outlined","contained"].indexOf(options.type) == -1) throw new Error("button type is not valid");
    if(options.type == "text") element.classList.add('text_button');
    if(options.type == "outlined") element.classList.add('outlined_button');
    if(options.type == 'contained') element.classList.add('contained_button');

    /*
        define view button color scheme
    */
    if(options.color_scheme == "blue") options.color_scheme_class = "color_scheme-blue";
    if(options.color_scheme == "red") options.color_scheme_class = "color_scheme-red";
    var color_scheme_class = (typeof options.color_scheme_class == "string")? options.color_scheme_class : "color_scheme-blue"; // default to blue class
    element.classList.add(color_scheme_class);

    /*
        enable floating_action_button
    */
    if(options.floating === true || options.float === true) element.classList.add('floating_action_button');

    /*
        define title/innerHTML of button
    */
    if(typeof options.text != "undefined") options.innerHTML = options.text;
    if(typeof options.title != "undefined") options.innerHTML = options.title; // TODO - deprecate this
    element.querySelector(".clientside_view_button-text_container").innerHTML = options.innerHTML;

    /*
        decide whether to center; default to align-left
    */
    if(options.center != true && options.center != "true"){
        element.querySelector(".clientside_view_button-active_container").style.marginLeft = "0px";
        element.querySelector(".clientside_view_button-loading-position").style.marginLeft = "0px";
    }

    /*
        define font size if requested
    */
    console.log(typeof options.font_size == "string");
    if(typeof options.font_size == "string") element.style.fontSize = options.font_size;

    /*
        enable user defining button width
    */
    if(typeof options.style != "undefined"){
        if(typeof options.style.width == "string") element.style.width = options.style.width;
    }

    // return the element
    return element;
}
