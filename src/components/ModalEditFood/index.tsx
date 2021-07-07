import { useRef } from 'react'
import {
  FiCheckSquare,
  FiLink,
  FiPlus,
  FiDollarSign,
  FiFileText
} from 'react-icons/fi'

import Modal from '../Modal'
import Input from '../Input'
import { Form } from './styles'

import { FoodProps } from '../../pages/Dashboard'

interface EditFoodProps {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  editingFood: FoodProps | undefined
  handleUpdateFood: (food: FoodProps) => Promise<void>
}

function ModalEditFood({
  isOpen, setIsOpen, editingFood, handleUpdateFood
}: EditFoodProps) {
  const formRef = useRef(null)

  async function handleSubmit(data: FoodProps) {
    handleUpdateFood(data)
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" icon={FiLink} placeholder="Cole o link aqui" />

        <Input name="name" icon={FiPlus} placeholder="Ex: Moda Italiana" />
        <Input name="price" icon={FiDollarSign} placeholder="Ex: 19.90" />

        <Input name="description" icon={FiFileText} placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}

export default ModalEditFood
