"use client";

import LogoNavbar from '@/components/LogoNavbar';
import InputField from '@/components/InputField';
import Image from 'next/image';
import logo from '../../../../public/images/image1.png'
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '@/schemas/authSchema';
import api from '@/api/interSepter';
import toast from 'react-hot-toast';
import userAuth from '@/zustand/useAuth';
import { useRouter } from 'next/navigation';


const SignIn = () => {
    const router = useRouter();
    const methods = useForm({ resolver: zodResolver(signInSchema) });

    const { register, formState: { errors } } = methods;
    const { setUser, user } = userAuth();
    const onSubmit2 = async (data) => {
        try {
            const { termsAccepted, ...dataToSend } = data
            const response = await api.post('/api/v1/users/login', dataToSend)
            toast.success(response.data.message)
            localStorage.setItem('token', response.data.token)
            document.cookies = `token=${response.data.token}; path=/; max-age=3600; SameSite=Lax; Secure`;
            // const token = request.cookies.get("token");
            // console.log(token, "token retrieved from cookie");
            localStorage.setItem('user', JSON.stringify(response.data.data))
            setUser(response.data.data)
            router.push('/')
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
        }
    };

    return (
        <div className='min-h-screen w-full bg-black'>
            <LogoNavbar />
            <div className="flex flex-col md:flex-row w-full items-center bg-black-800 text-white md:justify-center md:px-16">

                <div className="order-1 flex items-center w-full md:w-1/2 p-2 md:p-8">
                    <div className="flex flex-col gap-5">
                        <Image src={logo} alt="FutureTech Logo" width={60} height={60} className="sm:w-[60px] sm:h-[60px]" />
                        <blockquote className="text-3xl md:text-5xl text-left">
                            Welcome,<br />
                            Enter Your Details To<br />
                            Stay Logged In
                        </blockquote>
                    </div>
                </div>

                <div className="order-2 flex items-center w-full md:w-2/3 p-4 md:p-8 mt-10 ">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit2)} className='flex flex-col w-full md:w-auto'>
                            <div className="space-y-4">
                                <InputField
                                    label="Email Address"
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    {...register("email")}
                                />
                                <InputField
                                    label="Password"
                                    type="password"
                                    placeholder="Enter Your Password"
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
                                        Log In
                                    </button>
                                </div>
                                <p className="text-center text-gray-500">or</p>
                                <p className="mt-4 text-center text-gray-500">
                                    Don&apos;t have an account yet?{' '}
                                    <a href="/signup" className="text-yellow-500 hover:underline">
                                        Register now
                                    </a>
                                </p>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default SignIn;