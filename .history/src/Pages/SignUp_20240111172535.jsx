import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import InputField from '../InputField/InputField';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {},
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
              {language === 'kurdi' ? 'دروستکردنی هەژمار' : 'Create Account'}{' '}
            </p>
            <Form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-1 mb-10 w-full lg:w-fit"
            >
              <div className="flex flex-col mt-5">
                <label
                  className={`${
                    language === 'kurdi' ? 'justify-end' : ''
                  } + text-gray-800 flex font-english`}
                >
                  {language === 'kurdi' ? 'ناوی سیانی ' : 'Full name'}
                </label>
                <InputField
                  name="fullname"
                  placeholder={`${
                    language === 'kurdi' ? 'ناوی سیانی' : 'Full name'
                  }`}
                  id="fullname"
                  value={formik.values.fullname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  style={language === 'kurdi' ? { textAlign: 'right' } : {}}
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.fullname}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col mt-4">
                <label
                  className={`${
                    language === 'kurdi' ? 'justify-end' : ''
                  } + text-gray-800 flex font-english`}
                >
                  {language === 'kurdi' ? 'ئیمەیل' : 'Email'}
                </label>
                <InputField
                  name="email"
                  placeholder={`${
                    language === 'kurdi' ? 'ئیمەیل' : 'Example@gmail.com'
                  }`}
                  id="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  style={language === 'kurdi' ? { textAlign: 'right' } : {}}
                />

                {formik.touched.email && formik.errors.email ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.email}
                  </span>
                ) : null}
                {isError && error?.data?.data?.message.startsWith('E11000') ? (
                  <span className="text-red-400 text-sm">
                    This user already exist
                  </span>
                ) : null}
              </div>

              <div className="mt-4 flex flex-col">
                <label
                  className={`${
                    language === 'kurdi' ? 'justify-end' : ''
                  } + text-gray-800 flex w-full font-english`}
                >
                  {language === 'kurdi' ? 'وشەی تێپەر' : 'Password'}
                </label>
                <div
                  className={`${
                    language === 'kurdi' ? 'flex-row-reverse' : ''
                  } + w-full lg:w-80 2xl:w-96  pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green 
      mt-2 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500  focus:duration-500 flex justify-between items-center`}
                >
                  {' '}
                  <input
                    type={!showPassword ? 'password' : 'text'}
                    name="password"
                    placeholder={
                      language === 'kurdi' ? 'وشەی تێپەر' : 'password'
                    }
                    id="password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    style={language === 'kurdi' ? { textAlign: 'right' } : {}}
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
                  disabled={isLoading}
                  className="text-white bg-green py-2 w-full  rounded hover:bg-opacity-80 hover:duration-500 duration-500"
                >
                  {language === 'kurdi' ? 'دروستکردن' : 'Create'}
                </button>
                <div className="text-red-400 text-sm mt-1">{thereUSer}</div>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
