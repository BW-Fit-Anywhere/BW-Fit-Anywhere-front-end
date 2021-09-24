import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, '>= 5!!')
        .trim()
        .matches(/Lambda/, 'Must Be Lambda!!!')
        .required('Type Your Name!'),
    password: yup
        .string()
        // .min(5, '5 Letters Or More')
        .trim()
        .required('Valid Password!')
        .matches(
            /123/, 'Must Submit A Valid Password!!'
            // 'Password must contain at least 5 characters, one uppercase, one number and one special case character'
          ),
})

export default formSchema;