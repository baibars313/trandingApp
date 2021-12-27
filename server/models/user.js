const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	mobile: {
		type: String,
		required: true,
	},
	isVerified: {
		type: Boolean,
		default: false,
		required: true,
	},
	referralID: {
		type: String,
		required: true,
	},
	referredBy: {
		type: String,
		default: null,
	},
	wallet: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Wallet",
		required: true,
	},
	portfolio: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Portfolio",
		required: true,
	},
	watchList: [
		{
			type: String,
			required: true,
		},
	],
	notfications: [{
        Date : {
            type:Date,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            default: 'no'
        }
    }]
	
	// image: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);
