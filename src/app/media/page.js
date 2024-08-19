import Featured from '@/components/media/Featured';
import MediaBannar from '@/components/media/MediaBannar';
import React from 'react';

const media = () => {
  return (
    <div className='py-24'>
   <MediaBannar></MediaBannar>
   <Featured></Featured>
    </div>
  );
};

export default media;