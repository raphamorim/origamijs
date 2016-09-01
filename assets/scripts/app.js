(function() {
    function defineActiveNav(sel) {
        var url = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
        if (url == '') {
            url = window.location.origin + '/?$';
        }
        var urlRegExp = new RegExp(url),
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