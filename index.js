//pequeño ejemplo
var express 			  = require("express"),
 mongoose 				  = require("mongoose"),
	passport			  = require("passport"),
	bodyparser			  = require("body-parser"),
	user                  = require("./models/user"),
localstrategy 			  = require("passport-local"),
	passportlocalmongoose = require("passport-local-mongoose"),
                    index = express();
mongoose.connect("mongodb://localhost:27017/auth_demo_app",{useNewUrlParser: true });
index.set("view engine", "ejs");
index.use(require("express-session")({
	secret: "rusty is the best and cutest dog in the world",
	resave: false,
	saveUninitialized: false
}));
index.use(passport.initialize());
index.use(passport.session());

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

//================================
//ROUTES
//================================
index.get("/", function(req,res){
	res.render("home");
});
index.get("/secret", function(req,res){
	res.render("secret");
});
//=======auth routes===================
index.get("/register",function(req,res){
	res.render("register");	
});
index.post("/register",function(req,res){
	res.send("register post");
});

//======================================
index.listen(3000, function(){
	console.log("server is running");
});