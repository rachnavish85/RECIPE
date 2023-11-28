const mongoose = require('mongoose');
const url = ('mongodb+srv://rachnavish85:RachnaVishwakarma@cluster0.kmtvkme.mongodb.net/rachna?retryWrites=true&w=majority')
mongoose.connect(url)
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;