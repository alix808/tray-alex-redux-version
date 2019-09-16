const nameObj = {
  htmlFor: 'name',
  title: 'Name',
  type: 'text',
  name: 'name',
  minLength: 1,
  required: true
};

const roleObj = {
  htmlFor: 'role',
  title: 'Role',
  type: 'text',
  name: 'role',
  minLength: 1,
  required: false
};

const emailObj = {
  htmlFor: 'email',
  title: 'Email',
  type: 'email',
  name: 'email',
  minLength: 1,
  required: true
};

const passObj = {
  htmlFor: 'password',
  title: 'Confirm Password',
  type: 'password',
  name: 'password',
  minLength: 9,
  required: true
};

const pass2Obj = {
  htmlFor: 'password2',
  title: 'Confirm Password',
  type: 'password',
  name: 'password2',
  minLength: 9,
  required: true
};

module.exports = {
  nameObj,
  roleObj,
  emailObj,
  passObj,
  pass2Obj
};
