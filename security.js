
(function() {
    'use strict';

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }

        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }

        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }

        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }

        if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }

        if (e.ctrlKey && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }

        
        if (e.ctrlKey && e.shiftKey && (e.key === 'K' || e.key === 'k' || e.keyCode === 75)) {
            e.preventDefault();
            return false;
        }

        if (e.ctrlKey && e.shiftKey && (e.key === 'M' || e.key === 'm' || e.keyCode === 77)) {
            e.preventDefault();
            return false;
        }

        if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }

        if (e.metaKey && e.altKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }

        if (e.metaKey && e.altKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }

        if (e.metaKey && e.altKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
    });

    var devtoolsOpen = false;

    function checkDevTools() {
        var widthThreshold = window.outerWidth - window.innerWidth > 160;
        var heightThreshold = window.outerHeight - window.innerHeight > 160;

        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                onDevToolsDetected();
            }
        } else {
            devtoolsOpen = false;
        }
    }

    function checkDebuggerTiming() {
        var start = performance.now();
        debugger;
        var end = performance.now();
        if (end - start > 100) {
            onDevToolsDetected();
        }
    }

    var element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            onDevToolsDetected();
        }
    });

    setInterval(function() {
        console.log(element);
        console.clear();
    }, 2000);

    function onDevToolsDetected() {
        document.body.innerHTML = '';
        window.location.href = 'about:blank';

       
    }

    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });

    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        e.preventDefault();
    });

    setInterval(checkDevTools, 1000);



    var noop = function() {};
    try {
        Object.defineProperty(window, 'console', {
            value: {
                log: noop,
                warn: noop,
                error: noop,
                info: noop,
                debug: noop,
                table: noop,
                trace: noop,
                dir: noop,
                dirxml: noop,
                group: noop,
                groupEnd: noop,
                time: noop,
                timeEnd: noop,
                assert: noop,
                profile: noop,
                clear: noop
            },
            writable: false,
            configurable: false
        });
    } catch(e) {
    }

})();
