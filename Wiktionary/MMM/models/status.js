var restful=require('node-restful');
var mongoose=restful.mongoose;






var statusSchema=new mongoose.Schema({

word:String,
meaning:String
});
module.exports=restful.model('servertable',statusSchema);