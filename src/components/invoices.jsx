import "../css/invoices.css"
import Invoice from "./invoice"

const dummy_data = [
  {
    ClientID: 1,
    FirstName: "John",
    LastName: "Smith",
    Amount: 1000,
    SentOn: "07-14-2025",
    PaidOn: "07-16-2025"
  },
  {
    ClientID: 1,
    FirstName: "John",
    LastName: "Smith",
    Amount: 1000,
    SentOn: "07-14-2025",
  }
]

const GeneratePaidLabels = function() {
  return dummy_data.map((val) => {
    if (!val["PaidOn"])
      return

    return <Invoice key={val["ClientID"]} data={val} />
  })
}

const GenerateUnpaidLabels = function() {
  return dummy_data.map((val) => {
    if (val["PaidOn"])
      return

    return <Invoice key={val["ClientID"]} data={val} />
  })
}


export default function Invoices() {
  console.log("Rendering")
  return (
    <>
      <button className="add-button">
          Add Invoice
      </button>
      <h2 className="category-header">Unpaid</h2>
      <div className="clients-container">
        {GenerateUnpaidLabels()}
      </div>
      <h2 className="category-header">Paid</h2>
      <div className="clients-container">
        {GeneratePaidLabels()}
      </div>
    </>
  )
}