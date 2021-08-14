const controller = require('../controllers/controller');

module.exports = function(app){
    app.use(function(res, req, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    })
    app.post("/api/auth/signup", controller.signup);
    app.post("/image-upload", controller.imageUpload.single("my-image-file"), (req, res)=>{
        console.log("POST request received to /image-upload");
        res.send('POST request received on server to /image-upload');
    });
    app.get("/api/auth/fetchimage", controller.fetchimage);
    app.get("/api/auth/tests", controller.tests);
};
