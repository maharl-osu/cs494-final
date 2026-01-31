import "../css/invoice.css"

export default function Invoice({ data }) {
  console.log(data)
  return (
    <div className="invoice-container">
      <p>{data["FirstName"]} {data["LastName"]}</p>
      <p>
        |
      </p>
      <p className={data["PaidOn"] ? "paid" : "not-paid"}>
        ${data["Amount"]}
      </p>
      <p>
        Sent: {data["SentOn"]}
      </p>
      {
        data["PaidOn"] &&
        <p>
        Paid: {data["PaidOn"]}
        </p>
      }
      <button>
        Edit
      </button>
      <button>
        Delete
      </button>
    </div>
  )
}