import { Header } from '../../components/Header'
import { SearcForm } from '../Transactions/components/SearchForm/index'
import { Summary } from '../../components/Summary'
import { Price, TransactionsContainer, TransactionsTable } from './style'
import { useContext } from 'react'
import { TransactionsContext } from '../../context/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <div>
      <Header></Header>
      <Summary></Summary>

      <TransactionsContainer>
        <SearcForm></SearcForm>
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <Price variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </Price>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
