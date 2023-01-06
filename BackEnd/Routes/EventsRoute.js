const express = require('express');
const router = express.Router();
const upload = require('../upload/upload');
const Events = require('../model/eventsSchema');
const moment = require('moment')


router.post('/create-event', async (req, res) => {
  try {
    const eventCreated = await Events.create({
      //published or pending
      status: "pending"
    })
    if (eventCreated) {
      return res.status(200).json({ status: true, message: "Event Created ✔ ", eventId: eventCreated._id.toString() })
    }
  } catch (err) {
    return res.status(500).json({ status: false, message: "Failed to create event!!", error: err })
  }
})



router.put('/create-event/basic-info/:eventId', async (req, res) => {

  const EventParamsID = req.params.eventId;
  const { title, organiser, type, category, tags, location,
    eventStartDate, eventStartTime,
    eventEndDate, eventEndTime
  } = req.body;

  // console.log("EVENT -----: ",     eventStartDate, eventStartTime,
  // eventEndDate, eventEndTime)

  //FOR START
  // tell moment how to parse the input string
  var momentObj = moment(eventStartDate + eventStartTime, 'YYYY-MM-DDLT');

  // conversion
  var StartdateTime = momentObj.format('YYYY-MM-DDTHH:mm:s') + 0;
  // console.log(StartdateTime);

  //FOR END
  // tell moment how to parse the input string
  var momentObj = moment(eventEndDate + eventEndTime, 'YYYY-MM-DDLT');

  // conversion
  var EnddateTime = momentObj.format('YYYY-MM-DDTHH:mm:s') + 0;
  // console.log(EnddateTime);

  //converting string date to DATE FORMAT:
  let newStartDate = new Date(Date.parse(StartdateTime));
  let newEndDate = new Date(Date.parse(EnddateTime));


  // console.log("NEW START", newStartDate);

  Events.findByIdAndUpdate(EventParamsID, { title, organiser, type, category, tags, location, startDate: newStartDate, endDate: newEndDate },
    (err, result) => {
      if (err) {
        return res.status(500).json({ status: true, error: err, message: "Failed to create event!!" })
      } else {
        return res.status(200).json({ status: true, message: "Saved ✔ " })
      }
    })

})

router.put('/single-event/:eventId', async (req, res) => {

  const TicketsNumber = 0;
  const EventParamsID = req.params.eventId;

  const eventFound = await Events.findById(EventParamsID)

  // console.log(eventFound)
  res.status(200).json(eventFound)


})
router.delete('/delete-event/:eventId', async (req, res) => {

  const EventParamsID = req.params.eventId;

  const eventFound = await Events.findByIdAndDelete(EventParamsID)
  // console.log(eventFound)
  res.status(200).json({ status: true, message: "Event Cancelled!! " })


})


router.put('/create-event/details/:eventId', upload.fields([
  { name: 'eventImage', maxCount: 1 },
  { name: 'eventImages', maxCount: 10 }
]), async (req, res) => {

  try{
    const EventParamsID = req.params.eventId;
    const { summary, description } = req.body
    // console.log("re", req.files)
  
    const eventImageName = req.files.eventImage[0].filename
    // const eventImageName = []
    // for(let i = 0; i<req.files.eventImage.length; i++){
    //   const oneFile = req.files.eventImage[i];
    //   if (oneFile.fieldname === 'eventImage'){
    //     eventImageName.push(file.fieldname);
    //   }
  
    // }
    // console.log(eventImageName)
  
    // const eventImage = req.files.eventImage
  
    const eventImagesNames = [];
    for (let i = 0; i < req.files.eventImages.length; i++) {
      
      const file = req.files.eventImages[i];
      if (file.fieldname === 'eventImages') {
        eventImagesNames.push(file.filename);
      }
    }
    // console.log("ONLY IMAGE => ", eventImageName);
  
    // console.log("EVENT IMGAES => ", eventImagesNames);
  
    Events.findByIdAndUpdate(EventParamsID, {
      summary: summary,
      description: description,
      eventImage: eventImageName,
      eventImages: eventImagesNames
    },
  
      (err, result) => {
        if (err) {
          return res.status(500).json({ status: false, message: "Retry!!" })
        } else {
          return res.status(200).json({ status: true, message: "Saved ✔ ", });
        }
      }
    )

  }catch(err){
    console.log(err)

  }
 

})

router.put('/publish-event/:eventId', (req, res) => {

  const EventParamsID = req.params.eventId;
  const { status, eventView } = req.body
  // console.log(status, eventView, EventParamsID);

  Events.findByIdAndUpdate(EventParamsID, { status, eventView }, (err, result) => {
    if (err) {
      return res.status(500).json({ status: true, error: err, message: "Failed to create event!!" });
    } else {
      return res.status(200).json({ status: true, message: "Event Successfully Created ✔ " });
    }
  })


})

router.get('/all-events', async (req, res) => {
  const allEvents = await Events.find({});
  // console.log(allEvents);
  return res.status(200).json(allEvents);
})

router.get('/event-category', async (req, res)=>{
try{
  const eventCategory = req.query.category;

  // console.log(eventCategory);
  const founddata  = await Events.find({category: eventCategory})
  return res.status(200).json(founddata)

}catch(err){
  return res.status(500).json({ status: false, message: "Failed to load!!" })

}

},[])

router.post('/upload', upload.array('eventImg', 10), async (req, res) => {
  var fileinfo = req.file;
  var title = req.body.title;
  // console.log(title);
  res.send(fileinfo);
})



module.exports = router;