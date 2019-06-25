axios.get('https://api.github.com/users/digomes87')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
