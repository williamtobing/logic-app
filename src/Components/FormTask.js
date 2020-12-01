import React, { useState } from 'react';
import { Form, Alert, Table } from 'react-bootstrap';
import ButtonCommon from './_common/ButtonCommon';
import hitungPecahanUang from '../Functions/hitungPecahanUang';

const FormTask = () => {
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState('');
  const [hasil, setHasil] = useState([]);
  const [sisa, setSisa] = useState('');

  const FormValidationOnChange = (e) => {
    const target = e.target.value;
    const re = /^[0-9,\b]+$/;
    if (target === '' || re.test(target)) {
      setAmount(target);
      if (
        parseInt(target.replace(',', '.')) < 99 ||
        parseInt(target.replace(',', '.')) > Math.pow(10, 9)
      ) {
        setAlert('Minimal input adalah 99 dan Maksimal Input adalah 10^9');
      } else {
        setAlert('');
      }
    }
  };

  const onSubmitFormTask = (e) => {
    e.preventDefault();

    if (
      amount === '' ||
      parseInt(amount.replace(',', '.')) < 99 ||
      parseInt(amount.replace(',', '.')) > Math.pow(10, 9)
    ) {
      setAlert('Minimal input adalah 99 dan Maksimal Input adalah 10^9');
      return false;
    }

    const [total, sisa] = hitungPecahanUang(parseInt(amount.replace(',', '.')));
    setHasil(total);
    setSisa(sisa);

    return true;
  };

  return (
    <div>
      <Form onSubmit={onSubmitFormTask}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Form Menghitung Pecahan Uang</Form.Label>
          <Form.Control
            type="text"
            value={amount}
            onChange={FormValidationOnChange}
            placeholder="Masukkan sejumlah nilai"
            autoComplete="off"
          />
        </Form.Group>
        {alert ? (
          <Alert variant="danger">
            <Alert.Heading style={{ fontSize: '16px' }}>{alert}</Alert.Heading>
          </Alert>
        ) : null}

        <ButtonCommon typeButton="submit" variant="dark" text="Check Pecahan" />
      </Form>

      <div className="mt-5">
        <Table responsive>
          <thead>
            <tr>
              <th>No</th>
              <th>Nominal</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {hasil.length > 0
              ? hasil.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.nominal}</td>
                      <td>{item.jumlah}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
        {sisa > 0 ? <h4>Sisa {sisa}</h4> : null}
      </div>
    </div>
  );
};

export default FormTask;
