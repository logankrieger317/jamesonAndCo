import React from 'react';
import DiscountModal from './DiscountModal';
import FundraiserModal from './FundraiserModal';

const TimeBasedModal = ({ isOpen, onClose }) => {
  // Target date: May 17, 2025, 5:00 PM CST
  const targetDate = new Date('2025-05-17T17:00:00-05:00');
  const currentDate = new Date();

  // Show FundraiserModal until target date, then switch back to DiscountModal
  const showFundraiser = currentDate < targetDate;

  if (showFundraiser) {
    return <FundraiserModal isOpen={isOpen} onClose={onClose} />;
  } else {
    return <DiscountModal isOpen={isOpen} onClose={onClose} />;
  }
};

export default TimeBasedModal;
