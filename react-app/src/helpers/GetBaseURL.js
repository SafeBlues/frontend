export function getBaseURL() {
  var protocol = "";
  var api_location = "";
  if (String(window.location.hostname) === "localhost") {
    protocol = "http://";
    api_location = ":8000";
  } else {
    protocol = "https://";
    api_location = "/api";
  }
  const BFF_URL = protocol + String(window.location.hostname) + api_location;
  return(BFF_URL)
};

