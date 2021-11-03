// console.log(firebase)

function signup() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((val)=>{
        var snap = val.user;
        console.log(snap.email)
        // console.log(val)


        var obj = {
            name : 'hasnain',
            class : 13,
            email : snap.email,
            uid : snap.uid,
            password : password

        }

        firebase.database().ref('/User').child(snap.uid).set(obj)
    })




    .catch((err)=>{
        console.log(err)
    })
}