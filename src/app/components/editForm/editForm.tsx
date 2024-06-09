import { FormEvent, useState } from "react";
import { db, auth } from "../../../../utils/firebaseConfig";
import { updateDoc, doc } from "@firebase/firestore";
import Overlay from "../overlay/overlay";

interface EditFormProps {
  setShowModal: (show: boolean) => void;
  name: string | undefined;
  quantity: number | undefined;
  unit: string | undefined;
  id: string | undefined;
  userId: string | undefined;
}

const EditForm: React.FC<EditFormProps> = ({
  setShowModal,
  name,
  quantity,
  unit,
  userId,
  id,
}) => {
  const [newName, setNewName] = useState(name || ""); // Use default value if provided
  const [newQuantity, setNewQuantity] = useState(quantity || "");
  const [newUnit, setNewUnit] = useState(unit || "");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("active user", auth.currentUser);

    // get the form data
    const formData = new FormData(e.currentTarget);
    const userId = auth.currentUser?.uid;
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const quantity = formData.get("quantity") as string;
    const unit = formData.get("unit") as string;

    // update the data
    const docRef = doc(db, "komoditas", id);

    // Option 2: Extracting id from form data
    // const formData = new FormData(e.currentTarget);
    // const id = formData.get("id") as string;
    // const docRef = doc(db, "komoditas", id);

    try {
      await updateDoc(docRef, {
        id,
        name,
        quantity,
        unit,
        userId,
      });

      setShowModal(false);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setNewName(value);
        break;
      case "quantity":
        setNewQuantity(value);
        break;
      case "unit":
        setNewUnit(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="">
      <Overlay setShowModal={setShowModal} />
      <div className="absolute h-full top-[50%] left-[50%] translate-x-[-50%]">
        <div className="w-full flex items-center justify-center">
          <form
            className="w-full flex flex-col items-center justify-center"
            onSubmit={onSubmit}
          >
            <input
              name="name"
              type="text"
              className=" border-2 border-gray-300 rounded-full py-2 px-4"
              placeholder="Nama komoditas"
              value={newName}
              onChange={handleChange}
            />
            <input
              name="quantity"
              type="text"
              className="border-2 border-gray-300 rounded-full py-2 px-4"
              placeholder="Jumlah komoditas"
              value={newQuantity}
              onChange={handleChange}
            />
            <input
              name="unit"
              type="text"
              className="border-2 border-gray-300 rounded-full py-2 px-4"
              placeholder="Satuan"
              value={newUnit}
              onChange={handleChange}
            />

            <input name="id" type="text" value={id} className="hidden" />
            <input
              name="userId"
              type="text"
              value={userId}
              className="hidden"
            />

            <button className=" bg-primary rounded-full p-4">Simpan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
