import * as React from 'react';

import { useState } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react';



export default function Login() {
    const [ hasError, setHasError ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
}

<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>


<FormLabel>Password</FormLabel>
  <Input type='password' />


<FormLabel>Confirm password</FormLabel>
  <Input type='password' />

</FormControl>


