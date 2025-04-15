import { useCookies } from "react-cookie";
function Logout (){
    const [cookies, removeCookie] = useCookies([]);
    removeCookie("token");
    // window.location.href="http://localhost:3000/login"
    window.location.href="https://stocknest-seven.vercel.app/login"
  };
  export default Logout;