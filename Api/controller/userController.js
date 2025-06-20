const User=require('../model/UserModel')



const register = async (req, res) => {
  try {
    const {
      name,
      institution,
      qualification,
      ampc_number,
      specialization,
      other_specialization,
      mobile,
      email,
      city,
    } = req.body;

    // Optional: Check if already registered by email
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "You are already registered!" });
    }

    const newEntry = new User({
      name,
      institution,
      qualification,
      ampc_number,
      specialization,
      other_specialization:
        specialization === "Other" ? other_specialization : "",
      mobile,
      email,
      city,
    });

    await newEntry.save();

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

// Get all users
const getAllUsers=async(req,res)=>{
  try {
   const users= await User.find({})
   res.json({success:true,users})
  } catch (error) {
     console.error( error.message);
     res.status(500).json({ message: "Server error, please try again later." });
  }
}
module.exports={register,getAllUsers}