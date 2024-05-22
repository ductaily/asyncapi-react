import React from 'react';
import { ExtensionComponentProps } from '../Extensions';

/**
 * See <https://github.com/asyncapi/extensions-catalog/blob/master/extensions/x.md>.
 */
export default function XExtension({
  propertyValue,
}: ExtensionComponentProps<string>) {
  const onClickHandler = () => {
    window.open(`https://x.com/${propertyValue}`, '_blank');
  };

  return (
    <div
      title={`https://x.com/${propertyValue}`}
      style={{ display: 'inline-block' }}
    >
      <svg
        onClick={onClickHandler}
        style={{ cursor: 'pointer' }}
        width="15px"
        height="15px"
        viewBox="0 0 1200 1227"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
