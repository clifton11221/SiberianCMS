App.factory('Loyalty', function($rootScope, $http, Url) {

    var factory = {};

    factory.value_id = null;

    factory.findAll = function() {

        if(!this.value_id) return;

        return $http({
            method: 'GET',
            url: Url.get("loyaltycard/mobile_view/findall", {value_id: this.value_id}),
            cache: !$rootScope.isOverview,
            responseType:'json'
        });
    };

    factory.validate = function(pad) {

        if(!this.value_id) return;

        var url = Url.get("loyaltycard/mobile_view/validate", {value_id: this.value_id});

        var data = {
            customer_card_id: pad.card.id,
            number_of_points: pad.number_of_points,
            password: pad.password,
            mode_qrcode: pad.mode_qrcode
        };

        return $http.post(url, data);
    };

    return factory;
});
