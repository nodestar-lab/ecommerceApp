module.exports = {
    collection_name: "user",
    indexFields: [
        {
            key: "email",
            value: "text" // specify which type of index text based or id based
        },
        {
            key: "username",
            value: 1 // specify which type of index text based or id based
        }
    ],
    fields: {
        email: String,
        username: String,
        password: String,
        region_details: Object,
        addresses: Object,
        roles: Array,
        type: String,
        updated: Date,
        created: Date
    }
};
