import React from 'react';
import PhageJumbo from '../../components/PhageTherapy/PhageJumbo/PhageJumbo';
import PhageInfo from '../../components/PhageTherapy/PhageInfo/PhageInfo';
import HowTheyWork from '../../components/PhageTherapy/HowTheyWork/HowTheyWork';

function PhageDescriptionPage() {
  return (
    <div>
      <PhageJumbo />
      <PhageInfo />
      <HowTheyWork />
    </div>
  );
}

export default PhageDescriptionPage;
