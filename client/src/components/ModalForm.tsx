import { Button, Modal } from 'flowbite-react/lib/esm/components';
import React, { ReactElement, RefObject } from 'react';

type ModalFormProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  form: ReactElement;
  formRef: RefObject<HTMLFormElement>;
};

function ModalForm({ openModal, setOpenModal, form, formRef }: ModalFormProps) {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Edit record</Modal.Header>
        <Modal.Body>{form}</Modal.Body>
        <Modal.Footer>
          <Button
            color="blue"
            onClick={() => {
              formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
              setOpenModal(false);
            }}
          >
            Apply
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;
