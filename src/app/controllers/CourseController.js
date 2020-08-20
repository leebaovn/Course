const Course = require('./..//models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }

  //[POST] /courses/store
  store(req, res, next) {
    const newCourse = new Course({
      ...req.body,
      image: `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`,
    });

    newCourse
      .save()
      .then(() => res.redirect(`/`))
      .catch(next);
  }

  //[POST] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }
}

module.exports = new CourseController();
