const express = require('express');
require('dotenv').config();
const UserModel = require('./models/UserModel');
const PostModel = require('./models/PostsModel');
const app = express();
const port = process.env.PORT||3000;

const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());




app.get('/', (req, res) => {
    res.send("new world")
    // res.redirect('/singup');
    
});

app.get('/singup', (req, res) => {
    res.render('Singup');
    
});

app.post('/create', async (req, res) => {
    let { Name, Email, Password } = req.body;

    let user = await UserModel.findOne({ Email });
    if (user) {
        res.send('User already exists');
    } else {
        bcrypt.genSalt(10, async function (err, salt) {
            bcrypt.hash(Password, salt, async function (err, hash) {
                let newuser = await new UserModel({ Name, Email, Password: hash });
                await newuser.save();

                let userid = newuser._id;
                var token = jwt.sign({ Email, Password, userid }, 'shhhhh');
                res.cookie('token', token);

                res.redirect('/login');
            });
        });
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    let { Email, Password } = req.body;
    let user = await UserModel.findOne({ Email }).populate('posts');
    if (!user) return res.send('Something went wrong');

    bcrypt.compare(Password, user.Password, function (err, result) {
        if (result) {
            let userid = user._id;
            var token = jwt.sign({ Email, Password, userid }, 'shhhhh');
            res.cookie('token', token);
            res.render('user', { user });
        } else {
            res.send('Invalid credentials');
        }
    });
});

app.post('/postcreate', IsloggedIn, async (req, res) => {
    let { title, body } = req.body;
    let user = await UserModel.findOne({ Email: req.user.Email });

    let newpost = await new PostModel({ title, body });
    await newpost.save();

    user.posts.push(newpost._id);
    await user.save();

    // Fetch the updated user data with the new post
    let updatedUser = await UserModel.findOne({ Email: req.user.Email }).populate('posts');
    res.render('user', { user: updatedUser });
});

app.get("/editpost/:postid", IsloggedIn, async (req, res) => {
    const postId = req.params.postid;
    const post = await PostModel.findById(postId);
    res.render('editpost', { post });
})

app.post('/editpost/:postid', IsloggedIn, async (req, res) => {
    let { title, body } = req.body;
    let id=req.params.postid
   
    await PostModel.findByIdAndUpdate(id,{title,body});
    let updatedUser = await UserModel.findOne({ Email: req.user.Email }).populate('posts');
    res.render('user', { user: updatedUser });
});


//deleter route
app.get('/removepost/:postid', IsloggedIn, async (req, res) => {
    let id=req.params.postid
   
    await PostModel.findByIdAndDelete(id);
    let updatedUser = await UserModel.findOne({ Email: req.user.Email }).populate('posts');
    res.render('user', { user: updatedUser });
});

app.get('/logout', (req, res) => {
    res.cookie('token', '');
    res.redirect('/login');
});

function IsloggedIn(req, res, next) {
    if (req.cookies.token == '') {
        res.redirect('/login');
        console.log('Login first');
    } else {
        let data = jwt.verify(req.cookies.token, 'shhhhh');
        req.user = data;
        next();
    }
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});