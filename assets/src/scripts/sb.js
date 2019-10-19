$(function ($) {

  const $body = document.querySelector('body');
  const $navToggle = $(".hamburger");
  const $navigation = $(".navigation");
  const $navigationMenu = $(".navigation__menu");
  const is_open = "is-active";
  const today = moment().format();
  let resizeEnd;

  /////////////////////////////////////////////////////////////////////////////
  // Initialise Ghost Hunter search
  /////////////////////////////////////////////////////////////////////////////

  function initSearch() {
    $("#search-field").ghostHunter({
      onKeyUp: true,
      results: "#results",
      includebodysearch: true,
      displaySearchInfo: false,
      result_template: "<a id='gh-{{ref}}' class='gh-search-item' href='{{link}}'><p>{{title}}</p></a>"
    });
  }

  /////////////////////////////////////////////////////////////////////////////
  // Initialise various components and helpers
  /////////////////////////////////////////////////////////////////////////////

  function initGlobalEvents() {

    window.addEventListener("resize", function() {
      clearTimeout(resizeEnd);
      resizeEnd = setTimeout( function() {
        resizeMenu();
      }, 5);
    });

    window.addEventListener("keyup", function(e) {
      if (e.keyCode === 27 && $nav.hasClass(is_open)) {
        $navToggle.click();
      }
    })

    window.addEventListener("orientationchange", function() {
      resizeMenu();
    });
  }

  /////////////////////////////////////////////////////////////////////////////
  // Form helpers
  /////////////////////////////////////////////////////////////////////////////

  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  /////////////////////////////////////////////////////////////////////////////
  // Navigation helpers
  /////////////////////////////////////////////////////////////////////////////

  function resizeMenu() {

  }

  // Used to prevent page becoming "fixed" while partly out of viewport on
  // trigger of mobile menu

  function resetScrollPosition() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }

  // Mobile navigation toggle

  $navToggle.on('click', function () {
    const $this = $(this);

    $this.toggleClass(is_open)
      .attr('aria-expanded') === 'true' ?
      $this.attr('aria-expanded', false) : $this.attr('aria-expanded', true);

    $navigation.toggleClass(is_open);
    $navigationMenu.attr("aria-hidden") === "true"
      ? $navigationMenu.attr("aria-hidden", false)
      : $navigationMenu.attr("aria-hidden", true);

  });

  /////////////////////////////////////////////////////////////////////////////
  // Run The Stuff...
  /////////////////////////////////////////////////////////////////////////////

  initGlobalEvents();
  initSearch();

});


