const express = require('express');
const router = express.Router();
const upload = require('../upload/upload');
const Events = require('../model/eventsSchema');


router.post('/create-event/basic-info', async(req, res)=>{
    try{
      const {title, organiser, type, category, tags, location, startDate, endDate } = req.body;

      const BasicInfoSave = await Events.create({title, organiser, type, category, tags, location, startDate, endDate})
      console.log("Basic Info Save...", BasicInfoSave._id);
      if(BasicInfoSave){
        return res.status(200).json({message: "Saved ✔ ", eventId: BasicInfoSave._id.toString()})
      }
    }catch(err){
      console.log(err);
      res.status(500).json({message: "Failed to create event!!"})
    }
})

router.put('/create-event/details/:eventId', (req, res)=>{
  
})


router.post('/upload', upload.array('eventImg',10), async (req, res)=>{
  var fileinfo = req.file;
  var title = req.body.title;
  console.log(title);
  res.send(fileinfo);
})


module.exports = router;