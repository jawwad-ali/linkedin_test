// src/components/BlurImage.js

import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

function BlurImage({ img, ...rest }) {
  const [visible, setVisible] = useState(false);
  const imgRef = useRef(null);
  const { src, srcSet, sizes } = img.props;

  useEffect(() => {
    if (imgRef.current?.complete) setVisible(true);
  }, []);

  useEffect(() => {
    if (!imgRef.current) return;
    if (imgRef.current.complete) return;

    let current = true;
    imgRef.current.addEventListener('load', () => {
      if (!imgRef.current || !current) return;
      setTimeout(() => {
        setVisible(true);
      }, 950);
    });

    return () => {
      current = false;
    };
  }, [src, srcSet, sizes]);

  const imgEl = React.cloneElement(img, {
    ref: imgRef,
    key: img.props.src,
    className: clsx(
      img.props.className,
      'w-full h-full object-cover transition-opacity',
      {
        'opacity-0': !visible,
      }
    ),
  });

  return (
    <>
      <div
        className={clsx(rest.className, 'w-full h-70')}
        style={
          visible === false
            ? {
                ...rest.style,
                backgroundSize: 'cover',
                backgroundColor: 'rgba(232, 74, 148, 0.8)',
                filter: `blur(3px)`,
              }
            : rest.style
        }
      >
        {imgEl}
      </div>
    </>
  );
}

export { BlurImage };
