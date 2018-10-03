export default {
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          console.log('error submit!!');
          return false;
        }

        return console.log('submit!', this.form);
      });
    },
  },
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      formValidation: {
        email: [
          { required: true, message: 'Please input the email!', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please input the password!', trigger: 'blur' },
          {
            min: 8,
            max: 20,
            message: 'Length should be 8 to 20',
            trigger: 'change',
          },
        ],
      },
      title: 'LOGIN',
    };
  },
};
