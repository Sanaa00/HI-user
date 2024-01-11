import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import InputField from '../Components/\';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
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

        <Formik>
          <div className="w-full flex  flex-col items-center justify-center md:mt-16 lg:mt-14 xl:mt-28  mt-32 sm:mt-0">
            <p className="font-semibold text-lg text-gray-800 ">
              Create Account
            </p>
            <Form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-1 mb-10 w-full lg:w-fit"
            >
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Full name
                </label>
                <InputField
                  name="fullname"
                  placeholder={`Full name`}
                  id="fullname"
                  value={formik.values.fullname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.fullname}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col mt-4">
                <label className={` text-gray-800 flex font-english`}>
                  Email
                </label>
                <InputField
                  name="email"
                  placeholder={`Example@gmail.com`}
                  id="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />

                {formik.touched.email && formik.errors.email ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.email}
                  </span>
                ) : null}
              </div>

              <div className="mt-4 flex flex-col">
                <label className={` text-gray-800 flex w-full font-english`}>
                  Password
                </label>
                <div
                  className={`w-full lg:w-80 2xl:w-96  pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green 
      mt-2 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500  focus:duration-500 flex justify-between items-center`}
                >
                  <input
                    type={!showPassword ? 'password' : 'text'}
                    name="password"
                    placeholder={`password`}
                    id="password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="focus:outline-none w-full flex"
                  />
                  {showPassword ? (
                    <button
                      type="button"
                      className="mr-2"
                      onClick={() => setShowPassword(false)}
                    >
                      <AiOutlineEyeInvisible className="w-6 h-6 text-neutral-500" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="mr-2"
                      onClick={() => setShowPassword(true)}
                    >
                      <AiOutlineEye className="w-6 h-6 text-neutral-500" />
                    </button>
                  )}
                </div>

                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-400 text-sm ">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="mt-5">
                {' '}
                <button
                  type="submit"
                  className="text-white bg-green py-2 w-full  rounded hover:bg-opacity-80 hover:duration-500 duration-500"
                >
                  Create
                </button>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
