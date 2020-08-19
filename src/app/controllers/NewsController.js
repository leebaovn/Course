class NewsController{

  //[GET] /news
  index(req,res){
    res.render('news');
  }

  show(req,res){
    res.send(req.params.slug);
  }
}

module.exports = new NewsController;