
$(document).ready(function(){
    htmlLoad("header", "./html/header.html"); 
    htmlLoad("#mainContent", "./html/transMng.html"); 
    htmlLoad("#mainHead", "./html/pagehead.html"); 
 });

function htmlLoad(selector, htmlPath) { 
    $(selector).load(htmlPath, function() {
        targetTitle(); 
        pageLoad(); 
        headerToggleBtn(); 
        currentPage(); 
    }); 
}

function targetTitle() { 
    $('a span').each(function(i, textVal){    
        let text = $(textVal).text(); 
        $(textVal).parent().attr('title', text); 
    }); 
}

let currentActiveAnchor

function pageLoad() { 
    $('#headerMenu a').click(function(e){
        e.preventDefault; 
        let linkAddress = $(this).attr('data-address'); 
        console.log("href",linkAddress); 
        linkAddress ? $('#mainContent').load('./html/'+linkAddress) : false; 
        
        if(currentActiveAnchor) $(currentActiveAnchor).removeClass('active'); 
        console.log(currentActiveAnchor); 
        $(this).addClass('active'); 
        currentActiveAnchor = $(this); 

        let linkText = $(this).text(); 
        console.log("value",linkText); 
        $('#headerTitle').text(linkText); 
    })
}

function currentPage() { 
    let boxWidth = $(window).width()
    if( boxWidth >= 1425 ) { 
        $('header').removeClass('off'); 
        $('main').removeClass('full-screen');
        $('#headerShowBtn').addClass('hidden'); 
    }else if( boxWidth < 1425 ) { 
        $('header').addClass('off'); 
        $('main').addClass('full-screen');
        $('#headerShowBtn').removeClass('hidden'); 
    }
}

function headerToggleBtn() { 

    $(window).resize(function(e){    
        let boxWidth = $(window).width()
        if( $('header:not(.off)')) return; 
        if( boxWidth >= 1425 ) { 
            $('header').removeClass('off'); 
            $('main').removeClass('full-screen');
            $('#headerShowBtn').addClass('hidden'); 
        }else if( boxWidth < 1425 ) { 
            $('header').addClass('off'); 
            $('main').addClass('full-screen');
            $('#headerShowBtn').removeClass('hidden'); 
        }
    })

    $('#headerHideBtn').click(function(e){
        let boxWidth = $(window).width()
        if(boxWidth >= 1425) { 
            $('header').addClass('off'); 
            $('main').addClass('full-screen');
            $('#headerShowBtn').removeClass('hidden'); 
        }else if(boxWidth < 1425) { 
            $('header').addClass('off'); 
            $('.brick').addClass('hidden');
        }
    })

    $('#headerShowBtn').click(function(e){
        let boxWidth = $(window).width()
        if(boxWidth >= 1425) { 
            $('header').removeClass('off'); 
            $('main').removeClass('full-screen');
            $('#headerShowBtn').addClass('hidden'); 
        }else if(boxWidth < 1425){
            $('header').removeClass('off'); 
            $('main').removeClass('full-screen');
            $('.brick').removeClass('hidden');
        }
    })

   
}

