var app = {

    htmlDecode: function(value) {
        return value
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
    },

    init: function() {
      console.log('app.init');
      //create elements
      $('#root').append('<textarea class="col-lg-4 p-2 shadow p-3 mb-5 bg-white rounded" name=text rows=20 cols=100 wrap=soft id=stringToConvert></textarea>')
                .append('<button type="button" class="col-lg-3 m-3 btn btn-info h-25 shadow p-3 mb-5 rounded" id=convert>Convert to Enablon String</button>')
                .append('<textarea class="col-lg-4 p-2 shadow p-3 mb-5 bg-white rounded" name=text2 rows=20 cols=100 wrap=soft id=stringConverted ></textarea>');

      // listen enter press
      $('#convert').click(function() {
            // recuperate value pressed
            var StringToConvert = $('#stringToConvert').val();
            var tab = StringToConvert.split("\"");
            var StringInEnablon = "\"";
            //add double quote in place of simple
            //StringInEnablon = StringInEnablon + tab[0] + "\"" + "\"" +   tab[1] 
             for(i=0;i<tab.length;i++){
                if(i<tab.length-1){ // manage last part dont finish with double mark
                    StringInEnablon = StringInEnablon + tab[i] + "\"" + "\"";
                } else {
                    StringInEnablon = StringInEnablon + tab[i] + "\"";
                }
            }
            $("#stringConverted").val(app.htmlDecode(StringInEnablon));
      });
    }
  }
  
  $(app.init);