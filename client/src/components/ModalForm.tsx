import { Button, Modal } from 'flowbite-react/lib/esm/components';
import React, { ReactElement } from 'react';

type ModalFormProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  form: ReactElement;
};

function ModalForm({ openModal, setOpenModal, form }: ModalFormProps) {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>{form}</Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={() => setOpenModal(false)}>
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
