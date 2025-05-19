(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: '93106c-fc.myshopify.com',
            storefrontAccessToken: 'af1af931d730439d0b091ad73a61ee0d',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '14890551935308',
                node: document.getElementById('product-component-1747567741060'),
                moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
                options: {
                    product: {
                        buttonDestination: 'checkout',
                        text: {
                            button: 'Buy now'
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        text: {
                            button: 'Add to cart'
                        }
                    },
                    cart: {
                        text: {
                            total: 'Subtotal',
                            button: 'Checkout'
                        },
                        popup: false
                    },
                    toggle: {}
                }
            });
        });
    }

})();