var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IPSchema = new Schema({
  clientIp: {
        type: String,
        unique: true,
        required: true
    },
  visitLog: {
    type: Array
  }
});

IPModel = mongoose.model('IPs', IPSchema);

/*
IPModel.saveIP = ({clientIp, date}) => {
  IPModel.findOne({clientIp: clientIp}, (err, data) => {
    if(data !== null) {
      
    }
  })
}
*/