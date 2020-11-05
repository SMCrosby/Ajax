
$(
    () => {
        $.getJSON("http://localhost:53016/api/users")
            .done(users => {
                console.log(users);
            });
        console.log("After the getJson call");
    }
)