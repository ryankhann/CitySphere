import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    verificationCode: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.verificationCode.trim()) {
      newErrors.verificationCode = 'Verification code is required';
    } else if (formData.verificationCode.length !== 6) {
      newErrors.verificationCode = 'Code must be 6 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendCode = async () => {
    if (!formData.email) {
      setErrors({ email: 'Email is required to send code' });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors({ email: 'Please enter a valid email' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send verification code');
      }

      setIsLoading(false);
      setCodeSent(true);
      alert(`Verification code sent to ${formData.email}\nFor demo, use: ${data.verificationCode}`);
    } catch (error) {
      setIsLoading(false);
      setErrors({ email: error.message });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (step === 1) {
      if (validateStep1()) {
        await handleSendCode();
        setStep(2);
      }
      return;
    }

    if (validateStep2()) {
      setIsLoading(true);
      
      try {
        const response = await fetch('http://localhost:5000/api/auth/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            code: formData.verificationCode
          })
        });

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Verification failed');
        }

        // Login the user after verification
        login(data.user, data.token);
        
        alert('Account created successfully!');
        navigate('/');
      } catch (error) {
        setIsLoading(false);
        setErrors({ verificationCode: error.message });
      }
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/resend-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to resend code');
      }

      alert(`New code sent! For demo, use: ${data.verificationCode}`);
    } catch (error) {
      setErrors({ verificationCode: error.message });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-500 rounded-2xl flex items-center justify-center">
              <i className="fas fa-user-plus text-3xl text-white"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Create Account
          </h2>
          <p className="text-gray-600">Join CitySphere and explore your city</p>
          
          {/* Steps Indicator */}
          <div className="flex justify-center mt-6 mb-4">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                1
              </div>
              <div className={`w-16 h-1 ${step === 1 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                2
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            {step === 1 ? 'Basic Information' : 'Email Verification'}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: step === 1 ? '50%' : '100%' }}
          ></div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-user text-gray-400"></i>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`appearance-none relative block w-full pl-10 pr-3 py-3.5 border ${errors.name ? 'border-red-300' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white/50`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`appearance-none relative block w-full pl-10 pr-3 py-3.5 border ${errors.email ? 'border-red-300' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white/50`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-lock text-gray-400"></i>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`appearance-none relative block w-full pl-10 pr-3 py-3.5 border ${errors.password ? 'border-red-300' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white/50`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-lock text-gray-400"></i>
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`appearance-none relative block w-full pl-10 pr-3 py-3.5 border ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white/50`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>
            </div>
          )}

          {/* Step 2: Email Verification */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                <i className="fas fa-envelope-open-text text-4xl text-blue-500 mb-3"></i>
                <h3 className="font-semibold text-lg text-gray-800">Check Your Email</h3>
                <p className="text-gray-600 text-sm mt-2">
                  We've sent a 6-digit verification code to:<br />
                  <span className="font-medium">{formData.email}</span>
                </p>
              </div>

              {/* Verification Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Verification Code
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-shield-alt text-gray-400"></i>
                  </div>
                  <input
                    type="text"
                    name="verificationCode"
                    value={formData.verificationCode}
                    onChange={handleChange}
                    maxLength="6"
                    className={`appearance-none relative block w-full pl-10 pr-3 py-3.5 border ${errors.verificationCode ? 'border-red-300' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white/50 text-center text-xl tracking-widest`}
                    placeholder="123456"
                  />
                </div>
                {errors.verificationCode && <p className="mt-1 text-sm text-red-600">{errors.verificationCode}</p>}
                
                <div className="mt-4 text-center">
                  {!codeSent ? (
                    <button
                      type="button"
                      onClick={handleSendCode}
                      disabled={isLoading}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium disabled:text-gray-400"
                    >
                      {isLoading ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-1"></i> Sending...
                        </>
                      ) : (
                        'Send Verification Code'
                      )}
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm text-green-600">
                        <i className="fas fa-check-circle mr-1"></i> Code sent!
                      </p>
                      <button
                        type="button"
                        onClick={handleSendCode}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Resend Code
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Demo Note */}
              <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-sm">
                <div className="flex">
                  <i className="fas fa-info-circle text-yellow-500 mr-2 mt-0.5"></i>
                  <p className="text-yellow-800">
                    <span className="font-semibold">Demo Note:</span> Use <code className="bg-yellow-100 px-2 py-1 rounded">123456</code> as the verification code
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="space-y-4">
            {step === 2 && (
              <button
                type="button"
                onClick={handleBack}
                className="w-full flex justify-center py-3.5 px-4 border-2 border-gray-300 text-sm font-medium rounded-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Previous Step
              </button>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  {step === 1 ? 'Processing...' : 'Creating Account...'}
                </>
              ) : (
                <>
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <i className={step === 1 ? "fas fa-arrow-right" : "fas fa-check"}></i>
                  </span>
                  {step === 1 ? 'Continue to Verification' : 'Complete Registration'}
                </>
              )}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Sign in here
            </Link>
          </p>
        </div>

        {/* Terms */}
        <p className="text-xs text-center text-gray-500 mt-4">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a> and{' '}
          <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
        </p>
      </div>

      {/* Back to Home Link */}
      <Link
        to="/"
        className="fixed top-6 left-6 text-gray-600 hover:text-gray-900 transition-colors"
        title="Back to Home"
      >
        <i className="fas fa-arrow-left text-xl"></i>
      </Link>
    </div>
  );
};

export default Signup;