const express = require('express')

const geustlistRouter =express.Router();
const {
    getAllGeust,
    getGeust,
    deleteGeust,
    postGeust
} = require('../../controller/geust')

geustlistRouter.route('/')
.get(getAllGeust)
.post(postGeust);

geustlistRouter.route('/:geustId')
.get(getGeust)
.delete(deleteGeust)

module.exports = geustlistRouter;
