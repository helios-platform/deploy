const { input } = require('@inquirer/prompts');


async function setProfile() {
  return 'capstone-team4'
  const answer = await input({message: 'Enter your AWS Profile name:'});
  return answer;
}

exports.setProfile = setProfile;