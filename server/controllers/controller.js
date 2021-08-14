const db = require('../config/db.config');
const Uploads = db.pupload;
const multer = require('multer');

//file path
const imageUploadPath = 'luemens/uploads';

exports.signup = (req, res) => {
    //save new data to db
    Uploads.create({
        name: req.body.name
    }).then(()=>{
        res.send({message: "User registered successfully!"});
    }).catch(error=>{
        res.status(500).send({message: error.message});
    });
};

//store images
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, imageUploadPath);
    },
    filename: function(req, file, cb){
        const imageURL = `${file.fieldname}_unloccode_${Date.now()}_${file.originalname}`
        cb(null, imageURL);
        console.log(imageURL);
        //store image name to db
        Uploads.create({
            name: imageURL
        }).then(()=>{
            console.log("Image store successfully!");
        }).catch(error=>{
            console.log(error.message);
        });
    }
});

exports.imageUpload = multer({storage: storage});

exports.fetchimage = (req, res) => {
    Uploads.findByPk(2, {
        attributes: [
            'id',
            'name'
        ]
    }).then(fetched=>{
        res.status(200).json(fetched);
    }).catch(error=>{
        res.status(500).send({
            message: error.message
        });
    });
};

exports.tests = (req, res) => {
    res.send({message: "I am Unloccode"});
};