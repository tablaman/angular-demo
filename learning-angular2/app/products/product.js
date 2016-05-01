System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters:[],
        execute: function() {
            /**
             * Product BUSINESS OBJECT class to implement in the event we have
             *
             */
            Product = (function () {
                function Product(productId, price, starRating, productName, productCode, releaseDate, description, imageUrl) {
                    this.productId = productId;
                    this.price = price;
                    this.starRating = starRating;
                    this.productName = productName;
                    this.productCode = productCode;
                    this.releaseDate = releaseDate;
                    this.description = description;
                    this.imageUrl = imageUrl;
                }
                Product.prototype.calculateDiscount = function (percent) {
                    return this.price - (this.price * percent / 100);
                };
                return Product;
            }());
            exports_1("Product", Product);
        }
    }
});
//# sourceMappingURL=product.js.map