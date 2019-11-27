import React, { useCallback, FC } from 'react';
import { Form, Input } from '@juno/ui-private/components/formik';
// @ts-ignore
import { CollapsibleCard, Button } from '@juno/ui-private/components';

import { useDataContext } from 'data/context';
import { saveLayer } from 'data/actions';
import GeoInput from './GeoInput';
import style from './GeoForm.module.css';

const GeoForm: FC = () => {
  const { dispatch } = useDataContext();

  const onSubmit = useCallback(
    ({ values, formikActions }, q) => {
      dispatch(saveLayer(values));
      formikActions.resetForm();
    },
    [dispatch]
  );

  return (
    <CollapsibleCard noHeaderMargin header="Add Layer" className={style.form}>
      <Form onSubmit={onSubmit} initialValues={{}}>
        <Input name="name" label="Layer name" required />
        <GeoInput />
        <Button type="submit">Add</Button>
      </Form>
    </CollapsibleCard>
  );
};

export default GeoForm;
