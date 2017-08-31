
/**
 * ############################################################################################################ 
 * 
 * A simple, small application for converting the rates of different currencies according to the current rates.
 * The data comes from the http://fixer.io/ API and are updated daily around 4PM CET.
 * The base currency is euro (EUR).
 * From the drop-down list you can select one of the 32 available currencies.
 * You can enter the amount to be converted at the current exchange rate of the currency you have selected.
 * 
 * ############################################################################################################
 * 
 *   
 * @type object The main application object.
 * @version 1.1 
 * @property {object} root temporary without a use.
 * @property {object} responseData data that came from the API. Includes currency code and rate.
 * @property {object} htmlElements Object containing 3 HTML elements: drop-down list, number input and div which is a container for the table with data from API
 * @property {string} base Initial currency (default it's EUR).
 * @property {integer} accuracy Accuracy (decimals) of the currency rates.
 * @property {array} rates Array with objects containing currency codes and rates.
 * @author Piotr Wróblewski <poczta@wroblewskipiotr.pl>
 */
var currencyCalc = {
    root: null,
    responseData: {},
    htmlElements: {},
    accuracy: 4,
    base: null,
    rates: [],

    /**
     * Initial method. It retrieves data from fixer.io API and assigns HTML elements to the properties of the main application object.
     * In this method the listeners of input fields are initiated.
     * @param {object} root - Temporary without a use.
     * @returns {void}
     */
    init: function(root) {
        let self = this;
        this.root = root;
        this.htmlElements.curValDiv = document.getElementById('currentValues');
        this.htmlElements.inputValue = document.getElementById('inputValue');
        this.htmlElements.currencySelect = document.getElementById('currencySelect');
        
        this.getJson('https://api.fixer.io/latest');
        
        this.htmlElements.inputValue.addEventListener('input', function() {
            if (this.value !== '' && this.value !== null && this.value > 0) {
                self.rates = self.recalc(self.base, this.value);
                self.showResults(self.htmlElements.curValDiv);   
            }
        });
        
        this.htmlElements.currencySelect.addEventListener('change', function(evt) {
            let selected = evt.target || evt.srcElement;
            self.rates = self.recalc(selected.value, self.htmlElements.inputValue.value);
            self.showResults(self.htmlElements.curValDiv);
            self.base = selected.value;
        });   
    },

    /**
     * This method calculates currency rates when the current base currency is changed. Those rates are calculated
     * based on a data received from API, when the website is loaded, without additional requests.
     * @param {string} current - Currency code ('EUR' is default).
     * @param {integer} amount - Amount of currency to convert.
     * @returns {Array|currencyCalc.recalc.temp} a new array with recalculated currency rates.
     */
    recalc: function(current, amount) {
        let b;
        let temp = [];
        for (var i = 0; i < this.rates.length; i++) {
            if (this.rates[i].cur === current) {
                b = this.rates[i];
            }
        }
        let tempVal = 0;
        for (var i = 0; i < this.rates.length; i++) {
            tempVal = (1 / this.rates[i].val);
            temp.push({'cur': this.rates[i].cur, 'val': (1 / (tempVal * b.val) ) * amount});
        }
        return temp;
    },

    /**
     * This method removes all data from array of currency rates and puts the new data in the array in the right format.
     * @param {object} d - Object containing currency codes and rates.
     * @param {integer} amount - Amount of currency to convert.
     * @returns {void}
     */
    calc: function(d, amount = 1) {
        this.rates = [];
        for (var key in d) {
            if (d.hasOwnProperty(key)) {
                this.rates.push({'cur': key, 'val': (amount * d[key])});
            }
        }
    },
    
    /**
     * This method updates the accuracy of currency rates (decimals).
     * @param {integer} a decimals (integer values from 1 to 4)
     * @returns {void}
     */
    changeAccuracy: function(a) {
        this.showResults(this.htmlElements.curValDiv, a);
    },
    
    /**
     * This method retrieves name of the country and current currency from 'currencies' array, based on currency code.
     * @param {string} code - currency code eg. 'EUR'
     * @returns {currencyCalc.getCurrency.res}
     */
    getCurrency: function(code) {
        let res = {};
        for (var i = 0; i < this.currencies.length; i++) {
            if (this.currencies[i].code === code) {
                res.name = this.currencies[i].name;
                res.country = this.currencies[i].country;
            }
        }
        return res;
    },
    
    /**
     * This method creates a new table with obtained data: currency code, currency name, country/region and value .
     * Newly created table will be placed in 'e' HTML element.
     * @param {object} e 'div' HTML element ('curValDiv')
     * @param {integer} a number of decimals places (1 - 4).
     * @returns {void}
     */
    showResults: function(e, a = 4) {
        let self = this;
        e.innerHTML = '';
        var tab = document.createElement("table");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var th = document.createElement("th");
        th.appendChild(document.createTextNode("Kod waluty"));
        tr.appendChild(th);
        th = document.createElement("th");
        th.appendChild(document.createTextNode("Nazwa waluty"));
        tr.appendChild(th);
        th = document.createElement("th");
        th.appendChild(document.createTextNode("Kraj / Region"));
        tr.appendChild(th);
        th = document.createElement("th");
        th.appendChild(document.createTextNode("Wartość"));
        tr.appendChild(th);
        tab.appendChild(tr);
        
        this.rates.forEach(function(item, index) {
            let res = self.getCurrency(item.cur);
            tr = document.createElement("tr");
            td = document.createElement("td");
            td.appendChild(document.createTextNode(item.cur));
            tr.appendChild(td);
            td = document.createElement("td");
            td.appendChild(document.createTextNode(res.name));
            tr.appendChild(td);
            td = document.createElement("td");
            td.appendChild(document.createTextNode(res.country));
            tr.appendChild(td); 
            td = document.createElement("td");
            td.appendChild(document.createTextNode(item.val.toFixed(a)));
            tr.appendChild(td);
            tab.appendChild(tr);
        });    
        e.appendChild(tab);
    },
    
    /**
     * This method adds currency codes to the top-down list.
     * @param {string} def - default currency code ('EUR')
     * @returns {void}
     */
    setCurrenciesInOptions: function(def) {
        let self = this;
        if (def !== null) {
            var selDefOpt = document.createElement("option");
            var selDefOptText = document.createTextNode(def);
            selDefOpt.appendChild(selDefOptText);
            this.htmlElements.currencySelect.appendChild(selDefOpt);
        }
        this.rates.forEach(function(item, index) {
            // The last item in the top-down list will not be shown (double EUR item)
            if (index === self.rates.length-1) return;
            
            var selOpt = document.createElement("option");
            var selOptText = document.createTextNode(item.cur);
            selOpt.appendChild(selOptText);
            self.htmlElements.currencySelect.appendChild(selOpt);
        });
    },
    
    /**
     * This method is sending AJAX request to fixer.io API.
     * @param {string} url - adres API do pobierania danych
     * @returns {Boolean} - true jeśli odpowiedź z serwera API jest poprawna;
     */
    getJson: function(url) {
        let self = this;
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url, true);
        httpRequest.responseType = 'json';
        httpRequest.onload = function() {
            if (this.status === 200 && this.readyState === 4) {
                // If the API response is correct the data about current currencies the objects are updated and the top-down list
                // is filled with currency codes.
                self.responseData = this.response;
                self.responseData.rates[this.response.base] = 1;
                self.calc(self.responseData.rates);
                self.showResults(self.htmlElements.curValDiv);
                self.base = this.response.base;
                self.setCurrenciesInOptions(self.base);
            } else {
                console.log('Fixer.io API connection error !!! Status request: '+this.status);
                self.htmlElements.curValDiv.innerHTML = 'Fixer.io API connection error !!! Status request: '+this.status;
            }
        };
        httpRequest.send();
    },
    
    /**
     * A table with the names of countries / regions, the current currencies and their codes.
     * @type Array - {country: country_name, code: currency_code_name, name: curreny_name}
     */
    currencies: [
        {country: 'Australia', code: 'AUD', name: 'Dolar'},
        {country: 'Bułgaria', code: 'BGN', name: 'Lew'},
        {country: 'Brazylia', code: 'BRL', name: 'Real'},
        {country: 'Kanada', code: 'CAD', name: 'Dolar'},
        {country: 'Chiny', code: 'CNY', name: 'Juan'},
        {country: 'Chorwacja', code: 'HRK', name: 'Kuna'},
        {country: 'Czechy', code: 'CZK', name: 'Korona'},
        {country: 'Dania', code: 'DKK', name: 'Korona'},
        {country: 'Filipiny', code: 'PHP', name: 'Peso'},
        {country: 'Hongkong', code: 'HKD', name: 'Dolar'},
        {country: 'Indie', code: 'INR', name: 'Rupia'},
        {country: 'Indonezja', code: 'IDR', name: 'Rupia'},
        {country: 'Izrael', code: 'ILS', name: 'Nowy Szekel'},
        {country: 'Japonia', code: 'JPY', name: 'Jen'},
        {country: 'Korea Południowa', code: 'KRW', name: 'Won'},
        {country: 'Malezja', code: 'MYR', name: 'Ringgit'},
        {country: 'Meksyk', code: 'MXN', name: 'Peso'},
        {country: 'Norwegia', code: 'NOK', name: 'Korona'},
        {country: 'Nowa Zelandia', code: 'NZD', name: 'Dolar'},
        {country: 'Polska', code: 'PLN', name: 'Złoty'},
        {country: 'Rosja', code: 'RUB', name: 'Rubel'},
        {country: 'RPA', code: 'ZAR', name: 'Rand'},
        {country: 'Rumunia', code: 'RON', name: 'Lej'},
        {country: 'Singapur', code: 'SGD', name: 'Dolar'},
        {country: 'Szwajcaria', code: 'CHF', name: 'Frank'},
        {country: 'Szwecja', code: 'SEK', name: 'Korona'},
        {country: 'Tajlandia', code: 'THB', name: 'Baht'},
        {country: 'Turcja', code: 'TRY', name: 'Lira'},
        {country: 'Unia Europejska', code: 'EUR', name: 'Euro'},
        {country: 'USA', code: 'USD', name: 'Dolar'},
        {country: 'Węgry', code: 'HUF', name: 'Forint'},
        {country: 'Wielka Brytania', code: 'GBP', name: 'Funt'}
    ]
};

document.addEventListener("DOMContentLoaded", function(event) {
    currencyCalc.init(this);
});
