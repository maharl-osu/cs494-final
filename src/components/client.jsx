import "../css/client.css"

export default function Client({ data, onEdit, onDelete }) {
  console.log(data)
  return (
    <div className="client-container">
      <p>{data["FirstName"]} {data["LastName"]}</p>
      <p>
        |
      </p>
      {data["Addresses"] && data["Addresses"].length > 0 &&
        <p className="primary-address">{data["Addresses"][0]}</p>
      }
      {data["Addresses"] && data["Addresses"].length > 1 &&
        <p className="additional-addresses">+{data["Addresses"].length - 1} Other Address(s)</p>
      }
      <button>
        Invoices
      </button>
      <button>
        Quotes
      </button>
      <button onClick={onEdit}>
        Edit
      </button>
      <button onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}