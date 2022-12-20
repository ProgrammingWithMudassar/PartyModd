const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, './Storage/')
    },
    filename: (req, file, cb) =>{
        cb(null, 'i-'+ Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({
    storage: storage,
})


module.exports = upload