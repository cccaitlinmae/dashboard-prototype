$.ajax({
  url: "https://spreadsheets.google.com/feeds/list/1vzPjhUkw91WcOVjddorMeoKQ7yGT570tK4Cd_0XFcwA/od6/public/values?alt=json",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    var rows = result['feed']['entry'];
    var $div = $('.main-overview').addClass('');
  
    rows.forEach(function(row) {
    var trend = row['gsx$trendtitle']['$t']; 
    var imgurl = row['gsx$imageurl']['$t'];
      
      var $card = $('<div class="imagecard">' + '<img src ="' + imgurl + '"class="gallery__img">'
                  + '' + '<div class="titlecard">' + trend + '</div></div></div>')
      $div.append($card) 
      
      $('.imagecard').hover(function(){
      $(this).addClass('animated pulse')
      } ,function(){
      $(this).removeClass('animated pulse');
});
      
      $('.main-overview').addClass('animated').addClass('slideInUp')
      $('.logo').addClass('animated').addClass('fadeIn').addClass('delay-1s')
      $('.footer__copyright').addClass('animated').addClass('fadeIn').addClass('delay-1s')
      $('#day').addClass('animated').addClass('lightSpeedIn').addClass('delay-1s')
    });
    
  //var $cards =  $('.imagecard').addClass('');
   // $($cards[0]).addClass('animated').addClass('bounceIn').on('animationend', function() {
   //  $($cards[1]).addClass('animated').addClass('bounceIn').addClass
   // });
  //  console.log($cards[0])
  }
});


