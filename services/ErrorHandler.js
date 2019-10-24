class ErrorHandler{
    constructor(config, jr){
        this.config = config;
        this.jr = jr;
        console.log("[--] ErrorHandler")
    }
    handler(req,res){
        console.log("req : ", req);
        res.send({"error": "this is 400 error "});
    }

    saveProduct(){
        var data = {
            product : "Redmi 8a",
            headline : "this is redmi mobile",
            s_price : "7000",
            c_price : "4999",
            couponcode : "893TXZ"
        };
        this.jr.DBManager.db.product.save(data);
    }

}

module.exports = ErrorHandler;