import React from 'react';

import {GroupContainer, FormInputContainer, FormInputLabel} from './form-input-checkbox.styles';

const FormInputCheckBox = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInputCheckBox;