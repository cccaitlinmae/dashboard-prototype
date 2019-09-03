$.ajax({
  url: "https://spreadsheets.google.com/feeds/list/1vzPjhUkw91WcOVjddorMeoKQ7yGT570tK4Cd_0XFcwA/od6/public/values?alt=json",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    var rows = result['feed']['entry'];
    var $div = $('.main-overview').addClass('');
  
    rows.forEach(function(row) {
    var trend = row['gsx$trendtitle']['$t']; // row.value
    var imgurl = row['gsx$imageurl']['$t'];
    var description = row['gsx$description']['$t'];
      $div.append('<div class="flip">'+ '<div class="front">'+'<div class="imagecard">' + '<img src ="' + imgurl + '"class="gallery__img">'
                  + '' + '<div class="titlecard">' + trend + '</div></div></div>' + '	<div class="back">' + '<h3>' + description + '</h3>' + '</div></div>')
  });
  }
});

$(function(){

    $(".flip").flip({
        axis: "x", // y or x
        reverse: true, // true and false
        trigger: "hover", // click, hover or manual
        speed: 500
    });

    setTimeout(function() {
        $('.flip').flip(true);
    },3000);
});

