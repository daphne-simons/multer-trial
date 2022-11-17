const path = require('path')
const express = require('express')
// const app = express()
const cors = require('cors')
const fs = require('fs')
// multer must haves:
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './uploads')))
server.use(cors('*'))

//multer logic for uploading images
server.post('/uploadFile', upload.single('avatar'), function (req, res) {
  const fileType = req.file.mimetype.split('/')[1]
  console.log(fileType)
  const newFileName = req.file.filename + '.' + fileType
  fs.rename(
    `./uploads/${req.file.filename}`,
    `./uploads/${newFileName}`,
    function () {
      console.log('callback')
    }
  )
  res.sendStatus(200)
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

module.exports = server
