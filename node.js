(function(doc){
    var scriptElm = doc.scripts[doc.scripts.length - 1];
    var warn = ['[ionicons] Deprecated script, please remove: ' + scriptElm.outerHTML];
  
    warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')
  
    var parts = scriptElm.src.split('/');
    parts.pop();
    parts.push('ionicons');
    var url = parts.join('/');
  
    var scriptElm = doc.createElement('script');
    scriptElm.setAttribute('type', 'module');
    scriptElm.src = url + '/ionicons.esm.js';
    warn.push(scriptElm.outerHTML);
    scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptElm);
  
    
    scriptElm = doc.createElement('script');
    scriptElm.setAttribute('nomodule', '');
    scriptElm.src = url + '/ionicons.js';
    warn.push(scriptElm.outerHTML);
    scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptElm)
    
    console.warn(warn.join('\n'));
  
  })(document);

//*Scrolling Animation//*

  var slides = [1, 2, 3, 4];
  
  $.each(slides, function(index, value){
            
       $(document).scroll(function(){
           var offsetSection = $('#' + 'section_' + value).offset().top;
           var docScroll = $(document).scrollTop();
           var docScroll1 = docScroll + 1;
           
           if ( docScroll1 >= offsetSection ){
               $('li a').removeClass('active');
               $('li a:link').addClass('inactive');  
               $('li a').eq(index).addClass('active');
               $('li a:link').eq(index).removeClass('inactive');
           }  
       });
      $('li a').eq(index).click(function(e){
          var offsetClick = $('#' + 'section_' + value).offset().top;
          e.preventDefault();
          $('html, body').animate({
              'scrollTop':offsetClick
          }, 800) 
      });
  });
  
  $(document).ready(function(){
      $('li a:link').addClass('inactive');    
      $('li a').eq(0).addClass('active');
      $('li a:link').eq(0).removeClass('inactive');
  });