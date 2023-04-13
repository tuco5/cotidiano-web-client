const cloudinaryClient = require('cloudinary').v2;

cloudinaryClient.config({
  cloud_name: 'cotidiano',
  api_key: '982137587145672',
  api_secret: 'WndCsHp4YL9mNqosE-9pDrYzBlw',
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
