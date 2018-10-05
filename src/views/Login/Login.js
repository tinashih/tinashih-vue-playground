export default {
  methods: {
    login() {
      const validAccount = {
        email: 'foo@bar.com',
        password: 'p@ssw0rd',
      };
      const isValidEmail = this.form.email === validAccount.email;
      const isValidPwd = this.form.password === validAccount.password;
      if (!isValidEmail || !isValidPwd) {
        this.loading = false;
        return Promise.reject(new Error('Not a valid account, please check if your email or password is correct.'));
      }

      // Generated via https://jwt.io/
      /** Payload:
       * {
       *   "id": "1",
       *   "name": "John Doe",
       *   "email": "foo@bar.com",
       *   "iat": 1516239022
       * }
      * */
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImZvb0BiYXIuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.1bPFxaLEmNE6W_1BpFZiTim19g_18SIoSknzmeY4KaM';
      this.loading = false;
      return Promise.resolve({ token });
    },
    submitForm(formName) {
      this.loading = true;
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          this.loading = false;
          return false;
        }

        return this.login()
          .then((token) => {
            console.log('login success => ', token);
            this.$router.push('about');
          }, (error) => {
            console.log(`error happened when logging in! (${error})`);
          });
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
      loading: false,
      title: 'LOGIN',
    };
  },
};
