import { useState, useEffect } from "react";
import Modal from "react-modal";

const FormModal = (props: any) => {
  const [form, setForm] = useState("");
  const [description, setDescription] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [colorType, setColorType] = useState(0);
  const [redirect, setRedirect] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [fields, setFields] = useState([{ colorName: "", colorValues: "" }]);
  const [integration, setIntegration] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    if (props.selectedForm !== "") {
      const data = props.data.filter(
        (item: any) => item.id === props.selectedForm
      )[0];
      setForm(data.form);
      setDescription(data.description);
      setButtonText(data.buttonText);
      setColorType(data.colorType);
      setRedirect(data.redirect);
      setEmailAddress(data.emailAddress);
      setFields(data.fields);
      setIntegration(data.integration);
      setCode(data.code);
    } else {
      setForm("");
      setDescription("");
      setButtonText("");
      setColorType(0);
      setRedirect("");
      setEmailAddress("");
      setFields([{ colorName: "", colorValues: "" }]);
      setIntegration("");
      setCode("");
    }
  }, [props.selectedForm, props.data]);

  return (
    <div>
      <Modal
        appElement={document.getElementById("root") as HTMLElement}
        isOpen={props.isOpen}
        onRequestClose={props.toggleModal}
        contentLabel="My dialog"
        className="rounded-3xl bg-white w-5/6 mt-28 m-auto p-10 outline-none"
        // ariaHideApp={false}
      >
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p className="text-2xl">Form Settings</p>
            <div className="flex gap-3">
              <button
                className="bg-green-500 hover:bg-green-400 text-white text-xl w-20 h-9 rounded outline-none"
                onClick={props.save}
              >
                save
              </button>
              <button
                className="bg-red-500 hover:bg-red-400 text-white text-xl w-20 h-9 rounded outline-none"
                onClick={props.toggleModal}
              >
                cancel
              </button>
            </div>
          </div>

          <div className="flex gap-10 mt-7">
            <input
              value={form}
              onChange={(e) => setForm(e.target.value)}
              type="text"
              className="modal_input_text"
              placeholder="Form name eg My form"
            />

            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="modal_input_text flex-1"
              placeholder="Form description eg some words about this form"
            />
          </div>

          <div className="flex gap-5 mt-3">
            <input
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              type="text"
              className="modal_input_text flex-1"
              placeholder="Submit button text eg Add to cart"
            />
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                checked={colorType === 1 && true}
                onChange={(e) => {
                  setColorType(1);
                }}
                name="color"
                className="outline-none"
              />
              Button Color
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="color"
                checked={colorType === 2 && true}
                onChange={(e) => {
                  setColorType(2);
                }}
                className="outline-none"
              />
              Text Color
            </div>
          </div>

          <input
            value={redirect}
            onChange={(e) => setRedirect(e.target.value)}
            type="text"
            className="modal_input_text mt-3 w-1/2"
            placeholder="Form redirect eg https://mydomain.com/cart"
          />

          <input
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            type="text"
            className="modal_input_text mt-3"
            placeholder="Popup text eg Please enter your email address to continue"
          />

          <div className="flex flex-col mt-5">
            <p className="text-lg">Add Fields</p>
            <div className="flex gap-5 items-start">
              <div className="flex flex-col flex-1 gap-3 mt-3">
                {fields.map((item, counter) => {
                  return (
                    <div className="flex gap-5" key={counter}>
                      <input
                        type="text"
                        value={item.colorName}
                        onChange={(e) => console.log(e.target.value)}
                        className="modal_input_text flex-1"
                        placeholder="Name eg Color"
                      />
                      <input
                        type="text"
                        value={item.colorValues}
                        onChange={(e) => console.log(e.target.value)}
                        className="modal_input_text flex-1"
                        placeholder="Values (Array) eg Red,Green,Yellow"
                      />
                    </div>
                  );
                })}
              </div>
              <button className="outline-none mt-4">Add Field</button>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <p className="text-lg">Select Integration</p>
            <select
              className="border-gray-300 border-2 rounded outline-none"
              value={integration}
              onChange={(e) => setIntegration(e.target.value)}
            >
              <option value=""></option>
              <option value="integration1">integration1</option>
              <option value="integration2">integration2</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-5">
          <p className="text-lg">Copy Embed Code</p>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="modal_textarea mt-3"
            placeholder='<link href="//cdn.com/embedcode/form.css" rel="stylesheet" type="text/css">
<script src="https://cdn.com/react-widget/index.js"></script>
<div id="embed_form">
<form action="https://domain.com/post?u=4d145667f937ef84faa238a0d17e&amp;id=7e3aa26671" method="post" id="embedded-form" name="formName" target="_blank" novalidate>
</form>
</div>'
          ></textarea>
        </div>
      </Modal>
    </div>
  );
};

export default FormModal;
