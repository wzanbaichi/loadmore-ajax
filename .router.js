function setRouter(app){ 
 var router = app; 

app.get('/loadmore',function (req,res) {
  var index = req.query.index
  var loadnum = req.query.loadnum
  var data = []
  for(var i = 0;i<loadnum;i++){
    data.push('内容'+(i+parseInt(index)))
  }
  setTimeout(function () {
    res.send(data)
  },3000)

})}
 module.exports.setRouter = setRouter