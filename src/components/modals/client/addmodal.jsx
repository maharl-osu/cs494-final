import { useRef, useState } from "react";
import Modal from "../internal/modal";
import ModalButton from "../internal/modalbutton";
import ModalInput from "../internal/modalinput";
import ModalTitle from "../internal/modaltitle";
import SplitContainer from "../internal/modalSplitContainer";



export default function AddModal({onSubmit, onCancel}) {
  
  const latestAddress = useRef()

  const [addresses, setAddresses] = useState([])

  const GenerateAddressInputs = function() {
    return addresses.map((val, idx) => {

      const onRemove = function() {
        let new_addresses = [...addresses]
        new_addresses.splice(idx, 1)
        setAddresses(new_addresses)
      }

      return (
        <SplitContainer weight={0.8} key={idx}>
          <ModalInput value={val}>Address</ModalInput>
          <ModalButton onClick={onRemove}>X</ModalButton>
        </SplitContainer>
      )
    })
  }

  const AddAnotherAddress = function() {
    if (latestAddress.current && latestAddress.current.value) {
      setAddresses([...addresses, latestAddress.current.value])
      latestAddress.current.value = ""
    } else {
      alert("Finish filling out all current addresses first.")
    }
  }

  return (
    <Modal>
      <ModalTitle>Add Client</ModalTitle>
      <ModalInput>First Name</ModalInput>
      <ModalInput>Last Name</ModalInput>
      {GenerateAddressInputs()}
      <ModalInput inputRef={latestAddress}>Address</ModalInput>
      <ModalButton onClick={AddAnotherAddress}>+ Address</ModalButton>
      <SplitContainer>
        <ModalButton onClick={onSubmit}>Submit</ModalButton>
        <ModalButton onClick={onCancel}>Cancel</ModalButton>
      </SplitContainer>
    </Modal>
  )

}