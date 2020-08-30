import awsConfig from '../../aws-exports.js';

export const getCurrentEnvironment = () => {

    const REGEX = /.*-(\w+)/
    return "-"+awsConfig.aws_content_delivery_bucket.match(REGEX)[1];
  }