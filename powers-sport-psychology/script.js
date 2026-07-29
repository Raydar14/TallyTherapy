/* ============================================================
   POWERS OF SPORT PSYCHOLOGY — shared header + footer + behaviour
   Edit the menu / footer / contact info ONCE here and every page updates.
   ============================================================ */
(function(){
  /* Google Analytics 4 — matches Powers of Mind so bookings roll up in one account */
  (function(){
    var g=document.createElement("script"); g.async=1;
    g.src="https://www.googletagmanager.com/gtag/js?id=G-MYSWPPB8FZ";
    document.head.appendChild(g);
  })();
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", "G-MYSWPPB8FZ");

  /* Microsoft Clarity — heatmaps & session analytics */
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "xhh3akq8gm");

  /* Region soft-block — US & Costa Rica only; fails open on lookup error */
  (function(){
    var ALLOWED = { US:1, CR:1 };
    function block(){
      var o = document.createElement("div");
      o.id = "geo-block";
      o.innerHTML = '<div class="gb-card">'+
        '<h1>Not available in your region</h1>'+
        '<p>We are sorry, but Powers of Sport Psychology is only available in the United States and Costa Rica.</p>'+
        '</div>';
      (document.body || document.documentElement).appendChild(o);
      if(document.body){ document.body.style.overflow = "hidden"; }
    }
    try{
      fetch("https://get.geojs.io/v1/ip/country.json")
        .then(function(r){ return r.json(); })
        .then(function(d){
          var c = ((d && (d.country || d.country_code)) || "").toUpperCase();
          if(c && !ALLOWED[c]){ block(); }
        })
        .catch(function(){ /* fail open */ });
    }catch(e){ /* fail open */ }
  })();

  var BOOK = "https://powersofmind.clientsecure.me/";
  var SMS  = "sms:8508079801";
  var TEL  = "tel:8508079801";
  var EMAIL = "info@drpowerstherapy.com";

  /* Conversion signals -> GA4 + dataLayer */
  function track(name){
    window.dataLayer.push({event:name});
    if(typeof gtag === "function"){ gtag("event", name); }
  }
  document.addEventListener("click", function(e){
    var a = e.target.closest ? e.target.closest("a") : null; if(!a){ return; }
    var href = a.getAttribute("href") || "";
    if(href.indexOf("clientsecure.me") > -1){ track("book_click"); }
    else if(href.indexOf("sms:") === 0){ track("text_click"); }
    else if(href.indexOf("tel:") === 0){ track("call_click"); }
  });

  /* Brand mark — chevron rising over a target ring, in navy + gold */
  var MARK =
    '<svg viewBox="0 0 120 120" aria-hidden="true">'+
      '<circle cx="60" cy="60" r="52" fill="none" stroke="#F5B72C" stroke-width="4"/>'+
      '<circle cx="60" cy="60" r="34" fill="none" stroke="#F5B72C" stroke-width="2.5" opacity=".55"/>'+
      '<circle cx="60" cy="60" r="8" fill="#F5B72C"/>'+
      '<path d="M32,80 L60,44 L88,80" fill="none" stroke="#0B1B2C" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'+
      '<path d="M32,80 L60,44 L88,80" fill="none" stroke="#F5B72C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>'+
    '</svg>';

  var pages = [
    ["index.html","Home"],
    ["what-is-mental-performance.html","What Is Mental Performance"],
    ["mp-vs-mental-health.html","Performance vs. Mental Health"],
    ["ashlyn.html","Ashlyn Hulsey"],
    ["paige.html","Paige Strate-Lutzow"],
    ["services.html","Services & Pricing"],
    ["contact.html","Contact"]
  ];

  var teamLinks = [
    ["ashlyn.html","Ashlyn Hulsey, PhD, CMPC"],
    ["paige.html","Paige Strate-Lutzow, M.S."]
  ];

  var path = location.pathname.split("/").pop();
  if(!path){ path = "index.html"; }
  var inTeam = teamLinks.some(function(s){ return s[0]===path; });
  function ac(file){ return path===file ? ' class="active"' : ''; }

  var teamDrop = teamLinks.map(function(s){ return '<a href="'+s[0]+'">'+s[1]+'</a>'; }).join("");

  var header =
  '<header id="top"><div class="container nav">'+
    '<a href="index.html" class="brand"><span class="mark">'+MARK+'</span><span>Powers of Sport Psychology<small>Mental Performance &middot; Tallahassee</small></span></a>'+
    '<nav class="nav-links" id="navLinks">'+
      '<a href="index.html"'+ac("index.html")+'>Home</a>'+
      '<a href="what-is-mental-performance.html"'+ac("what-is-mental-performance.html")+'>What Is Mental Performance</a>'+
      '<a href="mp-vs-mental-health.html"'+ac("mp-vs-mental-health.html")+'>Performance vs. Mental Health</a>'+
      '<div class="has-drop">'+
        '<a href="#" class="drop-toggle'+(inTeam?' active':'')+'">Team <span class="caret">&#9662;</span></a>'+
        '<div class="dropdown-menu">'+teamDrop+'</div>'+
      '</div>'+
      '<a href="services.html"'+ac("services.html")+'>Services &amp; Pricing</a>'+
      '<a href="contact.html"'+ac("contact.html")+'>Contact</a>'+
      '<a class="btn btn-ghost nav-book-m" href="'+SMS+'">Text Us</a>'+
      '<a class="btn btn-primary nav-book-m" href="'+BOOK+'" target="_blank" rel="noopener">Book a Session</a>'+
    '</nav>'+
    '<div class="nav-cta">'+
      '<a class="btn btn-primary" href="'+BOOK+'" target="_blank" rel="noopener">Book a Session</a>'+
      '<button class="hamburger" id="hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>'+
    '</div>'+
  '</div></header>';

  var footer =
  '<footer><div class="container">'+
    '<div class="foot-grid">'+
      '<div class="foot-col foot-brand">'+
        '<a href="index.html" class="brand"><span class="mark">'+MARK+'</span><span>Powers of Sport Psychology<small>Mental Performance &middot; Tallahassee</small></span></a>'+
        '<p>Evidence-based mental performance training for athletes, performers, and high-pressure professionals.</p>'+
      '</div>'+
      '<div class="foot-col"><h4>Visit</h4>'+
        '<p>901 N. Gadsden Street<br>Tallahassee, FL</p>'+
        '<p>Mon&ndash;Fri &middot; 9:00 AM&ndash;6:00 PM</p>'+
        '<p><a href="'+SMS+'">Text 850-807-9801</a></p>'+
      '</div>'+
      '<div class="foot-col"><h4>Explore</h4>'+
        '<a href="what-is-mental-performance.html">What Is Mental Performance</a>'+
        '<a href="mp-vs-mental-health.html">Performance vs. Mental Health</a>'+
        '<a href="services.html">Services &amp; Pricing</a>'+
        '<a href="contact.html">Contact</a>'+
        '<a href="'+BOOK+'" target="_blank" rel="noopener">Book a Session</a>'+
      '</div>'+
      '<div class="foot-col"><h4>Team</h4>'+
        '<a href="ashlyn.html">Ashlyn Hulsey, PhD</a>'+
        '<a href="paige.html">Paige Strate-Lutzow, M.S.</a>'+
      '</div>'+
    '</div>'+
    '<p class="foot-crisis">In crisis? Call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline), or call 911.</p>'+
    '<div class="foot-bottom">'+
      '<span>&copy; <span id="year"></span> Powers of Sport Psychology &middot; Tallahassee, FL</span>'+
      '<span>A sister practice of <a href="https://therapytallahassee.com/" target="_blank" rel="noopener">Powers of Mind</a></span>'+
    '</div>'+
  '</div></footer>';

  var hm = document.getElementById("site-header"); if(hm){ hm.outerHTML = header; }
  var fm = document.getElementById("site-footer"); if(fm){ fm.outerHTML = footer; }

  var headerEl = document.getElementById("top");
  if(headerEl){ addEventListener("scroll", function(){ headerEl.classList.toggle("scrolled", scrollY>10); }); }

  var burger = document.getElementById("hamburger"), links = document.getElementById("navLinks");
  if(burger && links){
    burger.addEventListener("click", function(){ links.classList.toggle("open"); });
    links.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){ if(!a.classList.contains("drop-toggle")){ links.classList.remove("open"); } });
    });
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, {threshold:.14});
  document.querySelectorAll(".reveal").forEach(function(el){ io.observe(el); });

  var y = document.getElementById("year"); if(y){ y.textContent = new Date().getFullYear(); }
})();
