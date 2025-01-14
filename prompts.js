const questions = [
    {
      type: 'list',
      name: 'authProvider',
      message: 'Please Choose Auth Provider 🔐',
      choices: ['clerk'],
    },
    {
      type: 'list',
      name: 'emailProvider',
      message: 'Please Choose Email Provider 📧',
      choices: ['resend'],
    },
    {
      type: 'list',
      name: 'database',
      message: 'Please Database ORM Tool 🧺',
      choices: ['prisma'],
    },
    {
      type: 'list',
      name: 'uiLibrary',
      message: 'Please Select UI library 🌸',
      choices: ['shadcn'],
    },
    {
      type: 'list',
      name: 'payment',
      message: 'Please Select Payment Gateway 💰',
      choices: ['cashfree'],
    },
    {
      type: 'input',
      name: 'routes',
      message: 'Define Your routes:',
      validate: function (input) {
        // if (input.length === 0) {
        //   return 'Text input cannot be empty!';
        // }
        return true;
      },
    },
  ];
  
  module.exports = { questions };
  