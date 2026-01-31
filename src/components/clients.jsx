import { useState } from "react"
import "../css/clients.css"
import Client from "./client"
import EditModal from "./modals/client/editmodal";
import AddModal from "./modals/client/addmodal";
import DeleteModal from "./modals/client/deletemodal";

const dummy_data = [
  {
    ClientID: 1,
    FirstName: "John",
    LastName: "Smith",
    Addresses: [
      "26200 SE Wally Rd",
      "745 SW Chickadee St",
      "745 SW Chickadee St"
    ]
  },
  {
    ClientID: 2,
    FirstName: "John",
    LastName: "Smith",
    Addresses: [
      "26200 SE Wally Rd",
      "745 SW Chickadee St"
    ]
  },
  {
    ClientID: 3,
    FirstName: "John",
    LastName: "Smith",
    Addresses: [
      "26200 SE Wally Rd"
    ]
  },
  {
    ClientID: 4,
    FirstName: "John",
    LastName: "Smith",
  }
]

export default function Clients() {

  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState();
  const [deleting, setDeleting] = useState();

  const GenerateClientLabels = function() {
    return dummy_data.map((val) => {
      return <Client key={val["ClientID"]} data={val} onEdit={() => {setEditing(val)}} onDelete={() => {setDeleting(val)}} />
    })
  }

  console.log("Rendering")
  return (
    <>
      <div className="clients-container">
        {GenerateClientLabels()}
        <button onClick={() => {setAdding(true)}} className="add-button">
          Add Client
        </button>
      </div>
      {adding &&
        <AddModal onSubmit={() => {setAdding(false)}} onCancel={() => {setAdding(false)}} />
      }
      {editing &&
        <EditModal />
      }
      {deleting &&
        <DeleteModal />
      }
    </>
  )
}