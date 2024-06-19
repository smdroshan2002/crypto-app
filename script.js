var btc = document.getElementById('bitcoin');
var eth = document.getElementById('ethereum');
var dgc = document.getElementById('dogecoin');

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,dogecoin&apikey=0113486a-3648-4feb-8a17-623f64c0c7f6",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response) {
    response.data.forEach(function (asset) {
        if (asset.id === 'bitcoin') {
            btc.innerHTML = asset.priceUsd;
        } else if (asset.id === 'ethereum') {
            eth.innerHTML = asset.priceUsd;
        } else if (asset.id === 'dogecoin') {
            dgc.innerHTML = asset.priceUsd;
        }
    });
});
