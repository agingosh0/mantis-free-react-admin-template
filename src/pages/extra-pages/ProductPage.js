// material-ui
import { Typography, Button } from '@mui/material';
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


// project import
import MainCard from 'components/MainCard';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// ==============================|| PRODUCT PAGE ||============================== //

const ProductPage = () => {
    const columns = [
        { field: 'id', headerName: 'ProductID', width: 70 },
        { field: 'productName', headerName: 'Product name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {field: 'category',headerName: 'Category',width: 130},
        {field: 'actions',headerName: 'Actions',width: 130,}
      ];
      
      const rows = [
        { id: 1, productName: 'Mobile', price: '10000', category: 'Electronics', actions: <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" />
      </IconButton>},
        { id: 2, productName: 'Laptop', price: '30000', category: 'Electronics' },
        { id: 3, productName: 'Desktop', price: '50000', category: 'Electronics' },
        { id: 4, productName: 'SmartWatch', price: '2000', category: 'Electronics' },
      ];
    //   const handleEdit = (row) => {
    //     console.log('Edit clicked for: ', row);
    //   };
      
    //   const handleDelete = (row) => {
    //     console.log('Delete clicked for: ', row);
    //   }

return(
<MainCard title="">
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5">Product List</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1">
            <Button
                disableElevation
                fullWidth
                 size="large"
                 type="submit"
                 variant="contained"
                 color="primary"
             >
                Add New Product
            </Button>
            </Typography>
        </div>
    </div> 
<hr />   
    <div style={{ height: 400, width: '100%' }}>
       <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
       />
    </div>
</MainCard>
    )
};

export default ProductPage;