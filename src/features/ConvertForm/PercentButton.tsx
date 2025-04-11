import { FC, ReactNode } from 'react';
import cn from 'classnames';

const PercentButton: FC<{
  children?: ReactNode;
  progress?: number;
  onClick?: () => void;
}> = ({ children, progress }) => {
  console.log('PercentButton', progress);
  return (
    <button
      className={cn(
        'relative flex-1 rounded-[10px] border border-[#E4E4E4] px-[10px] py-[5px] text-xs overflow-hidden',
      )}
      type="button"
    >
      <div
        className={cn('absolute inset-y-0 left-0 bg-[#168ACD]')}
        style={{ width: `${progress}%` }}
      ></div>
      <span className="relative z-10 mix-blend-difference text-[#7A7A7A]">
        {children}
      </span>
    </button>
  );
};

export default PercentButton;
