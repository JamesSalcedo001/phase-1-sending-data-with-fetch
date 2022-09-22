// // Add your code here
// function submitData(name, email) {
//     let user = { name, email };

//     const configObj = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify(user),
//     };

//     fetch("http://localhost:3000/users", configObj)
//     .then(function (res) {
//         return res.json();
//     })
//     .then(function (obj) {
//         console.log(obj);
//     })
//     .catch(function (error) {
//         alert("Hey man you messed up!");
//         console.log(error.message);
//     });
// };


/* write a function named submitData that has two arguments, the first is a string 'name', the second is a string 'email'. In order for the tests in the lab to pass, submitData needs to RETURN the fetch. 

TEST 1 SEND DATA: In submitData post request to "http://localhost:3000/users" with fetch. it should have a URL, content type and accept headers, a body with name and email passed in as arguments to the function, assign to name and email keys within an obj, and stringify it. 

T2 HANDLE RESPONSE: Recieve response from server with data from post request and new ID number assigned to it. use then() to access response, use json() on it to parse contents of body. use a second then() to access new obj. find new id of obj and append to the dom. test code in console with index.html. call submitData in the console to retrieve ID number and show on page?

T3 ERROR HANDLING: after two then() calls on fetch, add catch(). recieve error message obj, and append to the dom when it is called.

T4 RETURN FETCH CHAIN: make sure to RETURN fetch chain from submitData function
*/



function submitData(name, email) {
    const user = { name, email };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(user),
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function (res) {
        return res.json();
    })
    .then(function (object) {
        console.log(object);
        document.body.innerHTML = object["id"]
    })
    .catch(function (error) {
        alert("WRONG");
        console.log(error.message);
        document.body.innerHTML = error.message;
    });
};

submitData();


