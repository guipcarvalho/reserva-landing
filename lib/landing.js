(function () {
    'use strict';
    var reservaLanding = {
        _controller: {},

        pageSize: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),

        setup: function () {
            this._controller = new ScrollMagic.Controller();
            
            this.createSecondPage();
            this.createThirdPage();
            this.parallaxThirdPage();
            this.createFifthPage();
            this.fadeinFithPage();
            this.createSixthPage();
            this.fadeinSixthPage();
            this.createSeventhPage();
            this.fadeinSeventhPage();
            this.createEighthPage();
            this.fadeinEighthPage();
            this.createNinethPage();
            this.createEleventhPage();
            this.createTwelfthPage();
            this.parallaxTwelfthPage();
            this.parallaxFourteenthPage();
            this.createFifteenthPage();
        },

        createSecondPage: function() {                 
            this.makeAppear(".second-page ", ".second-page .fadein-text");
        },

        createThirdPage: function () {
            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: ".third-page",
                    duration: _this.pageSize
                })
                .setTween(".third-page .landing-page-content", 1, {transform: "translateY(-50%)", ease: Linear.ease})
                .addIndicators() // add indicators (requires plugin)
                .addTo(_this._controller)
        },

        parallaxThirdPage: function () {
            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: ".fourth-page",
                    duration: _this.pageSize * 0.5
                })
                .setTween(".third-page .landing-page-content", 1, {transform: "translateY(-70%)", ease: Linear.ease})
                .addIndicators() // add indicators (requires plugin)
                .addTo(_this._controller)
        },

        createFifthPage: function () {
            var tween = new TimelineMax ()
			.add([
				TweenMax.to(".fifth-page", 1, {left: "0%", ease: Linear.easeNone}),
                TweenMax.to(".fifth-page .landing-page-content", 1, {left: "0%", ease: Linear.easeNone})
            ]);

            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: ".fourth-page",
                    duration: _this.pageSize,
                    offset: _this.pageSize * 0.5
                })
                .setPin(".fourth-page")
                .setTween(tween)
                .addIndicators() // add indicators (requires plugin)
                .addTo(_this._controller)
        },

        fadeinFithPage: function () {
            this.fadeinTextScene(".fifth-page", ".fifth-fadein");
        },

        createSixthPage: function () {
            this.createHorizontalScene(".fifth-page", ".sixth-page", ".fifth-placeholder");
        },

        fadeinSixthPage: function () {
            this.fadeinTextScene(".sixth-page", ".sixth-fadein");
        },

        createSeventhPage: function () {
            this.createHorizontalScene(".sixth-page", ".seventh-page", ".sixth-placeholder");
        },

        fadeinSeventhPage: function () {
            this.fadeinTextScene(".seventh-page", ".seventh-fadein");
        },

        createEighthPage: function () {
            this.createHorizontalScene(".seventh-page", ".eighth-page", ".seventh-placeholder");
        },

        fadeinEighthPage: function () {
            this.fadeinTextScene(".eighth-page", ".eighth-fadein");
        },

        createNinethPage: function () {
            this.createHorizontalScene(".eighth-page", ".nineth-page", ".eighth-placeholder");
        },

        createEleventhPage: function () {
            this.createHorizontalScene(".nineth-page", ".eleventh-page", ".nineth-placeholder");
        },

        createTwelfthPage: function () {

            var tween = new TimelineMax ()
			.add([
				TweenMax.to(".eleventh-page", 1, {top: "-100%", ease: Linear.easeNone}),
                TweenMax.to(".eleventh-page .landing-page-content", 1, {transform: "translateY(-70%)", ease: Linear.easeNone})
            ]);

            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: ".twelfth-page",
                    duration: _this.pageSize,
                    offset: -(_this.pageSize * 0.5)
                })
                .setTween(tween)
                .addIndicators() // add indicators (requires plugin)
                .addTo(_this._controller)
        },

        parallaxTwelfthPage: function () {
            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: ".twelfth-page",
                    duration: _this.pageSize
                })
                .setTween(".twelfth-page .landing-page-content", 1, {transform: "translateY(-50%)", ease: Linear.ease})
                .addIndicators() // add indicators (requires plugin)
                .addTo(_this._controller)
        },

        parallaxFourteenthPage: function () {
            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: ".fourteenth-page",
                    duration: _this.pageSize
                })
                .setTween(".fourteenth-page .landing-page-content", 1, {transform: "translateY(-70%)", ease: Linear.ease})
                .addIndicators() // add indicators (requires plugin)
                .addTo(_this._controller)
        },

        createFifteenthPage: function() {                 
            this.makeAppear(".fifteenth-page ", ".fifteenth-page .fadein-text");
        },

        createHorizontalScene: function (last, next, trigger) {
            var tween = new TimelineMax ()
			.add([
				TweenMax.to(last, 1, {left: "-100%", ease: Linear.easeNone}),
                TweenMax.to(next, 1, {left: "0%", ease: Linear.easeNone}),
                TweenMax.to(next + " .landing-page-content", 1, {left: "0%", ease: Linear.easeNone}),
                TweenMax.to(last + " .landing-page-content", 1, {left: "-10%", ease: Linear.easeNone})
            ]);
            
            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: trigger,
                    duration: _this.pageSize,
                    offset:  -(_this.pageSize * 0.5)
                })
                .setTween(tween)
                .addIndicators() // add indicators (requires plugin)
                .addTo(_this._controller)
        },

        fadeinTextScene: function (container, trigger) {            
            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: trigger
                })
                .setClassToggle(container + ' .fadein-text', 'appear')
                .addIndicators() // add indicators (requires plugin)
                .addTo(_this._controller);

            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: trigger
                })
                .setClassToggle(container + ' .page-fadein', 'page-fadein-back')
                .addIndicators() // add indicators (requires plugin)
                .addTo(_this._controller); 
        },

        makeAppear: function(trigger, element) {
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: trigger,
                    offset: this.pageSize * 0.2
                })
                .setClassToggle(element, 'appear')
                .addIndicators() // add indicators (requires plugin)
                .addTo(this._controller)
        },

        getViewportSizing: function() {
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);

            window.addEventListener('resize', () => {
                var vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            });

            document.addEventListener('gesturestart', function (e) {
                e.preventDefault();
            });
        }
    };

    reservaLanding.setup();
})();