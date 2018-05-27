module.exports = function(dom, options){
    /*
        assign show functionality
    */
    element.dom = {
        active : element.querySelector(".clientside_view_button-active"),
        loading : element.querySelector(".clientside_view_button-loading")
    }
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

    // return element
    element
}
