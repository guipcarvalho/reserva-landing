(function () {
    'use strict';
    var reservaLanding = {
        _controller: {},

        pageSize: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),

        pageWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),

        setup: function () {
            var _this = this;

            $(window).scroll(function () { _this.scrollHandler(_this, this); });
            
            this.createThirdPage();
            this.parallaxThirdPage();
            this.createFourthPage();
            this.fadeinFithPage();

            if(this.pageWidth >= 600)
            {
                this.createFifthPage();
                this.createSixthPage();
                this.createSeventhPage();
                this.createEighthPage();
                this.createNinethPage();
                this.createEleventhPage();
            }
            
            this.fadeinSixthPage();
            
            this.fadeinSeventhPage();
            
            this.fadeinEighthPage();
            
            
            this.createTwelfthPage();
            this.parallaxTwelfthPage();
            this.parallaxFourteenthPage();
            this.createFifteenthPage();
            this.createBrasilAnimation();
        },

        scrollHandler: function (_this, scope) {

            var position = $(scope).scrollTop();

            console.log("Position " + position);

            //second page
            _this.setClass(position, ".second-page ", ".second-page .fadein-text", "appear");

            //third page
            _this.parallaxText(position, ".third-page", ".third-page .landing-page-content");

            //fourth page
            _this.setClass(position, ".fourth-page ", ".fourth-page .fadein-text", "appear");
            _this.setClass(position, ".fourth-page ", ".rectangle:first-child", 'top-rect');
            _this.setClass(position, ".fourth-page ", ".rect2", 'bottom-rect');

            //fifth transition
            _this.pinContainer(position, ".third-page", ".seventh-placeholder", ".fourth-page");

            //brasil
            _this.setClass(position, ".thirteenth-page", ".brasil-full", "encher", -(_this.pageSize * 0.1));
            _this.setClass(position, ".thirteenth-page", ".brasil .fadein-text", "appear", -(_this.pageSize * 0.1));

            //fourteenth page
            _this.parallaxText(position, ".fourteenth-page", ".fourteenth-page .landing-page-content");

            //fiftheenth page
            _this.setClass(position, ".fifteenth-page ", ".fifteenth-page .fadein-text", "appear");

        },

        pinContainer: function (position, trigger, until, container){
            var offset = $(trigger).offset().top + this.pageSize;
            var duration = $(until).offset().top;

            if(position <= duration && position >= offset)
                $(container).css("position", "fixed");
            else if(position < offset && $(container).css("position") === "fixed")
                $(container).css("position", "relative");
        },

        parallaxText: function(position, trigger, element) {
            var offset = $(trigger).offset().top - (this.pageSize / 2);
            var duration = offset + this.pageSize;

            if(position <= duration && position >= offset)
            {
                var porc = Math.ceil(((100 * (position - offset)) / (duration - offset)) * 0.7);
                $(element).css("transform", 'translateY(-' + porc + '%)');
            }
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
                .addTo(_this._controller)
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
                .addTo(_this._controller)
        },

        fadeinTextScene: function (container, trigger) {            
            var _this = this;
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: trigger,
                    offset:  -(_this.pageSize * 0.25)
                })
                .setClassToggle(container + ' .fadein-text', 'appear')
                .addTo(_this._controller);

            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: trigger,
                    offset:  -(_this.pageSize * 0.25)
                })
                .setClassToggle(container + ' .page-fadein', 'page-fadein-back')
                .addTo(_this._controller); 
        },

        setClass: function(position, trigger, element, cssClass, offset) {
            if(offset === undefined)
                offset = (this.pageSize * 0.2);

            if(position + offset >= $(trigger).offset().top && !$(element).hasClass(cssClass))
                    $(element).addClass(cssClass);
                else if($(element).hasClass(cssClass) && position + offset < $(trigger).offset().top)
                    $(element).removeClass(cssClass);
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