import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import JobCircular from '../Components/JobCircular';

const SingleJobContainer = () => {
  const dispatch = useDispatch();
  const { circularId } = useParams();
  const [circular, setCircular] = useState({});

  const circularsGet = useSelector((state) => state.circularsGet);
  const { circulars } = circularsGet;

  useEffect(() => {
    const cir = circulars?.find(
      (circular) => circular?._id?.toString() === circularId?.toString()
    );
    setCircular(cir);
  }, [dispatch, circularId, circulars]);

  return (
    <div className='p-1'>
      <JobCircular circular={circular} noRoute details developer />
    </div>
  );
};

export default SingleJobContainer;
