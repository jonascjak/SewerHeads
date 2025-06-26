export function loadShopifyBuyButton() {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        ShopifyBuyInit();
    } else {
        const script = document.createElement('script');
        script.src = scriptURL;
        script.async = true;
        script.onload = ShopifyBuyInit;
        document.head.appendChild(script);
    }

    function ShopifyBuyInit() {
        const client = ShopifyBuy.buildClient({
            domain: '93106c-fc.myshopify.com',
            storefrontAccessToken: 'af1af931d730439d0b091ad73a61ee0d',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '14890551935308',
                node: document.getElementById('product-component-1750807384264'),
                moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
                options: {
                    product: {
                        contents: {
                            img: false,
                            button: false,
                            buttonWithQuantity: true,
                            title: false,
                            price: false
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    maxWidth: "calc(25% - 20px)",
                                    marginLeft: "20px",
                                    marginBottom: "50px"
                                }
                            },
                            title: {
                                color: "#663131"
                            },
                            button: {
                                borderRadius: "5px"
                            },
                            price: {
                                color: "#301010"
                            },
                            compareAt: {
                                color: "#301010"
                            },
                            unitPrice: {
                                color: "#301010"
                            },
                            description: {
                                color: "#331313"
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    marginLeft: "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    maxWidth: "100%",
                                    marginLeft: "0px",
                                    marginBottom: "0px"
                                }
                            },
                            button: {
                                borderRadius: "5px"
                            },
                            title: {
                                fontFamily: "Helvetica Neue, sans-serif",
                                fontWeight: "bold",
                                fontSize: "26px",
                                color: "#4c4c4c"
                            },
                            price: {
                                fontFamily: "Helvetica Neue, sans-serif",
                                fontWeight: "normal",
                                fontSize: "18px",
                                color: "#4c4c4c"
                            },
                            compareAt: {
                                fontFamily: "Helvetica Neue, sans-serif",
                                fontWeight: "normal",
                                fontSize: "15.3px",
                                color: "#4c4c4c"
                            },
                            unitPrice: {
                                fontFamily: "Helvetica Neue, sans-serif",
                                fontWeight: "normal",
                                fontSize: "15.3px",
                                color: "#4c4c4c"
                            },
                            description: {
                                fontFamily: "Helvetica Neue, sans-serif",
                                fontWeight: "normal",
                                fontSize: "14px",
                                color: "#4c4c4c"
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                borderRadius: "5px"
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        },
                        popup: false
                    },
                    toggle: {}
                }
            });
        });
    }
}

