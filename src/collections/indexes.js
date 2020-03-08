module.exports = {
    collection_name: "indexes",
    indexFields: [],
    fields: {
        email: String,
        mobile: Number,
        countryCode: String,
        recordId: String,
        connectionJSON: Object
    }

    /*
    indexes : { 
        email  : "bpkm007@gmail",
        mobile : 9738831182,
        countryCode : ,
        recordId : "5dab73839a9e91b2ec8dbb7c",
        db : {
            collection  : "user",
            connectionJSON : {ip : '127.0.0.1', port : '3200'}
        }       
    }   
  */
}