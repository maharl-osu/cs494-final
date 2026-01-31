

export default function ModalButton(props) {

  return (
    <button onClick={props["onClick"]}>{props.children}</button>
  )

}