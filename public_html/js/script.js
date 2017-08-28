
var curValDiv = document.getElementById('currentValues');
var inputValue = document.getElementById('inputValue');
var currencySelect = document.getElementById('currencySelect');
var r = null;

var getJSON = function(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, true);
    httpRequest.responseType = 'json';
    httpRequest.onload = function() {
        if (this.status === 200) {
            callback(null, httpRequest.response);
        }
        else {
            callback(httpRequest.status, httpRequest.response);
        }
    };
    httpRequest.send();
};

var responseData = {
    base: '',
    date: '',
    rates: [],
    calcCurrency: function(v, a) {
        return (a * v).toFixed(2);
    },
    calc: function(d, amount = 1) {
        this.rates = [];
        for (var key in d) {
            if (d.hasOwnProperty(key)) {
              this.rates.push({'cur': key, 'val': this.calcCurrency(d[key], amount)});
            }
        }
    },
    showResults: function(e) {
        e.innerHTML = '';
        var tab = document.createElement("table");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var th = document.createElement("th");
        th.appendChild(document.createTextNode("Waluta"));
        tr.appendChild(th);
        th = document.createElement("th");
        th.appendChild(document.createTextNode("Wartość"));
        tr.appendChild(th);
        tab.appendChild(tr);
        
        this.rates.forEach(function(item, index) {
            tr = document.createElement("tr");
            td = document.createElement("td");
            td.appendChild(document.createTextNode(item.cur));
            tr.appendChild(td);
            td = document.createElement("td");
            td.appendChild(document.createTextNode(item.val));
            tr.appendChild(td);
            tab.appendChild(tr);
        });
              
        e.appendChild(tab);
    },
    setCurrencyInOptions: function(def) {
        if (def !== null) {
            var selDefOpt = document.createElement("option");
            var selDefOptText = document.createTextNode(def);
            selDefOpt.appendChild(selDefOptText);
            currencySelect.appendChild(selDefOpt);
        }
        this.rates.forEach(function(item, index) {
            var selOpt = document.createElement("option");
            var selOptText = document.createTextNode(item.cur);
            selOpt.appendChild(selOptText);
            currencySelect.appendChild(selOpt);
        });
    }
};

window.onload = function() {

    currencySelect.addEventListener('change', function(evt) {
        getJSON('https://api.fixer.io/latest?base='+evt.srcElement.value, function(err, data) {
            if (err === null) {
                r = data;
                responseData.base = r.base;
                responseData.date = r.date;
                responseData.calc(r.rates);
                responseData.showResults(curValDiv);
                responseData.setCurrencyInOptions();
            }
            else {
                console.log('Błąd połączenia z API fixer.io !!! Status request: '+err);
                curValDiv.innerHTML = 'Błąd połączenia z API fixer.io !!! Status request: '+err;
            }
        });
    });
    
    inputValue.addEventListener('input', function() {
        responseData.calc(r.rates, this.value);
        responseData.showResults(curValDiv);
    });
    
    inputValue.addEventListener('change', function() {
        responseData.calc(r.rates, this.value);
        responseData.showResults(curValDiv);
    });
    
    getJSON('https://api.fixer.io/latest?base=PLN', function(err, data) {
        if (err === null) {
            r = data;
            responseData.base = r.base;
            responseData.date = r.date;
            responseData.calc(r.rates);
            responseData.showResults(curValDiv);
            responseData.setCurrencyInOptions('PLN');
        }
        else {
            console.log('Błąd połączenia z API fixer.io !!! Status request: '+err);
            curValDiv.innerHTML = 'Błąd połączenia z API fixer.io !!! Status request: '+err;
        }
    });
};
