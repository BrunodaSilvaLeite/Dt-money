import { Header } from '../../components/Header'
import { SearcForm } from '../Transactions/components/SearchForm/index'
import { Summary } from '../../components/Summary'
import { Price, TransactionsContainer, TransactionsTable } from './style'

export function Transactions() {
  return (
    <div>
      <Header></Header>
      <Summary></Summary>

      <TransactionsContainer>
        <SearcForm></SearcForm>
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <Price statusColor="green">R$: 12,000,00</Price>
              </td>
              <td>Venda</td>
              <td>11/01/2020</td>
            </tr>

            <tr>
              <td>Aluguel do apartamento</td>
              <td>
                <Price statusColor="red"> - R$: 3,000,00</Price>
              </td>
              <td>Casa</td>
              <td>14/01/2020</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
