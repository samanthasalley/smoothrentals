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
        prevAddress2: {
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
        }
    },
    secondaryApplicant: {
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
        prevAddress2: {
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
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

mongoose.model('Application', applicationSchema);