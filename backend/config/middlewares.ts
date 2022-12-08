// https://www.npmjs.com/package/@strapi/provider-upload-aws-s3
export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            `${process.env.STRAPI_MEDIA_BUCKET_NAME}.${process.env.S3_SERVER_ADDRESS}`,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            `${process.env.STRAPI_MEDIA_BUCKET_NAME}.${process.env.S3_SERVER_ADDRESS}`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
