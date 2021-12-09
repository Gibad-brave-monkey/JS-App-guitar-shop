function render() {

    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();


}
spinnerPage.render();

let CATALOG = [];

// http://myjson.dit.upm.es/api/bins/i337 Сервер может упасть(ненадежный серве), поэтому остались просто комментов, но в принципе все работает

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        spinnerPage.handleClear();
        render();
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });

    