import React from 'react';

import './section.css';

export interface SectionProps {
  /** What background color to use */
  type?: 'light' | 'dark' | 'grey';
  /** Section contents */
  children;
}

/** Main themed section */
export const Section = ({
  type = 'light',
  children,
  ...props
}: SectionProps) => {
  return (
    <section
      className={`section section-${type}`}
      {...props}
    >
      <div className='section-content'>
      {children}

      </div>
    </section>
  );
};
