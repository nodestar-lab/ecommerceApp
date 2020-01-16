module.exports = {
    collection_name: "otpstore",
    indexFields: [],
    fields: {
        email: String,
        username: String,
        otp: Number,
        created: Date,
        generated_count: Number,
        verified: Boolean
    }
}