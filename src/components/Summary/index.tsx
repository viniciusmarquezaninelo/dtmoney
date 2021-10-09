import React, { useContext } from 'react';

import { Container } from "./styles";

import IncomeImg from '../../assets/entrada.svg';
import outcomeImg from '../../assets/saida.svg';
import totalImg from '../../assets/total.svg';

import { TransactionsContext } from '../../TransactionsContext'

export function Summary() {
  const data = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="icon Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeImg} alt="icon Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
    
      <div className="green-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="icon Total" />
        </header>
        <strong>R$16.000,00</strong>
      </div>
    </Container>
  );
}