const cloudinaryClient = require('cloudinary').v2;

cloudinaryClient.config({
  cloud_name: '',
  api_key: '',
  api_secret: '',
  secure: true,
});

const options = {
  asset_folder: 'CasaBonita',
  folder: 'casabonita',
};

cloudinaryClient.uploader
  .upload('public/images/home/guadalajara-1.jpg', options)
  .then(result => console.log(result))
  .catch(err => console.log(err));
