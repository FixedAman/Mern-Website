const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    const status = 422;
   
    const message = "ivalid input"
    const extraDetails = err.errors[0].message;
    const error = {
      message,
      status,
      extraDetails
    };
    console.log(error);
    next(error)
  }
};

module.exports = validate;
