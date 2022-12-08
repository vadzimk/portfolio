export default ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('STRAPI_ACCESS_KEY_ID'),
        secretAccessKey: env('STRAPI_ACCESS_KEY_VALUE'),
        endpoint: env('S3_SERVER_ADDRESS'), // e.g. "s3.fr-par.scw.cloud"
        params: {
          Bucket: env('STRAPI_MEDIA_BUCKET_NAME'),
        },
      },
    },
  },
  // ...
});
