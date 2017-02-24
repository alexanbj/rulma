import React from 'react';

import Checkbox from './Checkbox';
import Help from './Help';
import Horizontal from './Horizontal';
import Input from './Input';
import Label from './Label';
import Textarea from './Textarea';

const Form = ({ ...props }) =>
  <form {...props} />;

Form.Checkbox = Checkbox;
Form.Input = Input;
Form.Help = Help;
Form.Horizontal = Horizontal;
Form.Label = Label;
Form.Textarea = Textarea;

export default Form;
