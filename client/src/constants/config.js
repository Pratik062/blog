// API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is being loaded, Please wait..",
  },
  success: {
    title: "Success",
    message: "Data successfully loaded",
  },
  responseFailure: {
    title: "Error",
    message:
      "An error occurred while fetching response from server. Please try again",
  },
  responseFailure: {
    title: "Error",
    message: "An error occurred while parsing request data",
  },
  networkError: {
    title: "Error",
    message:
      "Unable to connect with server the server. Please check internet connectivityand try again later",
  },
};

//API SERVICE CALL
//SAMPLE REQUEST
//NEED SERVICE CALL: { url; '/', method: 'POST/GET/PUT/DELETE' params: true/false, query: true/false }
export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
};
