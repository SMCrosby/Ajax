
$(() => {

        var user = {
            id: 0, username: "BBunny", password: "0000", 
            firstname: "Bugs", lastname: "Bunny",
            phone: "513-555-5555", email: "BBunny@gmail.com",
            isReviewer: false, isAdmin: false
        };


        // //start of ajax call
        // $.ajax({
        //     method: "POST",
        //     url: "http://localhost:53016/api/users",
        //     data: JSON.stringify(user),     //translates javascript object to JSON object
        //     contentType: "application/json"

        // })
        //     .done(res => {
        //         console.log(res);
        //         getAll();
        //     })
        //     .fail(err => {
        //         console.error(err);
        //     });
        // //end of ajax call


const getAll = () => {
    $.getJSON("http://localhost:53016/api/users")
        .done(users => {
            console.log(users);

        });   
    }

    console.log("After the getJSON call");
    
    })