const Imagekit = require("@imagekit/nodejs");
const { tofile } = require("@imagekit/nodejs");
// const { Folders } = require('@imagekit/nodejs/resources.js');

const client = new Imagekit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadImage(file, fileName) {
  const uploadImg = await tofile(file, fileName)

  const responce = await client.file.upload({
    file: uploadImg,
    fileName: fileName,
    // Folders : '/chat-app'
  });
  return responce;
}

module.exports = { uploadImage };
