const express = require('express');
const cors = require('cors');
//const multer = require('multer');
const bodyParser = require('body-parser');
const db = require('./config/db.config');
const Uploads = db.pupload;


const app = express();
const PORT = 8080;
//const imageUploadPath = './resources/uploads';
//add body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//add cors
const corsOrigin = 'http://localhost:3000'
app.use(cors({
    origin: [corsOrigin],
    methods: ['GET', 'POST'],
    credentials: true
}));

//serve images
//app.use(express.static('public'));
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'luemens/uploads')));

//test route
app.get('/test', (req, res)=>{
    res.send({message: 'I am Unloccode'});
});
//app.get('/x',(req, res)=>{
//    Uploads.findByPk(1, {
//        attributes: [
//            'id',
//            'name'
//        ]
//    }).then(user=>{
//        res.status(200).json(user);
//    })
//});

//store images
//const storage = multer.diskStorage({
//    destination: function(req, file, cb){
//        cb(null, imageUploadPath);
//    },
//    filename: function(req, file, cb){
//        const x = `${file.fieldname}_unloccode_${Date.now()}_${file.originalname}` 
//        cb(null, x);
//        console.log(x);
//    }
//})
//
//const imageUpload = multer({storage: storage});

//imageUpload.array("my-image-file")

//add express route
//app.post('/image-upload', imageUpload.single("my-image-file"), (req, res)=>{
//    console.log("POST request received to /image-upload.");
//    //add req.body for test value
//    //console.log('Axios PORT body: ', req.body);
//    res.send('POST request received on server to /image-uplad.');
//});

//const path = require('path');
//console.log(path);
//app.use('/axis/server', express.static(path.join(__dirname, 'public')));
//app.use('public', express.static(path.join(__dirname, 'public')));

//app routes
require('./routes/routes')(app);

//fire-up-the-server
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});

//new data
db.sequelize.sync({force: true}).then(()=>{
    console.log('Drop and Resync with {force: true}');
    Uploads.create({
        name: 'alafsasa'
    });
});