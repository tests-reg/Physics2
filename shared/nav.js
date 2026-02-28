
(function() {
  'use strict';

  function depth() {
    var p = window.location.pathname;
    var parts = p.split('/').filter(function(x){ return x.length > 0; });
    var idx = -1;
    for (var i = 0; i < parts.length; i++) {
      if (parts[i] === 'fizportal') { idx = i; break; }
    }
    if (idx === -1) return 1;
    return parts.length - idx - 1;
  }

  function rootPath() {
    var d = depth();
    if (d <= 1) return './';
    var arr = [];
    for (var i = 0; i < d; i++) arr.push('..');
    return arr.join('/') + '/';
  }

  function injectNav() {
    var root = rootPath();
    var container = document.getElementById('fp-nav-container');
    if (!container) return;
    fetch(root + 'shared/nav.html')
      .then(function(r){ return r.text(); })
      .then(function(html){
        container.innerHTML = html;
        fixLinks(root);
        highlightActive();
        initHamburger();
        initSearch();
        buildBreadcrumbs(root);
      })
      .catch(function(e){ console.warn('NavJS:', e); });
  }

  function fixLinks(root) {
    var logo = document.getElementById('fp-logo-link');
    if (logo) logo.href = root + 'index.html';
    var links = document.querySelectorAll('[data-page]');
    links.forEach(function(a) {
      var page = a.getAttribute('data-page');
      if (page === 'index') { a.href = root + 'index.html'; }
      else if (page === 'experiments') { a.href = root + 'experiments.html'; }
      else { a.href = root + page + '/index.html'; }
    });
  }

  function highlightActive() {
    var cur = window.location.pathname;
    document.querySelectorAll('.fp-sidebar .nav-item').forEach(function(a) {
      if (a.href && a.href !== window.location.origin + '/' && cur.endsWith(new URL(a.href).pathname)) {
        a.classList.add('active');
      }
    });
  }

  function initHamburger() {
    var btn = document.getElementById('fp-hamburger');
    var sidebar = document.getElementById('fp-sidebar');
    if (!btn || !sidebar) return;
    btn.addEventListener('click', function(e) { e.stopPropagation(); sidebar.classList.toggle('open'); });
    document.addEventListener('click', function(e) {
      if (!sidebar.contains(e.target) && e.target !== btn) sidebar.classList.remove('open');
    });
  }

  function initSearch() {
    var input = document.getElementById('fp-search');
    if (!input) return;
    input.addEventListener('input', function() {
      var q = input.value.toLowerCase();
      document.querySelectorAll('.fp-sidebar .nav-item').forEach(function(a) {
        a.style.display = (!q || a.textContent.toLowerCase().includes(q)) ? '' : 'none';
      });
    });
  }

  var LABELS = {
    'mechanics':'Механіка','dynamics':'Динаміка','molecular-physics':'Мол. фізика',
    'mechanics-work':'Мех. робота','electric-field':'Ел. поле','electric-current':'Ел. струм',
    'electromagnetism':'Електромагнетизм','optics':'Оптика','oscillations':'Коливання',
    'nuclear-physics':'Ядерна фізика','experiment':'Експерименти','tasks':'Задачі',
    'index.html':'Сторінка','experiments.html':'Експерименти'
  };

  function buildBreadcrumbs(root) {
    var bc = document.getElementById('fp-breadcrumbs');
    if (!bc) return;
    var parts = window.location.pathname.split('/').filter(function(x){ return x; });
    var idx = -1;
    for (var i = 0; i < parts.length; i++) { if (parts[i]==='fizportal') { idx=i; break; } }
    if (idx === -1) return;
    parts = parts.slice(idx + 1);
    var html = '<a href="' + root + 'index.html">Головна</a>';
    parts.forEach(function(part, i) {
      var label = LABELS[part] || part;
      if (i < parts.length - 1) { html += ' <span>/</span> <span>' + label + '</span>'; }
      else { html += ' <span>/</span> ' + label; }
    });
    bc.innerHTML = html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else { injectNav(); }
})();
