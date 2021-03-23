const express = require("express");
const router = express.Router();
const { Midi } = require("@tonejs/midi");
const midiParser = require("midi-parser-js");
const fs = require("fs");

router.get("/midi?:midiPath", function (req, res) {
  //console.log(req.query.midiPath);
  const midi_path = `/home/alan/Proyecto/Mern Auth 3/Proyecto/server/src/analisis/${req.query.midiPath}.mid`;
  //fs.createReadStream(midi_path).pipe(res);
  fs.readFile(midi_path, "base64", function (err, data) {
    // Parse the obtainer base64 string ...
    var midiArray = midiParser.parse(data);
    // done!
    //console.log(midiArray);
    res.send({ score: midiArray });
  });
});

module.exports = router;
