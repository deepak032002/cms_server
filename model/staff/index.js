const mongoose = require("mongoose");

const staffSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  academic: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  campus_prefrence: {
    type: Array,
    required: true,
  },

  personal_details: {
    first_name: {
      type: String,
      required: true,
    },
    middle_name: {
      type: String,
    },
    last_name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    father: {
      name: {
        type: String,
        required: true,
      },
      mobile: {
        type: Number,
      },
    },

    mother: {
      name: {
        type: String,
        required: true,
      },
      mobile: {
        type: Number,
      },
    },

    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    marital_status: {
      type: String,
      required: true,
    },
    aadhar_number: {
      type: Number,
      required: true,
    },
  },

  communication: {
    type: Object,
    required: true,
  },

  address: {
    permanent: {
      type: Object,
      required: true,
    },
    current: {
      type: Object,
      required: true,
    },
  },

  academic_details: {
    type: Object,
    required: true,
  },

  other_qualification: {
    type: Array,
    required: true,
  },

  work_experience: {
    type: Object,
    required: true,
  },

  earliest_date_join: {
    type: Date,
    required: true,
  },

  blood_relative: {
    type: Object,
    required: true,
  },

  declaration: {
    type: Boolean,
    required: true,
  },
});

const Staff = mongoose.model("staff", staffSchema);

Staff.createIndexes();

module.exports = Staff;
