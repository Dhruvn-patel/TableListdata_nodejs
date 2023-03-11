var express = require('express');
var app = express();
var mysql2 = require('mysql2');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var conn = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "studentDb"
})

conn.connect();

var fs = require('fs');




// console.log(random_name({ first: true})); // -> "Pushkar"
// console.log(random_name({ last: true })); // -> "Seth"

// console.log(`insert into studentInfo (student_firstName,student_LastName,student_clgName,student_emailId,student_city,student_contact,curr_time) values ('${fname}',' ${lname}',' ${clg}',' ${email}','${city}','${digits}' ,NOW());`);



function insert_student()
{
// var random_name = require('random-indian-name');
const randomemailgenerator = require('random-email');

const digits = Math.floor(Math.random() * 1000000000);
const college = ['Ahmedabad Institute Of Nursing Science, Lapkaman',
    'Unitedworld Institute of Design (UID), Ahmedabad',
    'Som Lalit Institute Of Business Management SLIBM, Ahmedabad',
    'Government Arts College, Jam Kalyanpur',
    'Shantaben Manubhai Patel School Of Studies & Research Architecture And Interior Design SMAID, Anand',
    'Bagwanlal K Modi Govt Pharmacy College, Rajkot',
    'Sheth M.C. College of Dairy Science, Anand',
    'Surajben Govindbhai Patel Ayurveda Hospital & Maternity Home, Anand',
    'Rama Manubhai Desai College Of Music & Dance, Anand',
    'Govindbhai Jorabhai Patel AyurvedIc College & Research Centre, Anand',
    'Institute Of Language Studies And Applied Social Sciences ILSASS, Anand',
    'Ipcowala Santram College Of Fine Arts, Anand',
    'RN Patel Ipcowala School Of law And Justice, Anand',
    'Nalini Arvind & TV Patel Arts College, Anand',
    'Arvindbhai Patel Institute Of Environmental Design APIED, Anand',
    'SS Patel College Of Physical Education, Anand',
    'AR College Of Pharmacy & GH Patel Institute Of Pharmacy, Vallabh Vidyanagar',
    'CZ Patel College Of Business & Management, Anand',
    'Sophisticated Instrumentation Centre For Applied Research & Testing SICART, Anand',
    'Centre For Studies & Research On Life And Works Of Sardar Vallabhbhai Patel CERLIP, Vallabh Vidyanagar',
    'Chimanbhai MU Patel Industrial Training Centre, Vallabh Vidyanagar',
    'Vallabh Vidyanagar Technical Institute, Anand',
    'Birla Vishvakarma Mahavidyalaya BVM, Anand',
    'Sabar Institute Of Technology For Girls, Sabarkantha',
    'Shri BG Garaiya Homoeopathic Medical College, Rajkot',
    'Silver Oak College Of Engineering & Technology SOCET, Ahmedabad',
    'Goyam Diamond Institute, Surat',
    'SDJ International College, Surat',
    'GH Patel College Of Engineering And Technology GCET, Anand'];


const cityName = ['surat', 'ahmedabad', 'patan', 'rajkot', 'bhavnagar', 'mehsana', 'unjha', 'Vapi', 'navsari', 'bardoli'];
var first_name = ['zeel', 'tanvi', 'krisha', 'jahnvi', 'kashyapi', 'kamlesh', 'dhyey', 'samarth', 'abhinav', 'aryan', 'rutvik', 'aditya', 'vishal', 'jay', 'reaj', 'harsh', 'vinay', 'hiren', 'ramesh', 'suresh', 'pravin', 'meshva', 'ankit', 'archi', 'harshil', 'parv', 'viren', 'dhruv'];
var last_name =  ['patel', 'goyani', 'chaudhary', 'yadav', 'shinde', 'shukla', 'mistry', 'prajapati', 'ghoya'];
var clg = college[Math.floor(Math.random() * college.length)];
var city = cityName[Math.floor(Math.random() * cityName.length)];
var fname = first_name[Math.floor(Math.random() * first_name.length)];
var lname =last_name[Math.floor(Math.random() * last_name.length)];
var email = randomemailgenerator({ domain: 'gmail.com' });
    return `insert into st_table (student_firstName,student_LastName,student_clgName,student_emailId,student_city,student_contact) values ("${fname}","${lname}","${clg}","${email}","${city}","${digits}")`;
}

app.get('/student',(req,res) => {
    for(let i = 0; i <1500;i++) {
        conn.query(insert_student(),(err,res,fields)=>{
         if(err) throw err;
        })
    }
    res.end();
});

app.listen(5030,()=>{
    console.log("port listening  5030");
})


