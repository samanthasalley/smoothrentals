var mongoose = require("mongoose");

var applicationSchema = new mongoose.Schema({
    primaryApplicant: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        currentAddress: {
            street: {
                type: String,
                required: true
            },
            street2: String,
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            },
            zip: {
                type: String,
                required: true
            },
            timeLived: {
                type: String,
                required: true
            }
        },
        prevAddress1: {
            street: {
                type: String
            },
            street2: String,
            city: {
                type: String
            },
            state: {
                type: String
            },
            country: {
                type: String
            },
            zip: {
                type: String
            },
            timeLived: {
                type: String
            }
        },
        prevAddress2: {
            street: {
                type: String
            },
            street2: String,
            city: {
                type: String
            },
            state: {
                type: String
            },
            country: {
                type: String
            },
            zip: {
                type: String
            },
            timeLived: {
                type: String
            }
        }
    },
    secondaryApplicant: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String
        },
        currentAddress: {
            street: {
                type: String
            },
            street2: String,
            city: {
                type: String
            },
            state: {
                type: String
            },
            country: {
                type: String
            },
            zip: {
                type: String
            },
            timeLived: {
                type: String
            }
        },
        prevAddress1: {
            street: {
                type: String
            },
            street2: String,
            city: {
                type: String
            },
            state: {
                type: String
            },
            country: {
                type: String
            },
            zip: {
                type: String
            },
            timeLived: {
                type: String
            }
        },
        prevAddress2: {
            street: {
                type: String
            },
            street2: String,
            city: {
                type: String
            },
            state: {
                type: String
            },
            country: {
                type: String
            },
            zip: {
                type: String
            },
            timeLived: {
                type: String
            }
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

mongoose.model('Application', applicationSchema);