import awsConfig from '../../../aws-exports'

export const getRainbowColors = async(): Promise<string[]> => {
  const route = awsConfig.aws_cloud_logic_custom[0].endpoint + '/colors'

  let response = await fetch(route);
  let resposeParsed:string[] = await response.json()
  console.log("resposeParsed ",resposeParsed)

  return resposeParsed;

}

