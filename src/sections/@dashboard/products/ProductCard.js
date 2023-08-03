import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency, vndCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';
import { useEffect } from 'react';
import { getListBirds } from '../../../api/bird';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, image, breed, price, is_selled } = product;
  const status = is_selled ? 'Đã bán' : 'Còn hàng';
  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status == 'đã bán' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg alt={name} src={image} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
          
            {vndCurrency(price) + ' VNĐ'}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography>
            {breed.breed_name}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
