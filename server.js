const express=require('express');
// import latest cors version
app=express();
app.use(express.json())
app.listen(3000, () => {
    console.log("I'm Waiting")
})



const cors=require("cors")
app.use(cors())
app.use(cors({
    origin:'http://localhost:4200'
}))

const mysql=require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'rahul',
    password: 'Ragul@0209',
    database: 'Student'
});

connection.connect();
console.log("connected");

// getall ------------------------------------------------------
app.get('/allStudent',(req,res)=>{
    connection.query(`select id,Name,Degree,College,Location from studentDetails where isActive=1;`,function(error,results){
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            res.json(results)
        }
    });
})
// getByid--------------------------------------------------------
app.get('/getById/:id', (req, res) => {

    connection.query(`SELECT id,Name,Degree,College,Location from studentDetails where id =?;`,[req.params.id], function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log('The solution is: ', results);
        res.json(results)
    });
})

// insert----------------------------------------------------------
app.post('/insert', (req, res) => {
    console.log(req.body)
    connection.query('insert into studentDetails (Name,Degree,College,Location,isActive) values (?,?,?,?,?)', [req.body.Name, req.body.Degree, req.body.College,req.body.Location,1], function (error, results) {
        if (error) {
            console.log("error", error)
        }
        console.log("created sucessfully");

        console.log(results)
        res.json(results)
    });
})

// edit----------------------------------------------------------------------------
app.put('/update', (req, res) => {
    connection.query('update studentDetails set Name=?,Degree=?,College=?,Location=? where id=?', [req.body.Name,req.body.Degree,req.body.College,req.body.Location,req.body.id], function (error, results) {
        if (error) {
            console.log("error", error)
        }   
        console.log("update sucessfully");
        console.log(results)
        res.json(results)

    });
})

// delete------------------------------------------------------------------------->
app.put('/delete', (req, res) => {
    connection.query('update studentDetails set isActive=? where id=?', [0,req.body.id], function (error, results) {
        if (error) {
            console.log("error", error)
        }
        console.log("deleted sucessfully");

        console.log(results)
        res.json(results)

    });
})



// staffGetall---------------------------------------------------
app.get('/allStaff',(req,res)=>{
    connection.query(`select id,Name,position,salary from staffDetails where isActive=1;`,function(error,results){
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            res.json(results)
        }
    });
})


// getbyId-------------------------------------------------------

app.get('/getId/:id', (req, res) => {

    connection.query(`SELECT id,Name,position,salary from staffDetails where id =?;`,[req.params.id], function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log('The solution is: ', results);
        res.json(results)
    });
})

// insert----------------------------------------------------------
app.post('/add', (req, res) => {
    console.log(req.body)
    connection.query('insert into staffDetails (Name,position,salary,isActive) values (?,?,?,?)', [req.body.Name, req.body.position, req.body.salary,1], function (error, results) {
        if (error) {
            console.log("error", error)
        }
        console.log("created sucessfully");

        console.log(results)
        res.json(results)
    });
})

// edit----------------------------------------------------------------------------
app.put('/updatestaff', (req, res) => {
    connection.query('update staffDetails set Name=?,position=?,salary=? where id=?', [req.body.Name,req.body.position,req.body.salary,req.body.id], function (error, results) {
        if (error) {
            console.log("error", error)
        }   
        console.log("update sucessfully");
        console.log(results)
        res.json(results)

    });
})

// delete------------------------------------------------------------------------->
app.put('/deletestaff', (req, res) => {
    connection.query('update staffDetails set isActive=? where id=?', [0,req.body.id], function (error, results) {
        if (error) {
            console.log("error", error)
        }
        console.log("deleted sucessfully");

        console.log(results)
        res.json(results)

    });
})
