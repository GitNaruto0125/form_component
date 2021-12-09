import { useState } from "react";

import Header from "./Header";
import Table from "./Table";
import FormModal from "./FormModal";

const data = [
  {
    id: "000",
    form: "Form 1 Description",
    description: "Form Description about Form 1",
    buttonText: "white",
    colorType: 1,
    redirect: "https://songdh0125.com",
    emailAddress: "PopupText of Form 1",
    fields: [
      { colorName: "first", colorValues: "Red" },
      { colorName: "second", colorValues: "blue" },
      { colorName: "third", colorValues: "green" },
    ],
    integration: "integration1",
    code: "this is code of form 1",
  },
  {
    id: "001",
    form: "Form 2 Description",
    description: "Form Description about Form 2",
    buttonText: "red",
    colorType: 2,
    redirect: "https://songdh0125.com",
    emailAddress: "PopupText of Form 1",
    fields: [
      { colorName: "first", colorValues: "Red" },
      { colorName: "second", colorValues: "blue" },
      { colorName: "third", colorValues: "green" },
    ],
    integration: "integration2",
    code: "this is code of form 2",
  },
];

const MyForms = () => {
  const [selectedForm, setSelectedForm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const save = () => {
    toggleModal();
  };

  return (
    <div className="flex flex-auto flex-col mx-20 my-10">
      <Header toggleModal={toggleModal} setSelectedForm={setSelectedForm} />
      <Table
        data={data}
        setSelectedForm={setSelectedForm}
        toggleModal={toggleModal}
      />
      <FormModal
        isOpen={isOpen}
        data={data}
        selectedForm={selectedForm}
        setSelectedForm={setSelectedForm}
        toggleModal={toggleModal}
        save={save}
      />
    </div>
  );
};

export default MyForms;
