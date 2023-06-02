$(function(){
    $("button").on("click",loadServerData);
});
function loadServerData(){
    let rss2json ="https://api.rss2json.com/v1/api.json?rss_url=";
    $.getJSON(rss2json+"https://www.mohw.gov.tw/rss-16-1.html")
    .done(function(data) {
        // debugger;
        for(let x=0;x<data.items.length;x++){
            $("#dataTable").append(`<tr><td><a target='_blank' href='${data.items[x].link}'>${data.items[x].title}</a></td><td>${data.items[x].pubDate.split(" ")[0]}</td></tr>`);
            }
            console.log("Success");
        })
        .fail(function(){ console.log("Error");})
        .always(function(){console.log("Always");});
    }