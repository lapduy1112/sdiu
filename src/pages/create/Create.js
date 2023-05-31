import { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Create.scss";
import { useNavigate } from "react-router-dom";


const categories = [
  { value: "Found", label: "Found" },
  { value: "Lost", label: "Lost" },
];

export default function Create() {
  const navigate = useNavigate();
  // const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);

  const { user } = useAuthContext();
  const [photoError, setPhotoError] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [formError, setFormError] = useState(null);
  const documentNameRef = useRef();
  const documentDetailsRef = useRef();
  const documentDayRef = useRef();
  // const documentCategoryRef = useRef();
  const documentImagesRef = useRef();
  const [documents, setDocument] = useState();

  const createDocs = async (e) => {
    e.preventDefault();

   
  };




  return (
    <div className="create-form pages-margin">
      <h2 className="page-title">Create new document</h2>
      <form onSubmit={createDocs}>
        <label>
          <span>Document Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            ref={documentNameRef}
            value={name}
          ></input>
        </label>
        <label>
          <span>Document Details:</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            ref={documentDetailsRef}
            value={details}
          ></textarea>
        </label>

        <label>
          <span>Lost day:</span>
          <input
            type="date"
            required
            onChange={(e) => setDueDate(e.target.value)}
            ref={documentDayRef}
            value={dueDate}
          ></input>
        </label>
        <label>
          <span>Document category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Relative images:</span>
          <input
            required
            type="file"
            // onChange={handleFileChange}
            ref={documentImagesRef}></input>
        </label>

        <button className="btn">Add</button>
        {formError && <p className="error">{formError}</p>}
      </form>
      {/* {documents.map((document) => (
        <div>name:{document.documentName}</div>
      ))} */}
    </div>
  );
}
