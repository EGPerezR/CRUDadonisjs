const { ioc } = use('@adonisjs/fold')
const { test } = use('Test/Suite')('User registration')

test('register user', async () => {
  ioc.fake('App/Services/UserRegistration', () => {
    return {
      sendVerificationEmail () {}
    }
  })

  // code to test user registration
  // ....

  ioc.restore('App/Services/UserRegistration')
})
class UserRegistration {

    async sendVerificationEmail (user) {
      await Mail.send('emails.verify', user, (message) => {
        message.to(user.email)
        message.subject('Verify account')
      })
    }

    
  }

  