import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../context/TransactionsContext'

/*
  Por que um componente renderiza?
  - Hooks changed (mudou estado, contexto, reducer);

*/

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearcForm() {
  const fetchTransations = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransations
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: searchFormInputs) {
    await fetchTransations(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
