/* ============================================================
   POWERS OF MIND — shared header + footer + behaviour
   Edit the menu / footer / address ONCE here and every page updates.
   ============================================================ */
(function(){
  /* Google Tag Manager — loads on every page (container holds GA4 etc.) */
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WPMBCLT8');

  var BOOK = "https://powersofmind.clientsecure.me/";
  var SMS  = "sms:8508079801";

  /* Brand mark — lotus + head profile in the Powers of Mind colors. */
  var MARK =
    '<svg viewBox="0 0 120 104" aria-hidden="true">'+
      '<path d="M20,76 C33,89 63,89 76,76 C63,84 33,84 20,76 Z" fill="#F2C94C"/>'+
      '<g fill="#F2C94C">'+
        '<path d="M48,40 C58,52 60,66 48,78 C36,66 38,52 48,40 Z" transform="rotate(-62 48 78)"/>'+
        '<path d="M48,40 C58,52 60,66 48,78 C36,66 38,52 48,40 Z" transform="rotate(62 48 78)"/>'+
      '</g>'+
      '<g fill="#7FC9B8">'+
        '<path d="M48,28 C56,45 56,63 48,78 C40,63 40,45 48,28 Z" transform="rotate(-32 48 78)"/>'+
        '<path d="M48,28 C56,45 56,63 48,78 C40,63 40,45 48,28 Z" transform="rotate(32 48 78)"/>'+
      '</g>'+
      '<path d="M48,24 C57,44 57,62 48,78 C39,62 39,44 48,24 Z" fill="#16A89B"/>'+
      '<path d="M78,30 C94,23 107,38 103,55 C101,65 95,65 96,71 C97,75 92,75 91,79 C90,83 93,85 90,88 C87,91 82,91 79,90" fill="none" stroke="#0E8C82" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>'+
    '</svg>';

  /* The Services dropdown + footer Services column come from this list.
     To add a service page later, add one line here. */
  var serviceLinks = [
    ["services.html","All Services & Pricing"],
    ["assessments.html","Psychological Assessments"],
    ["couples.html","Couples Therapy"],
    ["sports-psychology.html","Sports Psychology"],
    ["biofeedback.html","Biofeedback"],
    ["ketamine.html","Ketamine-Assisted Therapy"],
    ["porn-treatment.html","Porn-Addiction Treatment"]
  ];

  var path = location.pathname.split("/").pop();
  if(!path){ path = "index.html"; }
  var inServices = serviceLinks.some(function(s){ return s[0]===path; });
  function ac(file){ return path===file ? ' class="active"' : ''; }

  var dropItems = serviceLinks.map(function(s){ return '<a href="'+s[0]+'">'+s[1]+'</a>'; }).join("");
  var svcFootLinks = serviceLinks.map(function(s){ return '<a href="'+s[0]+'">'+s[1]+'</a>'; }).join("");

  var header =
  '<header id="top"><div class="container nav">'+
    '<a href="index.html" class="brand"><span class="mark">'+MARK+'</span><span>Powers of Mind<small>Therapy &middot; Tallahassee</small></span></a>'+
    '<nav class="nav-links" id="navLinks">'+
      '<a href="index.html"'+ac("index.html")+'>Home</a>'+
      '<div class="has-drop">'+
        '<a href="services.html" class="drop-toggle'+(inServices?' active':'')+'">Services <span class="caret">&#9662;</span></a>'+
        '<div class="dropdown-menu">'+dropItems+'</div>'+
      '</div>'+
      '<a href="dr-powers.html"'+ac("dr-powers.html")+'>Dr. Powers</a>'+
      '<a href="ashlyn.html"'+ac("ashlyn.html")+'>Dr. Hulsey</a>'+
      '<a href="jake.html"'+ac("jake.html")+'>Jake</a>'+
      '<a href="contact.html"'+ac("contact.html")+'>Contact</a>'+
      '<a class="btn btn-ghost" href="'+SMS+'">Ask a Question</a>'+
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
      '<div class="foot-col foot-brand"><a href="index.html" class="brand" style="color:#F6F1E8"><span class="mark">'+MARK+'</span><span style="color:#F6F1E8">Powers of Mind<small>Therapy &middot; Tallahassee</small></span></a><p>Compassionate, expert therapy in Midtown Tallahassee.</p></div>'+
      '<div class="foot-col"><h4>Visit</h4><p>901 N. Gadsden Street<br>Tallahassee, FL</p><p>Mon&ndash;Fri &middot; 9:00 AM&ndash;6:00 PM</p><p><a href="'+SMS+'">Text 850-807-9801</a></p></div>'+
      '<div class="foot-col"><h4>Services</h4>'+svcFootLinks+'</div>'+
      '<div class="foot-col"><h4>Practice</h4><a href="dr-powers.html">Dr. Powers</a><a href="ashlyn.html">Dr. Hulsey</a><a href="jake.html">Jake</a><a href="contact.html">Contact</a><a href="'+BOOK+'" target="_blank" rel="noopener">Book a Session</a></div>'+
    '</div>'+
    '<div class="foot-bottom"><span>&copy; <span id="year"></span> Powers of Mind &middot; Dr. Raychel Powers, Psy.D. &middot; Tallahassee, FL</span><span>Licensed Psychologist &middot; Florida</span></div>'+
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
