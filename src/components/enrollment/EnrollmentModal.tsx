import React, { useState } from 'react';
import { X, User, Mail, Phone, Lock, CreditCard } from 'lucide-react';
import { useAuth } from '../auth/AuthContext';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId?: string;
  courseTitle?: string;
  coursePrice?: string;
}

type Step = 'signup' | 'payment' | 'confirmation';

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  courseId,
  courseTitle,
  coursePrice
}) => {
  const [step, setStep] = useState<Step>('signup');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const { signup } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'signup') {
      try {
        await signup({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        });
        setStep('payment');
      } catch (error) {
        console.error('Signup failed:', error);
      }
    } else if (step === 'payment') {
      // Handle payment processing
      setStep('confirmation');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 'signup':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <div className="mt-1 relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <div className="mt-1 relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  required
                  placeholder="MM/YY"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={formData.cvv}
                  onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                />
              </div>
            </div>
          </div>
        );
      case 'confirmation':
        return (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Enrollment Successful!</h3>
            <p className="mt-2 text-sm text-gray-500">
              You have successfully enrolled in {courseTitle}. You can now access your course materials
              through your dashboard.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {step === 'confirmation'
                  ? 'Enrollment Confirmed'
                  : step === 'payment'
                  ? 'Payment Details'
                  : 'Create Your Account'}
              </h3>
              {courseTitle && (
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Course: {courseTitle}
                    {coursePrice && ` - ${coursePrice}`}
                  </p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="mt-4">
                {renderStep()}
                {step !== 'confirmation' && (
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      {step === 'payment' ? 'Complete Payment' : 'Continue'}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;