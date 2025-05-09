const { getUserDetailsModel } = require("./model");
const { postMessageService } = require('./service');


const getUserDetailsController = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ success: false, message: "userId is required" });
    }

    const result = await getUserDetailsModel(userId);

    if (!result) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Server error" });
  }
};

const postMessageController = async(req,res)=>{
  try {
    const data=req?.body;
    await postMessageService(data)
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Server error" });
  }
}

module.exports = { getUserDetailsController,postMessageController };
