!function(t){function e(){t(".card-wrap").owlCarousel({autoplay:!1,rewind:!1,margin:20,dots:!1,responsiveClass:!0,smartSpeed:800,nav:!0,items:5,touchDrag:!1,mouseDrag:!1,responsive:{319:{items:2,margin:15},480:{items:3},768:{items:4},1364:{items:5}}}),t(".hero-slider").owlCarousel({autoplay:!0,loop:!0,margin:20,dots:!1,responsiveClass:!0,smartSpeed:800,nav:!0,items:2,autoWidth:!0,arrows:!1,touchDrag:!1,mouseDrag:!1,responsive:{319:{margin:0},576:{margin:20}}})}t(document).ready(function(){t(".nav-toggle").click(function(){t("body").toggleClass("sidebarMin")}),t(".btn-dark").click(function(){t("body").removeClass("light-theme")}),t(".btn-light").click(function(){t("body").addClass("light-theme")}),e(),t(".heart_logo").click(function(){t(this).hasClass("liked")?t(this).removeClass("liked"):t(this).addClass("liked")}),t("select").niceSelect(),t(".svgImg img").each(function(){var t=jQuery(this),e=t.attr("id"),i=t.attr("class"),a=t.attr("src");jQuery.get(a,function(a){var s=jQuery(a).find("svg");void 0!==e&&(s=s.attr("id",e)),void 0!==i&&(s=s.attr("class",i+" replaced-svg")),!(s=s.removeAttr("xmlns:a")).attr("viewBox")&&s.attr("height")&&s.attr("width")&&s.attr("viewBox","0 0 "+s.attr("height")+" "+s.attr("width")),t.replaceWith(s)},"xml")})}),t(window).on("resize",function(){e()})}(jQuery);