import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import InputField from '../Components/InputField';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullname: '',
      Address: '',
      Number: '',
      email: '',
      Serial: '',
      Blood: '',
      Height: '',
      Weight: '',
      Pressure: '',
      Suger: '',
      Cancer: '',
      Name: '',
      Relationship: '',
      password: '',
      password: '',
      password: '',
      password: '',
      password: '',
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
              <p className="mt-10 font-bold text-lg lg:w-1/2">
                Personal Information
              </p>
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
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Address
                </label>
                <InputField
                  name="Address"
                  placeholder={`Address`}
                  id="Address"
                  value={formik.values.Address}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.Address && formik.errors.Address ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.Address}
                  </span>
                ) : null}
              </div>{' '}
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Contact Number
                </label>
                <InputField
                  name="Number"
                  placeholder={`Number`}
                  id="Number"
                  value={formik.values.Number}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.Number && formik.errors.Number ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.Number}
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
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Patiend ID
                </label>
                <InputField
                  name="Serial"
                  placeholder={`Serial`}
                  id="Serial"
                  value={formik.values.Serial}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.Serial && formik.errors.Serial ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.Serial}
                  </span>
                ) : null}
              </div>{' '}
              <p className="mt-10 font-bold text-lg lg:w-1/2">
                Vital Information
              </p>
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Blood Type
                </label>
                <InputField
                  name="Blood"
                  placeholder={`Blood`}
                  id="Blood"
                  value={formik.values.Blood}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.Blood && formik.errors.Blood ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.Blood}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Height
                </label>
                <InputField
                  name="Height"
                  placeholder={`Height`}
                  id="Height"
                  value={formik.values.Height}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.Height && formik.errors.Height ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.Height}
                  </span>
                ) : null}
              </div>{' '}
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Weight
                </label>
                <InputField
                  name="Weight"
                  placeholder={`Weight`}
                  id="Weight"
                  value={formik.values.Weight}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.Weight && formik.errors.Weight ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.Weight}
                  </span>
                ) : null}
              </div>{' '}
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Blood Pressure
                </label>
                <InputField
                  name="Pressure"
                  placeholder={`Pressure`}
                  id="Pressure"
                  value={formik.values.Pressure}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.Pressure && formik.errors.Pressure ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.Pressure}
                  </span>
                ) : null}
              </div>{' '}
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Blood Suger
                </label>
                <InputField
                  name="Suger"
                  placeholder={`Suger`}
                  id="Suger"
                  value={formik.values.Suger}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.Suger && formik.errors.Suger ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.Suger}
                  </span>
                ) : null}
              </div>{' '}
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Cancer
                </label>
                <InputField
                  name="Cancer"
                  placeholder={`Cancer`}
                  id="Cancer"
                  value={formik.values.Cancer}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.Cancer && formik.errors.Cancer ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.Cancer}
                  </span>
                ) : null}
              </div>
              <p className="mt-10 font-bold text-lg lg:w-1/2">
                Emergency Contact
              </p>
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Name
                </label>
                <InputField
                  name="Name"
                  placeholder={`Name`}
                  id="Name"
                  value={formik.values.Name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.Name && formik.errors.Name ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.Name}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Relationship to the patient
                </label>
                <InputField
                  name="Relationship"
                  placeholder={`Relationship`}
                  id="Relationship"
                  value={formik.values.Relationship}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.Relationship && formik.errors.Relationship ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.Relationship}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col mt-5">
                <label className={`text-gray-800 flex font-english`}>
                  Contact Number
                </label>
                <InputField
                  name="ContactNumber"
                  placeholder={`ContactNumber`}
                  id="ContactNumber"
                  value={formik.values.ContactNumber}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.ContactNumber && formik.errors.ContactNumber ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.ContactNumber}
                  </span>
                ) : null}
              </div>
              <div className="mt-4 flex flex-col">
                <label className={` text-gray-800 flex w-full font-english`}>
                  Your Password
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
