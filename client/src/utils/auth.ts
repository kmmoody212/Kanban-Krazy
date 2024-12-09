import { JwtPayload, jwtDecode } from "jwt-decode";

class AuthService {
  getProfile() {
    // return the decoded token
    return jwtDecode(this.getToken());
  }

  loggedIn() {
    // return a value that indicates if the user is logged in
    const token = this.getToken();
    return token;
  }

  isTokenExpired(token: string) {
    // return a value that indicates if the token is expired
    const decoded = jwtDecode<JwtPayload>(token);
    const expiration = decoded.exp || 0;
    const currentTime = Date.now() / 1000;
    return expiration < currentTime;
  }

  getToken(): string {
    // return the token
    const loggedUser = localStorage.getItem("id_token") || "";
    return loggedUser;
  }

  login(idToken: string) {
    // set the token to localStorage
    console.log(idToken);
    localStorage.setItem("id_token", idToken);
    // redirect to the home page
    window.location.assign("/");
  }

  logout() {
    //  remove the token from localStorage
    localStorage.removeItem("id_token");
    // redirect to the login page
    window.location.assign("/");
  }
}

export default new AuthService();
