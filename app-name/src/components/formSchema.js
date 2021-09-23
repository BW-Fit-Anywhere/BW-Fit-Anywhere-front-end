import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, '5 Letters Or Die!!!')
        .trim()
        .required('☠︎Type Your Name!☠︎'),
    password: yup
        .string()
        .min(5, '5 Letters Or Die!!!')
        .trim()
        .required('☠︎Valid Password Or Die!!!☠︎')
    
})

export default formSchema;