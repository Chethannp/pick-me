const positiveResponse = {
  status: 200,
  message: "Authentication Successful"
};
const negativeResponse = {
  error: true,
  status: 422,
  message: "Authentication Successful"
};
const variations = [positiveResponse, negativeResponse];
module.exports = variations[0];
