import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from 'src/api/user';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [loginUser, setLoginUser] = useState({});

  // useEffect(() => {
  //   const handleLogin = async () => {
  //     const resp = await login(loginUser);
  //     console.log(resp);
  //   };

  //   if (loginUser.username && loginUser.password) {
  //     handleLogin();
  //   }
  //  }, [loginUser]);

  const handleClick = async () => {
    const resp = await login({username, password});
    console.log(resp);
    if (resp.status === 200) { 
      console.log(resp.data.result.user.role);
      if (resp.data.result.user.role == 'ADMIN') {
        navigate('/dashboard', { replace: true });
      } else {
        navigate('/dashboard/products', { replace: true });
      }
      
      
    }
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>

        <TextField
          name="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        {/* <Checkbox name="remember" label="Ghi nhớ tôi" /> */}
        <Link variant="subtitle2" underline="hover">
          Quên mật khẩu?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Đăng nhập
      </LoadingButton>
    </>
  );
}
