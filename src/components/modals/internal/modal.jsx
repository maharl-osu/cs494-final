import "../../../css/modal.css"

export default function Modal(props) {
  return (
    <div className="modal-container">
      <div className="inner-modal-container">
        {props.children}
      </div>
    </div>
  )
}