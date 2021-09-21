import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('☠︎Type Your Name!☠︎'),
    // password: yup
    //     .string()
    //     .password('Valid Password Or Die!!!')
    //     .required('☠︎☠︎☠︎')
    
})

export default formSchema;