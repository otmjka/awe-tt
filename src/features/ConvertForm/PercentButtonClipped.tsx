import { FC, ReactNode } from 'react';
import cn from 'classnames';

const PercentButtonClipped: FC<{
  children?: ReactNode;
  progress?: number;
  onClick?: () => void;
}> = ({ children, progress = 0, onClick }) => {
  return (
    <button
      className={cn(
        'relative flex-1 rounded-[10px] border border-[#E4E4E4] px-[10px] py-[5px] text-xs overflow-hidden',
        'bg-white',
      )}
      type="button"
      onClick={onClick}
    >
      <div
        className={cn('absolute inset-y-0 left-0 bg-[#168ACD]')}
        style={{ width: `${progress}%` }}
      />

      <span className="relative z-10 block w-full text-center">
        <span className="text-[#7A7A7A]">{children}</span>

        <span
          className="absolute inset-0 text-white text-center"
          style={{
            clipPath: `inset(0 ${100 - progress}% 0 0)`,
            whiteSpace: 'nowrap',
          }}
        >
          {children}
        </span>
      </span>
    </button>
  );
};

export default PercentButtonClipped;
