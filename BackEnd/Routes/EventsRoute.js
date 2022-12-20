const express = require('express');
const router = express.Router();
const upload = require('../upload/upload');
const Events = require('../model/eventsSchema');



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
    return res.status(500).json({ status: false, message: "Failed to create event!!" , error : err  })
  }
})

router.put('/create-event/basic-info/:eventId', async (req, res) => {

  const EventParamsID = req.params.eventId;
  const { title, organiser, type, category, tags, location, startDate, endDate } = req.body;

  Events.findByIdAndUpdate(EventParamsID, { title, organiser, type, category, tags, location, startDate, endDate },
    (err, result) => {
      if (err) {
        return res.status(500).json({ status: true, message: "Failed to create event!!" })
      } else {
        return res.status(200).json({ status: true, message: "Saved ✔ " })
      }
    })

})

router.put('/create-event/details/:eventId', upload.fields([
  { name: 'eventImage', maxCount: 1 },
  { name: 'eventImages', maxCount: 10 }
]), async (req, res) => {
  const EventParamsID = req.params.eventId;
  const { summary, description } = req.body

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
  console.log("ONLY IMAGE => ", eventImageName);

  console.log("EVENT IMGAES => ", eventImagesNames);

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
        return res.status(200).json({ status: true, message: "Saved ✔ ",  });
      }
    }


  )



})


router.post('/upload', upload.array('eventImg', 10), async (req, res) => {
  var fileinfo = req.file;
  var title = req.body.title;
  console.log(title);
  res.send(fileinfo);
})


module.exports = router;