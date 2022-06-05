const Geust = require('../models/geust');

const postGeust = (req, res) => {
    Geust.create(req.body)
    .then((geust) => {
        rres.status(200)
        res.setHeader('Content-Type','application/json')
        res.json(geust)
   })
    .catch((err) => {
        console.log(err);
        res.send(err).status(500)
    })
}
const getAllGeust = (req, res) => {
    Geust.find()
    .then((geust) =>{
         res.status(200)
         res.setHeader('Content-Type','application/json')
         res.json(geust)
    })
    .catch((err) =>{
        console.log(err);
        res.end(err).status(500)
        
    })
}

const getGeust = (req, res) => {
    var {id:geustId} = req.params;
    Geust.findById({_id:geustId})
    .then((geust) => {
        res.status(200)
         res.setHeader('Content-Type','application/json')
         res.json(geust)
    })
    .catch((err) => {
        console.log(err);
        res.send(err).status(500);
    })
}

const deleteGeust = (req, res) => {
    var {id:geustId} = req.params;
    Geust.findByIdAndRemove({_id:geustId})
    .then((geust) => {
        console.log('Geust removed');
        res.status(200)
         res.setHeader('Content-Type','application/json')
         res.json(geust)
    })
    .catch((err) => {
        console.log(err)
        res.status(500)
        res.end(err)
    })
}

module.exports = {
    postGeust,
    getAllGeust,
    getGeust,
    deleteGeust
}