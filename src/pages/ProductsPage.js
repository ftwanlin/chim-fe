import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography, Pagination } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import { useEffect } from 'react';
import { getAllBirds } from '../api/bird';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const itemPerPage = 16;

  const [data, setData] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [page, setPage] = useState(1);
  const totalBirds = data.length;
  const totalPages = Math.ceil(totalBirds / itemPerPage);

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const resp = await getAllBirds(page, itemPerPage);
        // const jsonData = await resp.dat
        setData(resp.data.result.birds);
        console.log(resp.data.result.birds);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

  }, [])

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const stantIndex = (page - 1) * itemPerPage;
  const endIndex = Math.min(stantIndex + itemPerPage, totalBirds);

  const currentBirds = data.slice(stantIndex, endIndex);

  return (
    <>
      <Helmet>
        <title> Chim </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Chim
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <Pagination
          componentName='ProductsPage'
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          color="primary"
          sx={{ mb: 5, justifyContent: 'center', display: 'flex' }}
        />
        <ProductList products={currentBirds} />
        <ProductCartWidget />

      </Container>
    </>
  );
}
