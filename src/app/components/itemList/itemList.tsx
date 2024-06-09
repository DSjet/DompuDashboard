"use client";

import Image from "next/image";
import {
  collection,
  getDocs,
  deleteDoc,
  DocumentData,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../../../utils/firebaseConfig";
import EditForm from "../editForm/editForm";

interface ItemBoxProps {
  name: string;
  quantity: number;
  unit: string;
  id: string;
  userId: string;
  setShowModal: (show: boolean) => void;
}

interface DataProps {
  id: string;
  userId: string;
  name: string;
  quantity: number;
  unit: string;
}

interface ActiveItemProps {
  id: string;
  userId: string;
  name: string;
  quantity: number;
  unit: string;
}

const ItemBox: React.FC<ItemBoxProps> = ({
  name,
  quantity,
  unit,
  userId,
  id,
  setShowModal,
}) => {
  const deleteItem = async () => {
    await deleteDoc(doc(db, "komoditas", id));
  };

  return (
    <div className="w-full px-5 rounded-lg flex drop-shadow-lg justify-between">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-primary-0 rounded-full mr-5"></div>
          <h1 className="text-base font-medium">{name}</h1>
        </div>
        <div className="flex" onClick={() => setShowModal(true)}>
          <p className="text-sm">
            {quantity} {unit}
          </p>
          <Image
            className="ml-5"
            src="images/icons/CaretRight.svg"
            alt="home icon"
            width={10}
            height={10}
          />
        </div>
      </div>
      <div className="hidden" onClick={() => deleteItem()}>
        <Image
          src="images/icons/Trash.svg"
          alt="home icon"
          width={20}
          height={20}
        />
      </div>
      <hr />
    </div>
  );
};

const ItemList: React.FC = () => {
  const [items, setItems] = useState<DataProps[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState<ActiveItemProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "komoditas"));
      const data = querySnapshot.docs.map((doc) => {
        const docData = doc.data() as DocumentData;
        return {
          id: doc.id,
          userId: docData.userId,
          name: docData.name,
          quantity: docData.quantity,
          unit: docData.unit,
        } as DataProps;
      });
      console.log(data);
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <h1>Item List</h1>
      {showModal && (
        <EditForm
          setShowModal={setShowModal}
          userId={activeItem?.userId}
          id={activeItem?.id}
          name={activeItem?.name}
          quantity={activeItem?.quantity}
          unit={activeItem?.unit}
        />
      )}
      <div className="w-full flex flex-wrap items-center justify-center">
        {items.map((item) => (
          <div
            className="w-full"
            onClick={() =>
              setActiveItem({
                id: item.id,
                userId: item.userId,
                name: item.name,
                quantity: item.quantity,
                unit: item.unit,
              })
            }
          >
            <ItemBox
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              unit={item.unit}
              id={item.id}
              userId={item.userId}
              setShowModal={setShowModal}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
