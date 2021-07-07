import { useRef } from 'react'
import {
  FiCheckSquare,
  FiLink,
  FiPlus,
  FiDollarSign,
  FiFileText
} from 'react-icons/fi'

import { Form } from './styles'
import Modal from '../Modal'
import Input from '../Input'

import { FoodProps } from '../../pages/Dashboard'

interface AddFoodProps {
  isOpen: boolean
  setIsOpen: (args: boolean) => void
  handleAddFood: (food: FoodProps) => Promise<void>
}

function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: AddFoodProps) {
  const formRef = useRef(null)

  async function handleSubmit(data: FoodProps) {
    handleAddFood(data)
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" icon={FiLink} placeholder="Cole o link aqui" />

        <Input name="name" icon={FiPlus} placeholder="Ex: Moda Italiana" />
        <Input name="price" icon={FiDollarSign} placeholder="Ex: 19.90" />

        <Input name="description" icon={FiFileText} placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}

export default ModalAddFood
