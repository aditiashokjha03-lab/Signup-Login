function signup(userName) {
  let users = ["aditi", "rahul", "neha"];
  if (users.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(userName);
    return "Signup Successful, Please Login";
  }
}
