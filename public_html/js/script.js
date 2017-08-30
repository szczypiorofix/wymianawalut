
/**
 * Prosta, mała aplikacja do przelicznaia kursów różnych walut wg. aktualnych kursów
 * na świecie. Dane pochodzą z API http://fixer.io/ i aktualizowane są codziennie około 4PM CET.
 * Walutą bazową jest euro (EUR).
 * Z listy rozwijanej wybrać można walutę spośród 32 dostępnych walut.
 * Pole pozwala na wprowadzenie kwoty do przeliczenia po aktulanym kursie kusie walut wg. wybranej waluty bazowej.
 * 
 * @type object Główny obiekt aplikacji.
 * @version 1.0 
 * @property {object} root Obiekt root tymczasowo bez przeznaczenia.
 * @property {object} responseData Obiekt responseData - dane pochodzące z serwera. Obiekt zawiera kody walut i ich akutalne wartość wg. waluty bazowej.
 * @property {object} htmlElements Obiekt zawierający 3 elementy widoku html, lista rozwijana, pole wprowadzania oraz element div w tkórym umieszczana jest tabelka z danymi
 * @property {string} base Początkowa waluta (domyślnie EUR).
 * @property {integer} accuracy Suwak z ustawieniami dokładności (zaokrąglania kursów)
 * @property {array} rates Tablica z obiektami zawierająca dane na temat kodów walut i ich aktualnym kursie.
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
     * Funkcja inicjująca pobranie informacji z API fixer.io oraz przypisanie elementów HTML do własności obiektu
     * a także zainicjowanie listenerów: listy rozwijanej i pola do wpisywania sumy.
     * @param {object} root - na razie bez większego wykorzystania w programie.
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
     * Funkcja do przeliczania kursu walut podczas zmieniania aktualnej waluty. Kursy przeliczane są 
     * na podstawie danych z API pobranych w momencie uruchamiania strony, bez wykonywania kolejnych requestów.
     * @param {string} current - kod obecnej waluty (domyślnie. 'EUR');
     * @param {integer} amount - kwota pieniędzy danej waluty do przeliczenia
     * @returns {Array|currencyCalc.recalc.temp} tablica z kursami przeliczona na nowo.
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
     * Funkcja czyszcząca aktualną tablicę danych i wprowadzające do niej nowe dane.
     * Głównym zadaniem funkcji jest zamiana obiektu {kod_waluty: wartość, kod_waluty: wartość ...}
     * na [{cur: kod_waluty, val: wartość}]
     * @param {object} d - obiekt zawierający kody walut oraz ich aktualny przelicznik wg. waluty bazowej.
     * @param {integer} amount - suma pieniędzy do przeliczenia.
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
     * Funkcja wykorzystywana przy zmianie dokładność (ilość miejsc dziesiętnych) wyświetlanego wyniku.
     * @param {integer} a Liczba miejsc po przecinku w wyniku kursu danej waluty (wartości całkowite od 1 do 4)
     * @returns {void}
     */
    changeAccuracy: function(a) {
        this.showResults(this.htmlElements.curValDiv, a);
    },
    
    /**
     * Funkcja pobierająca dane na temat kraju i nazwy waluty na podstawie kodu z tablicy 'currencies'
     * @param {string} code - kod waluty np. 'EUR'
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
     * Funkcja tworząca tabelę z kodami i nazwami walut, kraju gdzie obowiązuje oraz aktualnymi kursami tych walut.
     * Po utworzeniu tabela dodawana jest do elementu html 'e'.
     * @param {object} e element div html ('curValDiv')
     * @param {integer} a dokładność (1 - 4), czyli ilość miejsc po przecinku w wyniku.
     * @returns {void}
     */
    showResults: function(e, a = 4) {
        let self = this;
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
            td.appendChild(document.createTextNode(item.val.toFixed(a)));
            tr.appendChild(td);
            tab.appendChild(tr);
        });    
        e.appendChild(tab);
    },
    
    /**
     * Funkcja dodająca wartości kodów walut do listy rozwijanej. Lista ta służy do zmiany akutalnej waluty do przeliczania.
     * @param {string} def - bazowy domyślny kod waluty ('EUR')
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
            // Nie dodawanie ostatniej pozycji - powtórzona waluta EUR.
            if (index === self.rates.length-1) return;
            
            var selOpt = document.createElement("option");
            var selOptText = document.createTextNode(item.cur);
            selOpt.appendChild(selOptText);
            self.htmlElements.currencySelect.appendChild(selOpt);
        });
    },
    
    /**
     * Funkcja wykonująca request do API fixer.io przy pomocy polecenia AJAX.
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
                // Jeśli odpowiedź z serwera jest poprawna to pobierane są dane na temat walut.
                self.responseData = this.response;
                self.responseData.rates[this.response.base] = 1;
                self.calc(self.responseData.rates);
                self.showResults(self.htmlElements.curValDiv);
                self.base = this.response.base;
                self.setCurrenciesInOptions(self.base);
            } else {
                console.log('Błąd połączenia z API fixer.io !!! Status request: '+this.status);
                self.htmlElements.curValDiv.innerHTML = 'Błąd połączenia z API fixer.io !!! Status request: '+this.status;
            }
        };
        httpRequest.send();
    },
    
    /**
     * Tablica z nazwami krajów/regionów, obowiązującymi walutami oraz ich kodami
     * @type Array - 
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
