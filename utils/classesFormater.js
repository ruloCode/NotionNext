// OBJECT = scss module import variable, classes = String with scss module classes names,
// staticClasses = String with static classes added to the end


export const getClasses = (params) => {
  const { classes = '', styles = {}, styleClasses = '' } = params;
  const joinedClasses = [];

  styleClasses.split(' ').forEach((className) => joinedClasses.push(styles[className]));

  return `${joinedClasses.join(' ')} ${classes}`;
};

export default getClasses;
