var endpoint = 'latest'
var endpoint1 = 'convert';
var access_key = 'de700e4c2ca3750dd0699ff62bfc5901';
var from = $("input[name=originalCurrency]").value;
var to =$("input[name=convertedCurrency]").value;
var amount = $("input[name=quantity]").value;

$(document).ready(function(){
    //$(selector).load(http://data.fixer.io/api/latest)

    $("button").click(function(event){
        event.preventDefault();

        $.ajax({
            url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key,   
            dataType: 'jsonp',
            success: function(json) {
    
                // exchange rata data is stored in json.rates
                alert(json.rates.GBP);
            
                // base currency is stored in json.base
                alert(json.base);
            
                // timestamp can be accessed in json.timestamp
                alert(json.timestamp);

                //Here is where the value of the currency variables should be read (possibly using an if-else loop (if value="USD"
                // then use these currency rates... etc).

            }
        });

        /*$.ajax({
            url: 'http://data.fixer.io/api/' + endpoint1 + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,   
            dataType: 'jsonp',
            success: function(json) {
    
                // access the conversion result in json.result
                alert(json.result);
                console.log(json);
                    
        }
        });*/
    });
});
