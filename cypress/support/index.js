const { internet } = require('faker');
const email = internet.exampleEmail()
const password = internet.password()

beforeEach(() => {
  cy
    .request('POST', '/signup', { email, password })
    .then(({ body }) => {
    cy
      .setCookie('trello_token', body.accessToken);
  });
});
