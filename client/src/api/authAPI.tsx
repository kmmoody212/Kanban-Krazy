import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // Makes a POST request to the login route
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    // throw error if response fails
    if (!response.ok) {
      throw new Error(`Login failed with status: ${response.status}`);
    }
    // parse the response body as JSON to get the data and return the token
    const data = await response.json();
    return data.token;
    // Handle the response, e.g., store a token or redirect the user
  } catch (error) {
    console.error("Error during login:", error);

    return error;
  }
};

export { login };
