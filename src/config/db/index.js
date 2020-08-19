const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/course_edu_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected!');
  } catch (err) {
    throw err;
  }
}

module.exports = {
  connect,
};
