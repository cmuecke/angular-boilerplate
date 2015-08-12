(function () {
    'use strict';
    var app = angular.module('store', []);

    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productPanels', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function () {
                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };

                this.activeTab = function (markTab) {
                    return this.tab === markTab;
                };
            },
            controllerAs: 'tabs'
        };
    });

    app.controller('reviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [{
        name: 'productName 1',
        price: 5.43,
        description: 'When will that be? Now that the, uh, garbage ball is in space, Doctor, perhaps you can help me with my sexual inhibitions? Why yes! Thanks for noticing. Oh, I think we should just stay friends',
        purchaseable: true,
        soldOut: false,
        images: [{
            large: 'http://www.coldheat.de/archiv/bilder/entry-thumbs/480/t-genisys.jpg',
            small: 'http://www.coldheat.de/archiv/bilder/entry-thumbs/200/t-genisys.jpg'
        }],
        reviews: [{
            stars: 5,
            content: 'I love this product',
            author: 'joe@shmoe.com'
        }, {
            stars: 2,
            content: 'I adore this thingie',
            author: 'clairee@shmoe.com'
        }],
    }, {
        name: 'productName 2',
        price: 2.94,
        description: 'When will that be? Now that the, uh, garbage ball is in space, Doctor, perhaps you can help me with my sexual inhibitions? Why yes! Thanks for noticing. Oh, I think we should just stay friends',
        purchaseable: true,
        soldOut: false,
        images: [{
            large: 'http://www.coldheat.de/archiv/bilder/entry-thumbs/480/fury-road.jpg',
            small: 'http://www.coldheat.de/archiv/bilder/entry-thumbs/200/fury-road.jpg'
        }],
        reviews: [{
            stars: 5,
            content: 'I love this product',
            author: 'joe@shmoe.com'
        }, {
            stars: 2,
            content: 'I adore this thingie',
            author: 'clairee@shmoe.com'
        }],
    }];

})();
