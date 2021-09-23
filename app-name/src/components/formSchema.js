import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'At Least 5 Letters!!')
        .trim()
        .required('☠︎ ☭ Type Your Name! ⚒︎ ☠︎'),
    password: yup
        .string()
        .min(5, '5 Letters Or More')
        .trim()
        .required('☠︎ Valid Password Or Sudden Death ☠︎')
        .matches(
            /^.*(?=.{5,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 5 characters, one uppercase, one number and one special case character"
          ),
    // validationSchema: yup.object({
    //     password: yup.string().required('☠︎ Valid Password Or Sudden Death ☠︎'),
    //     passwordConfirmation: yup.string()
    //        .oneOf([yup.ref('password'), null], 'Passwords must match')
    // })
})

export default formSchema;