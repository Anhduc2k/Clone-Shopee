import { createAsyncThunk } from '@reduxjs/toolkit';
import productApi from 'src/api/product.api';
import { payloadCreator } from 'src/utils/helper';
import purchaseApi from '../../api/purchase.api';

export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  payloadCreator(productApi.getProductDetail)
);
export const addToCart = createAsyncThunk('productDetail/addToCart', payloadCreator(purchaseApi.addToCart));
