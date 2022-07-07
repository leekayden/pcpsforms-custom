var rangeInput = function(){
    var slider = $('.rate-input'),
        used = $('.rate-input__value span'),
        rate = $('.rate-input__value2 span'),    
        range = $('.rate-input__range'),
        total = $('.rate-input__total span');
    
    function rangeSlider(){
         $(this).parent(slider).find(used).html(this.value);
        var usedValue =  parseFloat(used.text()),
            rateFixValue = 5.45,
            rateValue = usedValue * rateFixValue,
            rateValueTotal = new Intl.NumberFormat('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            }).format(rateValue),
            sum = usedValue * rateValue,
            sumTotal = new Intl.NumberFormat('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            }).format(sum);    
        //check the value return to 0 without decimal pts.
        if (this.value !== '0') {
          rate.html(rateValueTotal);
          total.html(sumTotal);
         } else {
           rate.html(rateValue);
           total.html(sum);
         };
  
    };
    
    slider.each(function(){ 
      range.on('input', rangeSlider);
    });
  };
  rangeInput();