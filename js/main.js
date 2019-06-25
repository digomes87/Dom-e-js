// var xhr = new XMLHttpRequest();


// xhr.open('GET', 'https://api.github.com/users?since=135');
// xhr.send(null);


// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

var minhaPromese = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('https://api.github.com/users?since=135');
    });
}