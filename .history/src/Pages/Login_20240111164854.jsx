function Login() {
  const [login, { data, isError, isLoading, isSuccess }] = useLoginMutation();
  const [thereUSer, setThereUser] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      login(values);

      resetForm({ values: '' });
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
  });

  return (
    <div className="px-6 sm:px-12 lg:mx-26 md:px-20 pt-10 grid  md:grid-cols-2 items-start gap-20  min-h-screen">
      <div className=" justify-center hidden sm:flex">
        <img
          src={login}
          className="w-full h-72 sm:h-96 md:h-[500px] object-contain md:object-cover"
        />
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
