import axios from "axios";
import { getBaseURL } from "helpers/GetBaseURL.js";
async function checkAuth(setLoggedIn) {
  await axios
    .get(`${getBaseURL()}/v1/validate-admin`, { withCredentials: true })
    .then((res) => {
      if (res.data === true) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    })
    .catch((error) => {});
}
export default checkAuth;

// checkAuth() {
//     // TODO remove all this, and use the logged in state from the app.js prop
//       const res = axios
//         .get(`${getBaseURL()}/v1/validate-admin`, { withCredentials: true })
//         .then((res) => {
//           if (res.status === 200) {
//             this.setState({ loggedIn: true, strandData: null });
//           }
//         })
//         .catch((error) => {
//           return false;
//         });
//     }
