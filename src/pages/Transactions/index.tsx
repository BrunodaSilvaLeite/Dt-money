import { Header } from '../../components/Header'
import { SearcForm } from '../Transactions/components/SearchForm/index'
import { Summary } from '../../components/Summary'
import { Price, TransactionsContainer, TransactionsTable } from './style'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../context/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

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
