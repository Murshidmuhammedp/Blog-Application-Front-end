"use client";

import LogoNavbar from '@/components/LogoNavbar';
import InputField from '@/components/InputField';
import Image from 'next/image';
import logo from '../../../../public/images/image1.png';
import { FormProvider, useForm } from 'react-hook-form';
import { signUpSchema } from '@/schemas/authSchema';
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/api/interSepter';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SignUp = () => {
    const router = useRouter();
    const methods = useForm({ resolver: zodResolver(signUpSchema) });
    const { register, formState: { errors } } = methods;

    const onSubmit = async (data) => {
        try {
            const { termsAccepted, ...dataToSend } = data;
            const response = await api.post('/api/v1/users/register', dataToSend)
            toast.success(response.data.message)
            router.push('/signin')
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='min-h-screen w-full bg-black-800'>
            <LogoNavbar />
            <div className="flex flex-col md:flex-row w-full items-center text-white md:justify-center md:px-16">

                <div className="order-1 flex items-center w-full md:w-1/2 p-2 md:p-8">
                    <div className="flex flex-col gap-5">
                        <Image src={logo} alt="FutureTech Logo" width={60} height={60} className="sm:w-[60px] sm:h-[60px]" />
                        <blockquote className="text-3xl md:text-5xl text-left">
                            Welcome,<br />
                            Enter Your Details To<br />
                            Create Account
                        </blockquote>
                    </div>
                </div>

                <div className="order-2 flex items-center w-full md:w-2/3 p-4 md:p-8">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col w-full md:w-auto'>
                            <div className="space-y-4">
                                <InputField
                                    name="FullName"
                                    label="Full Name"
                                    type="text"
                                    placeholder="Enter Your Full Name"
                                    error={errors.FullName?.message}
                                    {...register("FullName")}
                                />
                                <InputField
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email Address"
                                    error={errors.email?.message}
                                    {...register("email")}
                                />
                                <InputField
                                    label="Designation"
                                    type="text"
                                    name="Designation"
                                    placeholder="Enter Your Designation"
                                    error={errors.Designation?.message}
                                    {...register("Designation")}
                                />
                                <InputField
                                    name="Password"
                                    label="Password"
                                    type="password"
                                    placeholder="Enter Your Password"
                                    error={errors.Password?.message}
                                    {...register("Password")}
                                />
                                <div className="flex items-center mt-4">
                                    <input
                                        type="checkbox"
                                        {...register("termsAccepted", {
                                            required: "You must accept the terms and conditions",
                                        })}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label className="ml-2 text-sm">I agree with Terms of Use and Privacy Policy</label>
                                </div>
                                {errors.termsAccepted && (
                                    <p className='text-red-500 text-sm'>{errors.termsAccepted.message}</p>
                                )}
                                <div className='w-full flex justify-center items-center'>
                                    <button
                                        type='submit'
                                        className='px-8 py-2 text-black font-bold rounded bg-yellow-600 hover:bg-yellow-700'
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default SignUp;