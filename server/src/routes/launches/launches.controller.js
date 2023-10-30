const {launches} = require('../../models/launches.model');

function httpGetAllLaunches(req, res){
    res.status(200).json(Array.from(launches.values()));
}

module.exports={
    httpGetAllLaunches,
}