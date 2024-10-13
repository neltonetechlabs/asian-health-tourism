'use client';
import React, { useState } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';

interface ImageWithFallBackProps extends ImageProps {}

const ImageWithFallBack: React.FC<ImageWithFallBackProps> = ({
  src,
  alt,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState<any>(src);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      height={350}
      width={200}
      priority
      {...rest}
      quality={30}
      onError={() => setImgSrc("https://placehold.co/800?text=Image&font=roboto")}
    />
  );
};

export default ImageWithFallBack;
