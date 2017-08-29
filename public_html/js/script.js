
var currencies = [
    {country: 'Afganistan', code: 'AFA', name: 'Afgani'},
    {country: 'Albania', code: 'ALL', name: 'Lek'},
    {country: 'Algieria', code: 'DZD', name: 'Dinar'},
    {country: 'Angola', code: 'AON', name: 'Kwanza'},
    {country: 'Antigua i Barbuda', code: 'XCD', name: 'Dolar'},
    {country: 'Antyle Holenderskie', code: 'ANG', name: 'Gulden'},
    {country: 'Arabia Saudyjska', code: 'SAR', name: 'Rial'},
    {country: 'Argentyna', code: 'ARS', name: 'Peso'},
    {country: 'Armenia', code: 'AMD', name: 'Dram'},
    {country: 'Aruba', code: 'AWG', name: 'Gulden'},
    {country: 'Australia', code: 'AUD', name: 'Dolar'},
    {country: 'Azerbejdżan', code: 'AZM', name: 'Manat'},
    {country: 'Bahamy', code: 'BSD', name: 'Dolar'},
    {country: 'Bahrajn', code: 'BHD', name: 'Dinar'},
    {country: 'Bangladesz', code: 'BDT', name: 'Taka'},
    {country: 'Barbados', code: 'BBD', name: 'Dolar'},
    {country: 'Belize', code: 'BZD', name: 'Dolar'},
    {country: 'Benin', code: 'XOF', name: 'Frank CFA'},
    {country: 'Bhutan', code: 'BTN', name: 'Ngultrum'},
    {country: 'Białoruś', code: 'BYR', name: 'Rubel'},
    {country: 'Boliwia', code: 'BOB', name: 'Boliviano'},
    {country: 'Bośnia i Hercegowina', code: 'BAM', name: 'Marka'},
    {country: 'Botswana', code: 'BWP', name: 'Pula'},
    {country: 'Brazylia', code: 'BRL', name: 'Real'},
    {country: 'Brunei', code: 'BND', name: 'Dolar'},
    {country: 'Bułgaria', code: 'BGN', name: 'Lew'},
    {country: 'Burkina Faso', code: 'XOF', name: 'Frank CFA'},
    {country: 'Burundi', code: 'BIF', name: 'Frank'},
    {country: 'Chile', code: 'CLP', name: 'Peso'},
    {country: 'Chiny', code: 'CNY', name: 'Juan'},
    {country: 'Chorwacja', code: 'HRK', name: 'Kuna'},
    {country: 'Cypr', code: 'CYP', name: 'Funt'},
    {country: 'Czad', code: 'XOF', name: 'Frank CFA'},
    {country: 'Czechy', code: 'CZK', name: 'Korona'},
    {country: 'Dania', code: 'DKK', name: 'Korona'},
    {country: 'Dominika', code: 'XCD', name: 'Dolar'},
    {country: 'Dominikana', code: 'DOP', name: 'Peso'},
    {country: 'Dżibuti', code: 'DJT', name: 'Frank'},
    {country: 'Egipt', code: 'EGP', name: 'Funt'},
    {country: 'Erytrea', code: 'ERN', name: 'Nakfa'},
    {country: 'Estonia', code: 'EEK', name: 'Korona'},
    {country: 'Etiopia', code: 'ETB', name: 'Birr'},
    {country: 'Fidżi', code: 'FJD', name: 'Dolar'},
    {country: 'Filipiny', code: 'PHP', name: 'Peso'},
    {country: 'Gabon', code: 'XOF', name: 'Frank CFA'},
    {country: 'Gambia', code: 'GMD', name: 'Dalasi'},
    {country: 'Ghana', code: 'GHC', name: 'Cedi'},
    {country: 'Gibraltar', code: 'GIP', name: 'Funt'},
    {country: 'Grenada', code: 'XCD', name: 'Dolar'},
    {country: 'Gruzja', code: 'GEL', name: 'Lari'},
    {country: 'Gujana', code: 'GYD', name: 'Dolar'},
    {country: 'Gwatemala', code: 'GTQ', name: 'Quetzal'},
    {country: 'Gwinea', code: 'GNF', name: 'Frank'},
    {country: 'Gwinea Bissau', code: 'XOF', name: 'Frank CFA'},
    {country: 'Gwinea Równikowa', code: 'XOF', name: 'Frank CFA'},
    {country: 'Haiti', code: 'HTG', name: 'Gourde'},
    {country: 'Honduras', code: 'HNL', name: 'Lempira'},
    {country: 'Hongkong', code: 'HKD', name: 'Dolar'},
    {country: 'Indie', code: 'INR', name: 'Rupia'},
    {country: 'Indonezja', code: 'IDR', name: 'Rupia'},
    {country: 'Irak', code: 'IQD', name: 'Dinar'},
    {country: 'Iran', code: 'IRR', name: 'Rial'},
    {country: 'Islandia', code: 'ISK', name: 'Korona'},
    {country: 'Izrael', code: 'ILS', name: 'Nowy Szekel'},
    {country: 'Jamajka', code: 'JMD', name: 'Dolar'},
    {country: 'Japonia', code: 'JPY', name: 'Jen'},
    {country: 'Jemen', code: 'YER', name: 'Rial'},
    {country: 'Jordania', code: 'JOD', name: 'Dinar'},
    {country: 'Kambodża', code: 'KHR', name: 'Riel'},
    {country: 'Kamerun', code: 'XOF', name: 'Frank CFA'},
    {country: 'Kanada', code: 'CAD', name: 'Dolar'},
    {country: 'Katar', code: 'QAR', name: 'Rial'},
    {country: 'Kazachstan', code: 'KZT', name: 'Tenge'},
    {country: 'Kenia', code: 'KES', name: 'Szyling'},
    {country: 'Kirgistan', code: 'KGS', name: 'Som'},
    {country: 'Kolumbia', code: 'COP', name: 'Peso'},
    {country: 'Komory', code: 'KMF', name: 'Frank'},
    {country: 'Kongo', code: 'XOF', name: 'Frank CFA'},
    {country: 'Kongo, Republika Demokratyczna', code: 'CDF', name: 'Frank'},
    {country: 'Korea Południowa', code: 'KRW', name: 'Won'},
    {country: 'Korea Północna', code: 'WN' , name: 'Won'},
    {country: 'Kostaryka', code: 'CRC', name: 'Colon'},
    {country: 'Kuba', code: 'CUP', name: 'Peso'},
    {country: 'Kuwejt', code: 'KWD', name: 'Dinar'},
    {country: 'Laos', code: 'LAK', name: 'Kip'},
    {country: 'Lesotho', code: 'LSL', name: 'Loti'},
    {country: 'Liban', code: 'LBP', name: 'Funt'},
    {country: 'Liberia', code: 'LRD', name: 'Dolar'},
    {country: 'Libia', code: 'LYD', name: 'Dinar'},
    {country: 'Liechtenstein', code: 'CHF', name: 'Frank'},
    {country: 'Łotwa', code: 'LVL', name: 'Łat'},
    {country: 'Macedonia', code: 'MKD', name: 'Denar'},
    {country: 'Madagaskar', code: 'MGF', name: 'Frank'},
    {country: 'Makau', code: 'MOP', name: 'Pataca'},
    {country: 'Malawi', code: 'MWK', name: 'Kwacha'},
    {country: 'Malediwy', code: 'MVR', name: 'Rupia'},
    {country: 'Malezja', code: 'MYR', name: 'Ringgit'},
    {country: 'Mali', code: 'XOF', name: 'Frank CFA'},
    {country: 'Malta', code: 'MTL', name: 'Lira'},
    {country: 'Maroko', code: 'MAD', name: 'Dirham'},
    {country: 'Mauretania', code: 'MRO', name: 'Ugijja'},
    {country: 'Mauritius', code: 'MUR', name: 'Rupia'},
    {country: 'Meksyk', code: 'MXN', name: 'Peso'},
    {country: 'Mołdawia', code: 'MDL', name: 'Lej'},
    {country: 'Mongolia', code: 'MNT', name: 'Tugrik'},
    {country: 'Mozambik', code: 'MZM', name: 'Metical'},
    {country: 'Myanmar', code: 'MMK', name: 'Kyat'},
    {country: 'Namibia', code: 'NAD', name: 'Dolar'},
    {country: 'Nepal', code: 'NPR', name: 'Rupia'},
    {country: 'Niger', code: 'XOF', name: 'Frank CFA'},
    {country: 'Nigeria', code: 'NGN', name: 'Naira'},
    {country: 'Nikaragua', code: 'NIO', name: 'Cordoba oro'},
    {country: 'Norwegia', code: 'NOK', name: 'Korona'},
    {country: 'Nowa Kaledonia', code: 'XPF', name: 'Frank CFP'},
    {country: 'Nowa Zelandia', code: 'NZD', name: 'Dolar'},
    {country: 'Oman', code: 'OMR', name: 'Rial'},
    {country: 'Pakistan', code: 'PKR', name: 'Rupia'},
    {country: 'Panama', code: 'PAB', name: 'Balboa'},
    {country: 'Papua Nowa Gwinea', code: 'PGK', name: 'Kina'},
    {country: 'Paragwaj', code: 'PYG', name: 'Guarani'},
    {country: 'Peru', code: 'PEN', name: 'Nowy Sol'},
    {country: 'Polinezja', code: 'XPF', name: 'Frank CFP'},
    {country: 'Polska', code: 'PLN', name: 'Złoty'},
    {country: 'Republika Środkowoafrykańska', code: 'XOF', name: 'Frank CFA'},
    {country: 'Republika Zielonego Przylądka', code: 'CVE', name: 'Escudo'},
    {country: 'Rosja', code: 'RUB', name: 'Rubel'},
    {country: 'RPA', code: 'ZAR', name: 'Rand'},
    {country: 'Rumunia', code: 'RON', name: 'Lej'},
    {country: 'Rwanda', code: 'RWF', name: 'Frank'},
    {country: 'Saint Kitts i Nevis', code: 'XCD', name: 'Dolar'},
    {country: 'Saint Lucia', code: 'XCD', name: 'Dolar'},
    {country: 'Saint Vincent i Grenadyny', code: 'XCD', name: 'Dolar'},
    {country: 'Salwador', code: 'SVC', name: 'Colon'},
    {country: 'Samoa Zachodnie', code: 'WST', name: 'Tala'},
    {country: 'San Tome', code: 'STD', name: 'Dobra'},
    {country: 'Senegal', code: 'XOF', name: 'Frank CFA'},
    {country: 'Serbia i Czarnogóra', code: 'CSD', name: 'Dinar'},
    {country: 'Seszele', code: 'SCR', name: 'Rupia'},
    {country: 'Sierra Leone', code: 'SLL', name: 'Leone'},
    {country: 'Singapur', code: 'SGD', name: 'Dolar'},
    {country: 'Słowacja', code: 'SKK', name: 'Korona'},
    {country: 'Słowenia', code: 'SIT', name: 'Tolar'},
    {country: 'Somalia', code: 'SOS', name: 'Szyling'},
    {country: 'Sri Lanka', code: 'LKR', name: 'Rupia'},
    {country: 'Suazi', code: 'SZL', name: 'Lilangeni'},
    {country: 'Sudan', code: 'SDD', name: 'Dinar'},
    {country: 'Surinam', code: 'SRG', name: 'Gulden'},
    {country: 'Syria', code: 'SYP', name: 'Funt'},
    {country: 'Szwajcaria', code: 'CHF', name: 'Frank'},
    {country: 'Szwecja', code: 'SEK', name: 'Korona'},
    {country: 'Tadżykistan', code: 'TJS', name: 'Somoni'},
    {country: 'Tajlandia', code: 'THB', name: 'Baht'},
    {country: 'Tajwan', code: 'TWD', name: 'Nowy Dolar'},
    {country: 'Tanzania', code: 'TZS', name: 'Szyling'},
    {country: 'Togo', code: 'XOF', name: 'Frank CFA'},
    {country: 'Tonga', code: 'TOP', name: 'Pa\'anga'},
    {country: 'Trynidad i Tobago', code: 'TTD', name: 'Dolar'},
    {country: 'Turcja', code: 'TRY', name: 'Lira'},
    {country: 'Turkmenistan', code: 'TMM', name: 'Manat'},
    {country: 'Tuvalu', code: 'SLL', name: 'Dolar'},
    {country: 'Unia Europejska', code: 'EUR', name: 'Euro'},
    {country: 'Uganda', code: 'UGX', name: 'Szyling'},
    {country: 'Ukraina', code: 'UAH', name: 'Hrywna'},
    {country: 'Urugwaj', code: 'UYU', name: 'Peso'},
    {country: 'USA', code: 'USD', name: 'Dolar'},
    {country: 'Uzbekistan', code: 'UZS', name: 'Som'},
    {country: 'Vanuatu', code: 'VUV', name: 'Vatu'},
    {country: 'Wenezuela', code: 'VEB', name: 'Boliwar'},
    {country: 'Węgry', code: 'HUF', name: 'Forint'},
    {country: 'Wielka Brytania', code: 'GBP', name: 'Funt'},
    {country: 'Wietnam', code: 'VND', name: 'Dong'},
    {country: 'Wybrzeże Kości Słoniowej', code: 'XOF', name: 'Frank CFA'},
    {country: 'Wyspy Salomona', code: 'SBD', name: 'Dolar'},
    {country: 'Wyspy św. Tomasza i Książęca', code: 'STD', name: 'Dobra'},
    {country: 'Zambia', code: 'ZMK', name: 'Kwacha'},
    {country: 'Zimbabwe', code: 'ZWD', name: 'Dolar'},
    {country: 'Zjednoczone Emiraty Arabskie', code: 'AED', name: 'Dirham'}
];




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
    getCurrency: function(code) {
        let res = {};
        for (var i = 0; i < currencies.length; i++) {
            if (currencies[i].code == code) {
                res.name = currencies[i].name;
                res.country = currencies[i].country;
            }
        }
        return res;
    },
    showResults: function(e) {
        var self = this;
        e.innerHTML = '';
        var tab = document.createElement("table");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var th = document.createElement("th");
        th.appendChild(document.createTextNode("Waluta"));
        tr.appendChild(th);
        th = document.createElement("th");
        th.appendChild(document.createTextNode("Nazwa"));
        tr.appendChild(th);
        th = document.createElement("th");
        th.appendChild(document.createTextNode("Kraj"));
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

//window.onload = function() {
//
//    currencySelect.addEventListener('change', function(evt) {
//        getJSON('https://api.fixer.io/latest?base='+evt.srcElement.value, function(err, data) {
//            if (err === null) {
//                r = data;
//                responseData.base = r.base;
//                responseData.date = r.date;
//                responseData.calc(r.rates, inputValue.value);
//                responseData.showResults(curValDiv);
//                responseData.setCurrencyInOptions();
//            }
//            else {
//                console.log('Błąd połączenia z API fixer.io !!! Status request: '+err);
//                curValDiv.innerHTML = 'Błąd połączenia z API fixer.io !!! Status request: '+err;
//            }
//        });
//    });
//    
//    inputValue.addEventListener('input', function() {
//        responseData.calc(r.rates, this.value);
//        responseData.showResults(curValDiv);
//    });
//    
//    inputValue.addEventListener('change', function() {
//        responseData.calc(r.rates, this.value);
//        responseData.showResults(curValDiv);
//    });
//    
//    getJSON('https://api.fixer.io/latest?base=USD', function(err, data) {
//        if (err === null) {
//            r = data;
//            responseData.base = r.base;
//            responseData.date = r.date;
//            responseData.calc(r.rates);
//            responseData.showResults(curValDiv);
//            responseData.setCurrencyInOptions('USD');
//        }
//        else {
//            console.log('Błąd połączenia z API fixer.io !!! Status request: '+err);
//            curValDiv.innerHTML = 'Błąd połączenia z API fixer.io !!! Status request: '+err;
//        }
//    });
//};



var currencyCalc = {
    root: null,
    responseData: {},
    htmlElements: {},
    base: null,
    rates: [],
    
    init: function(root, url) {
        let self = this;
        this.root = root;
        this.htmlElements.curValDiv = document.getElementById('currentValues');
        this.htmlElements.inputValue = document.getElementById('inputValue');
        this.htmlElements.currencySelect = document.getElementById('currencySelect');
        this.getJson(url);
        
        this.htmlElements.inputValue.addEventListener('input', function() {
            self.calc(self.responseData.rates, this.value);
            self.showResults(self.htmlElements.curValDiv);
        });
        
        this.htmlElements.currencySelect.addEventListener('change', function(evt) {
            let selected = evt.target || evt.srcElement;
            self.rates = self.recalc(selected.value);
            self.showResults(self.htmlElements.curValDiv);
        });
    },

    recalc: function(base) {
        let b;
        for (var i = 0; i < this.rates.length; i++) {
            if (this.rates[i].cur === base) {
                b = this.rates[i];
            }
        }
        //console.log(b);
        let temp = [];
        for (var i = 0; i < this.rates.length; i++) {
            //console.log(this.rates[i].cur);
            temp.push({'cur': this.rates[i].cur, 'val': ((1 / this.rates[i].val) * b.val)});
        }
        //temp.push({'cur': b.cur, 'val': 1});
        return temp;
    },

    calc: function(d, amount = 1) {
        //console.log(d);
        this.rates = [];
        for (var key in d) {
            if (d.hasOwnProperty(key)) {
                this.rates.push({'cur': key, 'val': (amount * d[key])});
            }
        }
    },
    
    getCurrency: function(code) {
        let res = {};
        for (var i = 0; i < currencies.length; i++) {
            if (currencies[i].code === code) {
                res.name = currencies[i].name;
                res.country = currencies[i].country;
            }
        }
        return res;
    },
    
    showResults: function(e) {
        var self = this;
        e.innerHTML = '';
        var tab = document.createElement("table");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var th = document.createElement("th");
        th.appendChild(document.createTextNode("Waluta"));
        tr.appendChild(th);
        th = document.createElement("th");
        th.appendChild(document.createTextNode("Nazwa"));
        tr.appendChild(th);
        th = document.createElement("th");
        th.appendChild(document.createTextNode("Kraj"));
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
            td.appendChild(document.createTextNode(item.val.toFixed(4)));
            tr.appendChild(td);
            tab.appendChild(tr);
        });    
        e.appendChild(tab);
    },
    
    setCurrenciesInOptions: function(def) {
        let self = this;
        if (def !== null) {
            var selDefOpt = document.createElement("option");
            var selDefOptText = document.createTextNode(def);
            selDefOpt.appendChild(selDefOptText);
            this.htmlElements.currencySelect.appendChild(selDefOpt);
        }
        this.rates.forEach(function(item, index) {
            var selOpt = document.createElement("option");
            var selOptText = document.createTextNode(item.cur);
            selOpt.appendChild(selOptText);
            self.htmlElements.currencySelect.appendChild(selOpt);
        });
    },
    
    getJson: function(url) {
        var self = this;
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url, true);
        httpRequest.responseType = 'json';
        httpRequest.onload = function() {
            if (this.status === 200 && this.readyState === 4) {
                self.responseData = this.response;
                self.responseData.rates[this.response.base] = 1;
                self.base = this.response.base;
                self.calc(self.responseData.rates);
                self.showResults(self.htmlElements.curValDiv);
                self.setCurrenciesInOptions(self.base);
            } else {
                console.log('Błąd połączenia z API fixer.io !!! Status request: '+this.status);
                self.htmlElements.curValDiv.innerHTML = 'Błąd połączenia z API fixer.io !!! Status request: '+this.status;
            }
        };
        httpRequest.send();
    }
};

window.onload = function() {
    currencyCalc.init(this, 'https://api.fixer.io/latest');
};