(function() {
    function defineActiveNav(sel) {
        var url = window.location.pathname,
            urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/, '')),
            navs = document.querySelectorAll('#navigation .nav-links'),
            items = Array.apply(null, {
                length: navs.length
            }).map(Number.call, Number);

        items.forEach(function(i) {
            if (urlRegExp.test(navs[i].href.replace(/\/$/, '')))
                navs[i].classList.add('active');
        });
    };

    defineActiveNav();
})();