const postModel = require("../model/post.model");
const { uploadImage } = require("../services/storage.service");
const { generateCaption } = require("../services/ai.services");
const { v4: uuidv4 } = require("uuid");

const createPostController = async (req, res) => {
  const imageFile = req.file;

  if (!imageFile) {
    return res.status(400).json({
      success: false,
      message: "Image file required",
    });
  }

//   console.log("Imagefile : ", imageFile);

  const base64ImageFile = imageFile.buffer.toString("base64");
//   console.log("Base64ImageFile : ", base64ImageFile); 

  const caption = await generateCaption(base64ImageFile);

  const result = await uploadImage(imageFile.buffer, `${uuidv4()}`);

  const post = await postModel.create({
    image: result.url,
    caption: caption,
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: {
      caption: caption,
      image: result.url,
    },
  });
};

module.exports = { createPostController };
