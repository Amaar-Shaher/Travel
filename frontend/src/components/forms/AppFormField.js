import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, setFieldValue, values } = useFormikContext();

  return (

      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
  );
}

export default AppFormField;
