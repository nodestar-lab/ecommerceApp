
class LoginService{

    constructor(config, jr){
        this.config = config;
        this.jr = jr;
        console.log("[--] LoginService");
    }

    handler(req, res){
        res.send({"authenticated" :true});
    }

    saveLoginDetails(){
        var data = {
            username : "bipin2411",
            name : "Bipin Kumar",
            password : "Password"
        };
        this.jr.DBManager.db.user.save(data);
    }
}

module.exports = LoginService;