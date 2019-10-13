(function () {
    var reservaLanding = {

        _controller: {},

        pageSize: 800,

        setup: function () {
            this._controller = new ScrollMagic.Controller();
            
            this.createSecondPage();
        },

        createSecondPage: function() {                 
            var scene = new ScrollMagic.Scene(
                {
                    triggerElement: ".second-page "
                })
                .setClassToggle('.second-page .text','appear')
                .addIndicators() // add indicators (requires plugin)
                .addTo(this._controller)
        }
    };

    reservaLanding.setup();
})();