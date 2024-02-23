import React from 'react';
import Header from './header';
import Card from './card';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <div className="m-1 flex gap-2">
        <Card 
          title="Produtos" 
          links={
            [
              {label: 'Listar produtos', uri: 'dashboard/products/list'},
              {label: 'Cadastrar', uri: 'dashboard/products/register'}
            ]
          } 
        />
        <Card 
          title="Fornecedores" 
          links={
            [
              {label: 'Listar fornecedores', uri: 'dashboard/suppliers/list'},
              {label: 'Cadastrar', uri: 'dashboard/suppliers/register'}
            ]
          } 
        />
      </div>
    </>
  );
}

export default Dashboard;