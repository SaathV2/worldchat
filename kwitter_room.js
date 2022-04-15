const firebaseConfig = {
    apiKey: "AIzaSyDgzaBjY0TmMIf119Tj0xnKlZO2JRoiLLs",
    authDomain: "kwitterrr-87e22.firebaseapp.com",
    databaseURL: "https://kwitterrr-87e22-default-rtdb.firebaseio.com",
    projectId: "kwitterrr-87e22",
    storageBucket: "kwitterrr-87e22.appspot.com",
    messagingSenderId: "878210531888",
    appId: "1:878210531888:web:43f0b95a4db5f3bb96a3f5",
    measurementId: "G-Q7K2LKZE7F"
  };

  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update(
          {
              purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
   }

   function getData()
   {
       firebase.database().ref("/").on('value', function(snapshot)
       {
           document.getElementById("output").innerHTML = "";
           snapshot.forEach(function(childSnapshot)
           {
               childKey = childSnapshot.key;
            Room_names = cjildKey;
            console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_name+"</div><hr>";
        document.getElementById("output").innerHTML +=row;
        });
       });
   }

   function logout()
   {
    window.location = "index.html";
   }
  
  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user saathvika"
    });
  
  }
  