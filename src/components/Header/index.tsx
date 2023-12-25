import { ContainerHeader, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import Logo from '../../assets/Logo (1).svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <ContainerHeader>
      <HeaderContent>
        <img src={Logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </ContainerHeader>
  )
}
