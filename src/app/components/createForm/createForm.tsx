import { FormEvent } from "react";
import { db, auth } from "../../../../utils/firebaseConfig";
import { addDoc, collection } from "@firebase/firestore";
import Overlay from "../overlay/overlay";
import Button from "../button/button";
import Input from "../input/input";
import Image from "next/image";

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
    <div className="w-full">
      <Overlay setShowModal={setShowModal} />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-5">
        <div className=" bg-white rounded-lg w-full p-5">
          <div className="flex justify-between items-center mb-3">
            <div className="outline outline-1 outline-gray-300 p-2 rounded-lg">
              <Image
                src="/images/icons/Arhive_fill.svg"
                alt="add icon"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer" onClick={() => setShowModal(false)}>
              <Image
                src="/images/icons/X.svg"
                alt="close icon"
                width={20}
                height={20}
              />
            </div>
          </div>
          <form className="w-full" onSubmit={onSubmit}>
            <div className="text-md font-semibold">Tambahkan Komoditas</div>
            <p className="text-gray-600 leading-5 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ac lobortis lacus, et condimentum diam.{" "}
            </p>

            <Input
              name="name"
              type="text"
              className="my-2"
              placeholder="Nama"
            />
            <Input
              name="quantity"
              type="text"
              className="my-2"
              placeholder="Jumlah"
            />
            <Input
              name="unit"
              type="text"
              className="my-2"
              placeholder="Satuan"
            />
            <Button text="Tambahkan" type="submit" className="my-2" />
            <Button
              text="Batal"
              className="my-2"
              variation="secondary"
              onClick={() => setShowModal(false)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
