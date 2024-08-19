import EventBanner from '@/components/Event/EventBanner';
import Exhibation from '@/components/Event/Exibation';
import React from 'react';

const Event = () => {
  return (
    <div className='py-24'>
      <EventBanner/>
      <Exhibation></Exhibation>
    </div>
  );
};

export default Event;