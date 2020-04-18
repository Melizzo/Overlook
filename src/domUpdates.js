import $ from 'jquery';


const domUpdates = { 
    togglePage(showPage, hidePage) {
        $(showPage).toggle("hidden")
        $(hidePage).toggle("hidden")
    }

}
export default domUpdates;