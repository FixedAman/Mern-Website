const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Invalid input";

    let extraDetails = "Unknown error";
    if (err.errors && err.errors.length > 0) {
      extraDetails = err.errors[0].message;
    }

    const error = {
      message,
      status,
      extraDetails
    };

    console.log(error);
    next(error);
  }
};

module.exports = validate;
