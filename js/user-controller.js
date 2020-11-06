const baseurl = "http://localhost:53016/api";       //technique to clean up code //page uses jquery

$(() => {
    $("#pkbutton").on("click", () => {
        getPk();
    });
})

    const getAllUsers = () => {
        $.getJSON(`${baseurl}/users`)
            .done(res => {
                console.log(res);
                displayAll(res);
            });   
        }

        const getPk = () => {
            let id = $("#ppk").val()        //sets var id to user input
            $.getJSON(`${baseurl}/users/${id}`)
            .done(res => {
                console.log(res);
                displaySingle(res);
            });   
        }

        const displaySingle = (user) => {
            $("#pid").val(user.id);
            $("#pusername").val(user.username);
            $("#pfirstname").val(user.firstname);
            $("#plastname").val(user.lastname);
            $("#pphone").val(user.phone);
            $("#pemail").val(user.email);
            $("#previewer").val(user.isReviewer);
            $("#padmin").val(user.isAdmin);
        }
       
        const displayAll = (users) => {
            let tbody = $("tbody");
            tbody.empty();

            for(let user of users) {
                let tr = $("<tr></tr>");
                let tdId = $(`<td>${user.id}</td>`);
                let tdusername = $(`<td>${user.username}</td>`);
                let tdname = $(`<td>${user.firstname} ${user.lastname}</td>`);
                let tdphone = $(`<td>${user.phone}</td>`);
                let tdemail = $(`<td>${user.email}</td>`);
                let tdreviewer = $(`<td>${user.isReviewer}</td>`);
                let tdadmin = $(`<td>${user.Admin}</td>`);
                tr.append(tdId)
                .append(tdusername).append(tdname)
                .append(tdphone).append(tdemail)
                .append(tdreviewer).append(tdadmin);
                
                tbody.append(tr);
            
            } 
            
            //getAllUsers();
    
        }
        
    
        
        
        //Started using JavaScript
        
        // for (let user of users) {
        //     let row = "<tr>";
        //     row += `<td>{user.id}</td>`;
        //     row += `<td>{user.uername}</td>`;
        //     row += `<td>{user.password}</td>`;
        //     row += `<td>{user.firstname}</td>`;
        //     row += `<td>{user.lastname}</td>`;
        //     row += `<td>{user.phone}</td>`;
        //     row += `<td>{user.email}</td>`;
        //     row += `<td>{user.isReviewer}</td>`;
        //     row += `<td>{user.isAdmin}</td>`;
        //     row += "</tr>";
        //     tbody.innerHTML += row;
        // }