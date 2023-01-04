const Joi = require("joi");

const staffSchemaValidate = Joi.object().keys({
  category: Joi.string().required(),
  academic: Joi.string().required(),
  subject: Joi.string().required(),
  designation: Joi.string().required(),
  campus_prefrence: Joi.array().required(),
  personal_details: Joi.object({
    first_name: Joi.string().required(),
    middle_name: Joi.string(),
    last_name: Joi.string().required(),
    dob: Joi.date().required(),
    image: Joi.string().required(),
    father: Joi.object({
      name: Joi.string().required(),
      mobile: Joi.number(),
    }),
    mother: Joi.object({
      name: Joi.string(),
      mobile: Joi.number(),
    }),
    mobile: Joi.string().required(),
    email: Joi.string().required(),
    gender: Joi.string().required(),
    marital_status: Joi.string().required(),
    aadhar_number: Joi.number().required(),
  }).required(),
  communication: Joi.object().required(),
  address: Joi.object({
    permanent: Joi.object().required(),
    current: Joi.object().required(),
  }).required(),
  academic_details: Joi.object().required(),
  other_qualification: Joi.array().required(),
  work_experience: Joi.object().required(),
  earliest_date_join: Joi.date().required(),
  blood_relative: Joi.object().required(),
  declaration: Joi.boolean().required(),
});

module.exports = staffSchemaValidate;
