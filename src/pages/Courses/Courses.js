import React from 'react';
import getAuthentication from '../../apis/getAuthentication';

const Courses = () => {
  getAuthentication();

  return (
    <div>Courses</div>
  );
}


export default Courses;
