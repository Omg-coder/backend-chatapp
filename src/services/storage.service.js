const ImageKit = require('@imagekit/nodejs')
const { toFile } = require("@imagekit/nodejs");
const { Folders } = require("@imagekit/nodejs/resources.js");
// const { Folders } = require('@imagekit/nodejs/resources.js');

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadImage(file, fileName) {
  const uploadFile = await toFile(file , fileName)

  // console.log("UploadFile : ", uploadFile)

// console.log(uploadFile)

  const response = await client.files.upload({
    file: uploadFile,
    fileName : fileName,
    folder: "/posts",
  });

  return response;
}

module.exports = { uploadImage };
