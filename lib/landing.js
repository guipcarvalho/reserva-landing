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
            this.createSixthPage();
            this.createSeventhPage();
            this.createEighthPage();
            this.createNinethPage();
            this.createTenthPage();
            this.createEleventhPage();
            this.createTwelfthPage();
            this.parallaxTwelfthPage();
            this.parallaxFourteenthPage();
            this.createFifteenthPage();

            this.waitLoad();
        },

        createSecondPage: function() {                 
            this.makeAppear(".second-page ", ".second-page .text");
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

        createSixthPage: function () {
            this.createHorizontalScene(".fifth-page", ".sixth-page", ".fifth-placeholder");
        },

        createSeventhPage: function () {
            this.createHorizontalScene(".sixth-page", ".seventh-page", ".sixth-placeholder");
        },

        createEighthPage: function () {
            this.createHorizontalScene(".seventh-page", ".eighth-page", ".seventh-placeholder");
        },

        createNinethPage: function () {
            this.createHorizontalScene(".eighth-page", ".nineth-page", ".eighth-placeholder");
        },

        createTenthPage: function () {
            this.createHorizontalScene(".nineth-page", ".tenth-page", ".nineth-placeholder");
        },

        createEleventhPage: function () {
            this.createHorizontalScene(".tenth-page", ".eleventh-page", ".tenth-placeholder");
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
            this.makeAppear(".fifteenth-page ", ".fifteenth-page .text");
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

        waitLoad: function () {
            window.addEventListener("load", function(event) {
                this.document.getElementById("loading-placeholder").remove();
            });
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