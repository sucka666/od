(function() {
  jQuery(function() {
    $("#login_form ").on("submit", function(e) {
      var form, href;
      e.preventDefault();
      form = $(this).serialize();
      href = $(this).attr("action");
      $.ajax({
        type: "POST",
        url: href,
        data: form,
        success: function(response) {
          if (response.success === 1) {
            return $("p.error:first").html(response.message + ' ' + response.user);
          } else {
            $("p.error:first").html(response.message);
          }
        }
      });
    });
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });
    xs=$('#sidebar-wrapper').height()-652;
	if(xs<0){
	    xs=0;
	}
	$("#sidebar-wrapper .pull-bot").css({'height':xs});
  });

}).call(this);


jQuery.expr.filters.offscreen = function(el) {
  return (
              (el.offsetLeft + el.offsetWidth) < 0 
              || (el.offsetTop + el.offsetHeight) < 0
              || (el.offsetLeft > window.innerWidth || el.offsetTop > window.innerHeight)
         );
};


(function($) {

    function reCalc() {
        var lfh = $(window).height();
		var lfh2 = lfh - 48;
        $('#life .innerr').height(lfh2);
        $('#sidebar-wrapper').height(lfh);
		$('.toolbar-wu-el .inner').height(lfh);
		if(lfh<653){
		$('#logo').attr('id','h-logo');
		}else{
		$('#h-logo').attr('id','logo');
		}
	if($("#mesages-notification").is(":offscreen")){
		//alert('test/ invisible/ to do scroll');
		}
        xs=$('#sidebar-wrapper').height()-652;
	    if(xs<0){
	        xs=0;
	    }
	    $("#sidebar-wrapper .pull-bot").css({'height':xs});
    }

    $(window).resize(reCalc);

    var mscroll = false;
    var lfscroll = false;
	var tscroll = false;
	var tpscroll = false;
	
	
    $(document).ready(function() {
        reCalc();
        mscroll = $("html").niceScroll({styler: "main"});
        lfscroll = $("#life .innerr").niceScroll({styler: "life"});
		tscroll = $("#sidebar-wrapper").niceScroll();
		toolobj= $("#sidebar-wrapper").getNiceScroll();
		toolobj[0].hide();
		tpscroll = $(".toolbar-wu-el .inner").niceScroll({styler: "main"});
		
//kill toolbar panels
	$("#dimm-overlay").click(function() {
				idy = $("#sidebar-wrapper").find('.active').first().attr('id');
				idz = $("#toolbar-windows").find('.active').first().attr('id');
				$("#dimm-overlay").hide(1);
			    $("a#" + idy).removeClass('active');
				$("#" + idz).removeClass('active');
                $("#" + idz).hide(1);
});	
		
//start toolbar butt
$("#sidebar-wrapper a.ico-w").click(function() {
				idw = $(this).attr("id");
				idy = $("#sidebar-wrapper").find('.active').first().attr('id');
				idz = $("#toolbar-windows").find('.active').first().attr('id');
				idi = idw.replace('-li', '-wu');
				
				$("#" + idi).toggleClass('active');
                $("a#" + idw).toggleClass('active');
                $("#dimm-overlay").toggle(1);
				$("#" + idi).toggle(1);
				
				if (idw !== idy) {
				$("#dimm-overlay").show(1);
			    $("a#" + idy).removeClass('active');
				$("#" + idz).removeClass('active');
                $("#" + idz).hide(1);
				}
				return false;
});


        $('#lon').click(function() {
            $("#wrapper").toggleClass("active-feed");
            $("body").toggleClass("active-feed");
            if ($("#wrapper").hasClass("active-feed")) {
                $.cookie("life_state", 1);
            } else {
                $.cookie("life_state", 0);
            }
            return false;
        });
		


    });

    $(window).load(function() {

        $("#loader").remove();
    });
}(jQuery));


function BookMark() {

    title = document.title;
    url = document.location.href;
    alerttext = 'Press Control + D to bookmark';
    worked = false;
    alerted = false;
    try {
        window.sidebar.addPanel(title, url, "");
        worked = true;
    } catch (err) {
        if (!worked && !alerted) {
            alert(alerttext);
            alerted = true;
        }
    }
    try {
        window.external.AddFavorite(url, title);
        worked = true;
    } catch (err) {
        if (!worked && !alerted) {
            alert(alerttext);
            alerted = true;
        }
    }
    try {
        window.external.AddFavorite(title, url, "");
        worked = true;
    } catch (err) {
        if (!worked && !alerted) {
            alert(alerttext);
            alerted = true;
        }
    }

    if (!worked && !alerted) {
        alert(alerttext);
    }
}


function AddSearch() {
    if (window.external && ('AddSearchProvider' in window.external)) {
        window.external.AddSearchProvider("http://www.arkust.com/opensearch.xml");
    }
    else {
        alert("Your browser does not support the AddSearchProvider method!");
    }
}
