import React from 'react';

type ColumnSizes = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

type ColumnProps = {
  children: React.ReactNode;
  size: ColumnSizes;
  className?: string;
};

export const Column = ({ size, children, className }: ColumnProps) => {
  const columnStyles = [`col-${size}`];

  const getColumnStyles = () => {
    if (className) {
      columnStyles.push(className);
    }

    return columnStyles.join(' ');
  };

  return <div className={getColumnStyles()}>{children}</div>;
};

export default Column;
