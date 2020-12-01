import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonCommon = ({ variant, typeButton, text }) => {
  return (
    <Button variant={variant} type={typeButton}>
      {text}
    </Button>
  );
};

export default ButtonCommon;
