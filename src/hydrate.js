module.exports = function(element, options){
    /*
        assign show functionality
    */
    var dom = {
        active : element.querySelector(".clientside_view_button-active_container"),
        loading : element.querySelector(".clientside_view_button-loading_container")
    }
    element.show = function(type){
        this.style.display = "flex";
    }
    element.hide = function(){
        this.style.display = "none";
    }

    /*
        state modifiers
    */
    element.state_modifiers = {
        set_loading_state : function(state_is_active){
            if(state_is_active){
                dom.active.style.visibility = "hidden";
                dom.loading.style.display = "flex";
            } else {
                dom.active.style.visibility = "visible";
                dom.loading.style.display = "none";
            }
        },
        set_disabled_state : function(state_is_active){
            if(state_is_active){
                console.error("disabled state is to be implemented");
            }
        },
    }
    element.set_state = function(state){
        this.state_modifiers.set_loading_state(state=="loading"); // display loading if requested
        this.state_modifiers.set_disabled_state(state=="disabled"); // display disabled if requested
    }

    // return element
    return element;
}
