(function () {
    var reservaLanding = {

        _controller: {},

        pageSize: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),

        setup: function () {
            this._controller = new ScrollMagic.Controller();
            
            this.createSecondPage();
            this.createThirdPage();
            this.createFifthPage();
            this.createSixthPage();
            this.createSeventhPage();
            this.createEighthPage();
            this.createNinethPage();
            this.createTenthPage();
            this.createEleventhPage();
            this.createTwelfthPage();
        },

        createSecondPage: function() {                 
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: ".second-page ",
                    offset: this.pageSize * 0.2
                })
                .setClassToggle('.second-page .text','appear')
                .addIndicators() // add indicators (requires plugin)
                .addTo(this._controller)
        },

        createThirdPage: function () {
            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: ".third-page",
                    duration: _this.pageSize * 0.8,
                    offset: _this.pageSize * 0.2
                })
                .setTween(".third-page", 1, {backgroundPosition: "50% 10%", ease: Linear.ease})
                .addIndicators() // add indicators (requires plugin)
                .addTo(_this._controller)
        },

        createFifthPage: function () {
            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: ".fourth-page",
                    duration: _this.pageSize,
                    offset: _this.pageSize * 0.5
                })
                .setPin(".fourth-page")
                .setTween(".fifth-page", 1, {left: "0", ease: Linear.easeNone})
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
            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: ".twelfth-page",
                    duration: _this.pageSize,
                    offset: -(_this.pageSize * 0.5)
                })
                .setTween(".eleventh-page", 1, {top: "-100%", ease: Linear.easeNone})
                .addIndicators() // add indicators (requires plugin)
                .addTo(_this._controller)
        },

        createHorizontalScene: function (last, next, trigger) {
            var tween = new TimelineMax ()
			.add([
				TweenMax.to(last, 1, {left: "-100%", ease: Linear.easeNone}),
                TweenMax.to(next, 1, {left: "0%", ease: Linear.easeNone}),
                TweenMax.to(next + " .landing-page-content", 1, {left: "0", ease: Linear.easeNone}),
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
        }
    };

    reservaLanding.setup();
})();