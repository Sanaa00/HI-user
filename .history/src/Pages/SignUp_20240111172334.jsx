import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import InputField from '../InputField/InputField';
import { useSignupMutation } from '../../app/api/auth';
import { Navigate } from 'react-router';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../app/api/userSlice';
function SignUp() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const [thereUSer, setThereUser] = useState('');
  const [signup, { data, isError, isLoading, error, isSuccess }] =
    useSignupMutation();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      signup(values);
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
    }),
  });

  return (
    <div>
      <div className="px-6 sm:px-12 lg:mx-26 md:px-20 pt-10 grid  md:grid-cols-2 items-start gap-20 min-h-screen">
        <div className="hidden sm:flex justify-center ">
          <img
            //   src={signup}
            className="w-full h-72 sm:h-96 md:h-[500px] object-contain md:object-cover 2xl:object-contain mt-10"
          />
        </div>

        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
