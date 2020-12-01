import React, { useState, useEffect } from 'react';
import { Form, Alert } from 'react-bootstrap';
import isPalindrome from '../Functions/isPalindrome';
import ButtonCommon from './_common/ButtonCommon';

const Palindrome = () => {
  const [text, setText] = useState('');
  const [palindrome, setPalindrome] = useState('');

  useEffect(() => {
    setPalindrome('');
  }, [text]);

  return (
    <React.Fragment>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (text !== '') {
            setPalindrome(isPalindrome(text));
          }
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Palindrome Check</Form.Label>
          <Form.Control
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter a palindrome text"
          />
        </Form.Group>
        <ButtonCommon
          typeButton="submit"
          variant="primary"
          text="Check Palindrome"
        />
      </Form>
      <div className="mt-4">
        {palindrome === true && text !== '' ? (
          <Alert variant="success">
            <Alert.Heading>Yes, it's a palindrome sentence</Alert.Heading>
          </Alert>
        ) : null}
        {palindrome === false ? (
          <Alert variant="danger">
            <Alert.Heading>No it is not palindrome sentence</Alert.Heading>
          </Alert>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Palindrome;
