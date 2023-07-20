/* //Initialize and add the map
function iniMap() {
    //Your location
    const loc  = { lat:25.728821, lng: -100.167976};
    //Centered map on location
    const map = new google.maps.Map(document.getElementsByClassName('map'), {
        zoom: 4,
        center: loc   
    }); 
    // the marker, posssitioned at location
    const marker = new google.maps.Marker({ position: loc, map:
        map});
} */


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){
    if (this.hash !==''){
        event.preventDefault();

        const hash = this.hash;
        $('html, body').animate(
            {
                scrolltop: $(hash).offset().top - 100
            },
            800
        );
    }
});