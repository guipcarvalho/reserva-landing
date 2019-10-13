(function () {
    var reservaLanding = {

        _controller: {},

        pageSize: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),

        setup: function () {
            this._controller = new ScrollMagic.Controller();
            
            this.createSecondPage();
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
        }
    };

    reservaLanding.setup();
})();