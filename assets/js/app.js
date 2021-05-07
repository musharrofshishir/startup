
// Circle


$('#circle1').circleProgress({
    value: 0.75,
    size: 120,
    thickness: 3,
    fill: { color: "#00a99d" },
    emptyFill:{ color: "rgba(255, 255, 255, 1)" }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
});

$('#circle2').circleProgress({
    value: 0.92,
    size: 120,
    thickness: 3,
    fill: { color: "#00a99d" },
    emptyFill:{ color: "rgba(255, 255, 255, 1)" }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(92 * progress) + '<i>%</i>');
});

$('#circle3').circleProgress({
    value: 0.68,
    size: 120,
    thickness: 3,
    fill: { color: "#00a99d" },
    emptyFill:{ color: "rgba(255, 255, 255, 1)" }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(68 * progress) + '<i>%</i>');
});

$('#circle4').circleProgress({
    value: 1.0,
    size: 120,
    thickness: 3,
    fill: { color: "#00a99d" },
    emptyFill:{ color: "rgba(255, 255, 255, 1)" }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
});

$('#circle5').circleProgress({
    value: 0.83,
    size: 120,
    thickness: 3,
    fill: { color: "#00a99d" },
    emptyFill:{ color: "rgba(255, 255, 255, 1)" }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(83 * progress) + '<i>%</i>');
});

$('#circle6').circleProgress({
    value: 0.50,
    size: 120,
    thickness: 3,
    fill: { color: "#00a99d" },
    emptyFill:{ color: "rgba(255, 255, 255, 1)" }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
});

// Counter 

$('.counter').counterUp({    
    time: 1200
});

// Carousel

$('.team-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        991:{
            items:3
        },
        1000:{
            items:4
        }
    }
})