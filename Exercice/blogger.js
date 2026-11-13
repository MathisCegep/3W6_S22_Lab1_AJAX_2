let apikey = "AIzaSyByJiL407voPRmQyNAYZKWxBC5FuIlBIdQ";
let blogId = "8698899267502010836";
let MAUVAISblogId = "PAS_BON";
let html = "";

$.support.cors = true;
$(document).ready(function() {
    let url = "https://www.googleapis.com/blogger/v3/blogs/" + blogId + "/posts?key=" + apikey;
    
 $.get(url, null, function(data) {

        for(let value of data.items){
            html += '<h3><a href="' + value.url + '">' + value.title + '</a></h3>'
                    + '<br>Publié par <a href="' + value.author.url + '">' + value.author.displayName + '</a>'
                    /*Ajoutez les items supplémentaires ici*/
                    + '<br>Date de publicataion : ' + new Date(value.published).toLocaleDateString()
                    + '<br>Réponse : ' + value.replies.totalItems
        }

        // $.each(data.items, function(index, value) {
        //     let publishedDate = new Date(value.published);
        //     html += '<h3><a href="' + value.url + '">' + value.title + '</a></h3>'
        //             + '<br>Publié par <a href="' + value.author.url + '">' + value.author.displayName + '</a>'
        //             /*Ajoutez les items supplémentaires ici*/
        //             + '<br>Date de publicataion : ' + publishedDate.toLocaleDateString()
        //             + '<br>Réponse : ' + value.replies.totalItems
        // });
        $("#posts").html(html);
    })
     .fail(function(error) {
         console.log(error.responseText); 
         alert(error.responseText);       
     });
});


