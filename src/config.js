export default {
  s3: {
    REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "userInfo",
    URL: "https://aw0jtxwju8.execute-api.us-east-1.amazonaws.com/Dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ocsfuzncy",
    APP_CLIENT_ID: "1r8dvd3ni2b47joidc5ctmsqbq",
    IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID"
  }
};
