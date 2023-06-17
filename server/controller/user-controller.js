import user from "../model/user.js";

export const signupuser = async (request, response) => {
  try {
    const user = request.body;

    const newUser = new user(user);
    await newUser.save();

    return response.ststur(200).json({ msg: "signup succcessful" });
  } catch (error) {
    return response.status(500).json({ msg: "Error while signup the user " });
  }
};
