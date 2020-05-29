
$(document).ready(function(){
    htmlLoad("header", "./html/header.html"); 
    htmlLoad("#mainContent", "./html/dashboard.html"); 
    htmlLoad("#mainHead", "./html/pagehead.html"); 
 });

function htmlLoad(selector, htmlPath) { 
    $(selector).load(htmlPath, function() {
        targetTitle(); 
        pageLoad(); 
        headerToggleBtn(); 
        // scrollbar(); 
    }); 
}

// function scrollbar() { 
//     $('#header').mCustomScrollbar({
//         theme:"minimal"
//     })
// }

function dialog(elem) { $(elem).addClass('on') }
function dialogOff(elem) { $(elem).removeClass('on') }

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

        let boxWidth = $(window).width()
        if( boxWidth < 1200 ) { 
            $('#header').removeClass('show'); 
            $('#brick').removeClass('show');
        }

        let linkText = $(this).text(); 
        console.log("value",linkText); 
        $('#headerTitle').text(linkText); 
    })
}

function headerToggleBtn() { 

    var resizeId;
    $(window).resize(function(e){    
        clearTimeout(resizeId);
        resizeId = setTimeout(function() {
            Chart.helpers.each(Chart.instances, function(instance) {
                // console.log("CALL headerToggleBtn")
                instance.chart.resize();
            });
        }, 500);
        let boxWidth = $(window).width(); 
        if($('header').hasClass('show')) {
            boxWidth >= 1200 ? $('#brick').removeClass('show') : $('#brick').addClass('show') 
        }
    })

    $('#headerHideBtn').click(function(e){ 
        $('#header').removeClass('show');
        $('#brick').removeClass('show');
    })

    $('#headerShowBtn').click(function(e){
        $('#header').addClass('show');
        $('#brick').addClass('show');
    })   
}

