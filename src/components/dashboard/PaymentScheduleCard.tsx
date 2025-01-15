import React from 'react';
import { DollarSign, AlertCircle } from 'lucide-react';
import { PaymentSchedule } from '../../types/dashboard';

interface Props {
  payment: PaymentSchedule;
}

const PaymentScheduleCard: React.FC<Props> = ({ payment }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{payment.courseName}</h3>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Payment Progress</span>
          <span className="text-blue-600 font-semibold">
            {Math.round((payment.amountPaid / payment.totalAmount) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 rounded-full h-2"
            style={{ width: `${(payment.amountPaid / payment.totalAmount) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div className="text-sm text-gray-600">Total Amount</div>
          <div className="text-lg font-semibold">₦{payment.totalAmount.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Amount Paid</div>
          <div className="text-lg font-semibold">₦{payment.amountPaid.toLocaleString()}</div>
        </div>
      </div>

      {payment.nextPayment && (
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-2">
            <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
            <span className="font-semibold">Next Payment Due</span>
          </div>
          <div className="text-sm text-gray-600">Amount: ₦{payment.nextPayment.amount.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Due Date: {payment.nextPayment.dueDate}</div>
        </div>
      )}

      <div className="space-y-3">
        {payment.installments.map((installment, index) => (
          <div 
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg ${
              installment.status === 'paid' 
                ? 'bg-green-50' 
                : installment.status === 'overdue'
                ? 'bg-red-50'
                : 'bg-gray-50'
            }`}
          >
            <div>
              <div className="font-semibold">₦{installment.amount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">{installment.dueDate}</div>
            </div>
            <div className={`text-sm font-medium ${
              installment.status === 'paid' 
                ? 'text-green-600' 
                : installment.status === 'overdue'
                ? 'text-red-600'
                : 'text-gray-600'
            }`}>
              {installment.status.charAt(0).toUpperCase() + installment.status.slice(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentScheduleCard;