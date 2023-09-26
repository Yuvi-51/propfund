"use client";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

const GoogleAuth = () => {
  //   const [response, setResponse] = useState({});
  const showUserInformation = (response) => {
    const decodedToken = jwtDecode(response.credential);
    console.log(decodedToken);
  };

  return (
    <div>
      <GoogleLogin
        clientId=""
        onSuccess={showUserInformation}
        onError={() => {
          console.log("Login Failed");
        }}
        scope="https://www.googleapis.com/auth/userinfo.email"
      />
    </div>
  );
};

export default GoogleAuth;
