// const switchQuote = () => {
//     $.ajax({
//         // url: 'http://quotes.stormconsultancy.co.uk/random.json',
//         // url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
//         url: 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
//         data: {format: 'jsonp'},
//         error: function() {
//             console.log('An error has occurred');
//         },
//         dataType: 'jsonp',
//         success: function(data) {
//             console.log(`Fetched Quote Sucessfully`)
//             console.log(data)
//             $("#quote").html(data.quote)
//             $("#quote-source").html(`---${data.author}`)
//         },  
//         type: 'GET'
//     });
// }

function switchQuote() {
    //Show loading spinner
    $("#loadingSpinner").show()

    //Fetch new quote
    $.ajax({
        url: 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
        data: {format: 'jsonp'},
        error: function() {
            console.log('An error has occurred');
        },
        dataType: 'jsonp',
        success: function(data) {
            console.log(`Fetched Quote Sucessfully`)
            console.log(data)
            let quote = data.quoteText
            let author = data.quoteAuthor === '' ? 'Unknown': data.quoteAuthor

            //Slide animation
            $("#content").slideUp(500, function(){
                $("#text").html(``)
                $("#author").html(``)
            })
            $("#content").fadeOut(500, function(){
                $("#text").html(`${quote}`)
                $("#author").html(`${author}`)
            })

            $("#content").slideDown(500, function(){
                //Hide loading spinner after content finished sliding down
                $("#loadingSpinner").hide()
            })
            $("#content").fadeIn(100)

            //Set share links
            const twitLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote} --- ${author}`
            const tumblrLink = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content= ${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
            $("#tweet-quote").attr('href',twitLink)
            $("#tumblr-quote").attr('href', tumblrLink)
        },  
        type: 'GET'
    });
}

$(document).ready(function(){
    //Enable button tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    //Initally hide the loading spinner
    $("#loadingSpinner").hide()

    //First Load
    switchQuote();

    //Trigger fetch of new quote
    $("#new-quote").click(switchQuote);

});

var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b> and welcome to PCPSForms!';