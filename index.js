function signup(userName) {
  let users = ["aditi", "rahul", "neha"];
  if (users.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(userName);
    return "Signup Successful, Please Login";
  }
}

function login(userName, password) {
  let users = ["aditi", "rahul", "neha"];
  if (!users.includes(userName)) {
    return "User Not Found, Please Signup";
  } else if (password === "Emp@123") {
    return "Login Successful...";
  } else {
    return "Wrong Password....";
  }
}
