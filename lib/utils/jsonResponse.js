const jsonResponse = ({ success = true, data = {}, message = 'Successful request' } = {}) => ({
  success,
  data,
  message
});

export default jsonResponse;
