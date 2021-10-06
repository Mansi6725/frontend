import React from 'react';
import ReactDOM from 'react-dom';
import AppType from './AppType';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const Appp=()=>
{
  return(<>
  <QueryClientProvider client={client}>
    <AppType />
  </QueryClientProvider>
  </>);
  
}
export default Appp;
