import awsConfig from '../../../aws-exports'

export const getRainbowColors = async() => {
  const route = awsConfig.aws_cloud_logic_custom[0].endpoint + '/colors'

  let response = await fetch(route);
  return await response.json();

}



