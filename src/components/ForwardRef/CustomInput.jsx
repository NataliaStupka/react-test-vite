import { forwardRef } from 'react';

//приймає два параметра: пропси і реф
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

CustomInput.displayName = 'Назва для візуалізації';

export default CustomInput;
