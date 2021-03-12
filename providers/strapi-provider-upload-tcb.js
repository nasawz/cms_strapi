module.exports = {
  init(providerOptions) {
    // init your provider if necessary

    return {
      upload(file) {
        // upload the file in the provider
      },
      delete(file) {
        // delete the file in the provider
      },
    };
  },
};

/**
 {
  ...
  "dependencies": {
    ...
    "strapi-provider-upload-{provider-name}": "file:providers/strapi-provider-upload-{provider-name}"
    ...
  }
}
 */
// https://strapi.io/documentation/developer-docs/latest/development/plugins/upload.html
// ./config/plugins.js
// module.exports = ({ env }) => ({
//   upload: {
//     provider: 'aws-s3',
//     providerOptions: {
//       accessKeyId: env('AWS_ACCESS_KEY_ID'),
//       secretAccessKey: env('AWS_ACCESS_SECRET'),
//       region: 'aws-region',
//       params: {
//         Bucket: 'my-bucket',
//       },
//     },
//   },
// });