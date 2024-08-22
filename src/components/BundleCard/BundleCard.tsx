import React from 'react';
import { BundleCardSideBack } from './BundleCardSideBack';
import { BundleCardSideFront } from './BundleCardSideFront';

export type BundleCardType = 'first' | 'second' | 'third';

type BundleCardProps = {
  children: Array<
    React.ReactElement<typeof BundleCardSideBack> | React.ReactElement<typeof BundleCardSideFront>
  >;
};

export const BundleCard = ({ children }: BundleCardProps) => {
  return <div className="bundle-card">{children}</div>;
};

export default BundleCard;
