

export default function ModalInput(props) {
  return (
    <input ref={props["inputRef"]} placeholder={props.children} readOnly={props["value"] != undefined} value={props["value"]} />
  )
}