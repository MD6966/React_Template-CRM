import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FirstStep from './SignupStep/FirstStep';
import SecondStep from './SignupStep/SecondStep';
import ThirdStep from './SignupStep/ThirdStep';
import FourthStep from './SignupStep/FourthStep';

const SignUp = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        businessName: '',
        businessCategory: '',
        phoneCode: '+1',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => step < 4 && setStep(prev => prev + 1);
    const prevStep = () => step > 1 && setStep(prev => prev - 1);
    const submitForm = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate("/login")
    };

    const renderStepContent = () => {
        switch (step) {
            case 1: return (
                <FirstStep />
            );
            case 2: return (
                <SecondStep />
            );
            case 3: return (
                <ThirdStep />
            );
            case 4: return (
                <FourthStep />
            );
            default: return null;
        }
    };

    return (
        <div className="grid grid-cols-12 px-8 py-10 gap-20 font-barlow">
             <div className="col-span-12 md:col-span-7">
        <h2 className="text-primary font-bold font-barlow md:leading-[100%]">
          Explore Ideas with 2,500+ Design <br />{' '}
          <span className="text-primary font-bold text-primarycolor">Expert in Real-Time</span>
        </h2>
        <p className="text-2xl md:text-xl py-4 font-barlow font-semibold">Join a community of over 2,500 expert designers to share ideas, get feedback, and collaborate in real-time—whenever inspiration strikes.</p>
        <div className="flex md:flex-row flex-col -space-x-4 items-center gap-4">
          <img
            src="/Images.png"
            alt="Design expert"
            width={300}
            height={300}
            className="rounded-full border-2 border-white object-cover"
          />
          <p className='font-semibold text-xl'>Join 2,500+ Designers & Creators Who Rely on Us for Instant Collaboration and Creative Exchange</p>
        </div>
      </div>

            <div className="col-span-12 md:col-span-5 bg-gradient-to-b to-primarycolor from-secondarycolor p-8 rounded-2xl">
                <h1 className="text-2xl font-bold text-white mb-2">Sign Up</h1>
                <p className="text-white mb-6">
                    Credentials are only used to authenticate the user to use our services.
                </p>
                <hr className="border-blue-400 mb-6" />

                <div className="bg-white rounded-xl shadow-md">
                    {/* Stepper */}
                    <div className="flex justify-between bg-white rounded-xl p-4">
                        <div className={`flex flex-col items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                1
                            </div>
                        </div>

                        <div className="flex-1 flex items-center px-2">
                            <div className={`w-full h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                        </div>

                        <div className={`flex flex-col items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                2
                            </div>
                        </div>

                        <div className="flex-1 flex items-center px-2">
                            <div className={`w-full h-1 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                        </div>

                        <div className={`flex flex-col items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                3
                            </div>
                        </div>
                        <div className="flex-1 flex items-center px-2">
                            <div className={`w-full h-1 ${step >= 4 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                        </div>
                        <div className={`flex flex-col items-center ${step >= 4 ? 'text-blue-600' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                4
                            </div>
                        </div>
                    </div>

                    <div className="p-6 pt-0 min-h-[400px]">
                        {renderStepContent()}
                    </div>

                    <div className="p-6 border-t border-gray-200">
                        <div className={`${step === 1 ? '' : 'flex justify-between gap-4 w-full'}`}>
                            {step > 1 && (
                                <button onClick={prevStep} className="px-6 cursor-pointer border border-primarycolor py-2 w-full  text-gray-800 rounded-md hover:bg-gray-100">
                                    Back
                                </button>
                            )}
                            <div className={`${step === 1 ? 'w-full' : 'w-full'}`}>
                                {step < 4 ? (
                                    <button onClick={nextStep} className={`px-6 cursor-pointer border py-2 bg-gradient-to-l from-primarycolor to-secondarycolor text-white rounded-md ${step === 1 ? 'w-full' : ''}`}>
                                        Save & Continue
                                    </button>
                                ) : (
                                    <button onClick={submitForm} className="px-6 cursor-pointer border py-2 w-full bg-green-600 text-white rounded-md hover:bg-green-700">
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;