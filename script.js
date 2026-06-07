/* ============================================================
   POWERS OF MIND — shared header + footer + behaviour
   Edit the menu / footer / address ONCE here and every page updates.
   ============================================================ */
(function(){
  var BOOK = "https://powersofmind.clientsecure.me/";
  var SMS  = "sms:8508079801";

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
    '<a href="index.html" class="brand"><span class="mark">&#10022;</span><span>Powers of Mind<small>Therapy &middot; Tallahassee</small></span></a>'+
    '<nav class="nav-links" id="navLinks">'+
      '<a href="index.html"'+ac("index.html")+'>Home</a>'+
      '<div class="has-drop">'+
        '<a href="services.html" class="drop-toggle'+(inServices?' active':'')+'">Services <span class="caret">&#9662;</span></a>'+
        '<div class="dropdown-menu">'+dropItems+'</div>'+
      '</div>'+
      '<a href="dr-powers.html"'+ac("dr-powers.html")+'>Dr. Powers</a>'+
      '<a href="ashlyn.html"'+ac("ashlyn.html")+'>Ashlyn</a>'+
      '<a href="jake.html"'+ac("jake.html")+'>Jake</a>'+
      '<a href="contact.html"'+ac("contact.html")+'>Contact</a>'+
      '<a class="btn btn-primary" href="'+BOOK+'" target="_blank" rel="noopener">Book a Session</a>'+
    '</nav>'+
    '<div class="nav-cta">'+
      '<a class="btn btn-primary" href="'+BOOK+'" target="_blank" rel="noopener">Book a Session</a>'+
      '<button class="hamburger" id="hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>'+
    '</div>'+
  '</div></header>';

  var footer =
  '<footer><div class="container">'+
    '<div class="foot-grid">'+
      '<div class="foot-col foot-brand"><a href="index.html" class="brand" style="color:#F6F1E8"><span class="mark">&#10022;</span><span style="color:#F6F1E8">Powers of Mind<small>Therapy &middot; Tallahassee</small></span></a><p>Compassionate, expert therapy in Midtown Tallahassee.</p></div>'+
      '<div class="foot-col"><h4>Visit</h4><p>901 N. Gadsden Street<br>Tallahassee, FL</p><p>Mon&ndash;Fri &middot; 9:00 AM&ndash;6:00 PM</p><p><a href="'+SMS+'">Text 850-807-9801</a></p></div>'+
      '<div class="foot-col"><h4>Services</h4>'+svcFootLinks+'</div>'+
      '<div class="foot-col"><h4>Practice</h4><a href="dr-powers.html">Dr. Powers</a><a href="ashlyn.html">Ashlyn</a><a href="jake.html">Jake</a><a href="contact.html">Contact</a><a href="'+BOOK+'" target="_blank" rel="noopener">Book a Session</a></div>'+
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
