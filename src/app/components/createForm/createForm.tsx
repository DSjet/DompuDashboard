import { FormEvent } from "react";
import { db, auth } from "../../../../utlis/firebaseConfig";
import { addDoc, collection } from "@firebase/firestore";
import Overlay from "../overlay/overlay";

interface CreateFormProps {
  setShowModal: (show: boolean) => void;
}

const CreateForm: React.FC<CreateFormProps> = ({ setShowModal }) => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("active user", auth.currentUser);

    // get the form data
    const formData = new FormData(e.currentTarget);
    const userId = auth.currentUser?.uid;
    const name = formData.get("name") as string;
    const quantity = formData.get("quantity") as string;
    const unit = formData.get("unit") as string;

    // add the data to firestore
    try {
      const docRef = await addDoc(collection(db, "komoditas"), {
        name,
        quantity,
        unit,
        userId,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
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
            />
            <input
              name="quantity"
              type="text"
              className="border-2 border-gray-300 rounded-full py-2 px-4"
              placeholder="Jumlah komoditas"
            />
            <input
              name="unit"
              type="text"
              className="border-2 border-gray-300 rounded-full py-2 px-4"
              placeholder="Satuan"
            />
            <button className=" bg-primary rounded-full p-4">Tambahkan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
