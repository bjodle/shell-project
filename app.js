
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');


const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://pedro:Pocketvalley4@users.pldtawa.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "test";
const DataB = "DataBase"

async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // Use the collection "people"
         const col = db.collection("people");
         // Construct a document                                                                                                                                                              
         let personDocument = {
             "name": { "first": "Alan", "last": "Turing" },
             "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
             "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
             "contribs": [ "Turing machine", "Turing test", "Turingery" ],
             "views": 1250000
         }
         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(personDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
run().catch(console.dir);

async function logInnFuction() {

    // db.collection('Brukere').get().then((snapshot) => {
    //   snapshot.docs.forEach(doc => {
    //     console.log(doc.data());
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(DataB);
        // Use the collection "people"
        const col = db.collection("users");
        // **__**__**__**__**__**__**__**__**
        let userInfo ={
            "username": document.getElementById("useri")
        }

        const q = await col.insertOne(userInfo);
        const user = await col.findOne();
        console.log(user);
        
        if (user("username") = document.getElementById("useri")){
        document.getElementById("maintext") = user
        }

    }
    finally{
        await client.close();
    }
};
  
        // if ((UserInput === uName && UserPassword === uPassword) && uRole === 'Kunde') {
        //   console.log("is this true?");
        //   logInnState = true;
        //   console.log(logInnState);
        // }
  
        // if ((UserInput === uName && UserPassword === uPassword) && uRole === 'Admin') {
        //   // window.location.replace = "https://www.vg.no";
        //   console.log("is this true?");
        //   logInnState = true;
        //   admin = true
        //   console.log(logInnState);
        //   console.log(admin);
        // }
      
  
//       if (logInnState && !admin) {
//         window.location.replace("http://127.0.0.1:5501/index.html")
//       }
//       if (logInnState && admin) {
//         window.location.replace("http://127.0.0.1:5501/html/adminside.html")
  
//       }
    
//   }
// };