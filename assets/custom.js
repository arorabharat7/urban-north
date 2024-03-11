jQuery( document ).ready(function() {
      jQuery('.your-brand-slider').slick({
        autoplay: true,
        draggable: true,
        arrows: false,
        dots: false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
      responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
    
     jQuery('.product-slider').slick({
    autoplay: false,
    arrows: true,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    infinite: true,

  });

//     if(jQuery('#jvlabelWrapk').length > 0) {
//       jQuery('#jvlabelWrapk').on( "click", function() {
//         jQuery( ".hoverl_b520" ).trigger( "click" );
        
        
        
         
//       });
      
    //  jQuery('#jvlabelWrapk').on('click', function jivo_onOpen())
      
       
      
      
//    }
    
    
     if($('fieldset.form-options.form-options-swatches.variants-ui__swatches--last').length > 0){
    $( "fieldset.form-options.form-options-selectable-boxes" ).insertAfter( "fieldset.form-options.form-options-swatches.variants-ui__swatches--last" );
  }
    
    
    $('.modal-toggle').on('click', function(e) {
      e.preventDefault();
      $('.search-modal').toggleClass('is-visible');
    });
    
    
    
    
      if($('#modalVideo').length > 0){
    
    $('.download-toggle').on('click', function(e) {
      e.preventDefault();
      $('.download-modal').toggleClass('is-visible');
    });

    

    $(".video-close").click(function() {
    $("#modalVideo")[0].pause();
    return false;                   
});
    
    var modalVideo = document.getElementById("modalVideo");
    var close = document.getElementById("close");
    close.addEventListener("click",function(){
      modalVideo.pause();
    });

//     openModalBtn.addEventListener("click",function(){
//       modalVideo.play();
//     });
      }

    $(".fancybox").fancybox({
      type: "iframe",
      // other API options
    });


   
	});




 



                  

            
  