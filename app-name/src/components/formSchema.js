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
        // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character" 
        // ),
    // validationSchema: yup.object({
    //     password: yup.string().required('☠︎ Valid Password Or Sudden Death ☠︎'),
    //     passwordConfirmation: yup.string()
    //        .oneOf([yup.ref('password'), null], 'Passwords must match')
    // })
})

export default formSchema;