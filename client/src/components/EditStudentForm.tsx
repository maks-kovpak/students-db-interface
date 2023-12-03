import { TextInput } from 'flowbite-react/lib/esm/components';
import React, { RefObject, useCallback, useContext } from 'react';
import { StudentsContext } from '../providers/StudentsProvider.tsx';
import StudentsService from '../services/students.service.ts';

type EditStudentFormProps = {
  prefillData: Student;
  formRef: RefObject<HTMLFormElement>;
};

function EditStudentForm({ prefillData, formRef }: EditStudentFormProps) {
  const { updateStudents } = useContext(StudentsContext)!;

  const submitForm = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();

      const target = event.target as HTMLFormElement & {
        [k in keyof GroupWithoutId]: {
          value: string;
        };
      };

      StudentsService.update(prefillData._id, {
        first_name: target.first_name.value,
        last_name: target.last_name.value,
        birthday: target.birthday.value,
        group_number: parseInt(target.group_number.value),
      }).then(() => {
        target.reset();
        updateStudents();
      });
    },
    [updateStudents, prefillData]
  );

  return (
    <form ref={formRef} className="flex w-full flex-col gap-4" onSubmit={submitForm} method="post">
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-2">
        <TextInput
          id="first-name"
          name="first_name"
          type="text"
          defaultValue={prefillData.first_name}
          placeholder="First Name"
          required
        />

        <TextInput
          id="last-name"
          name="last_name"
          type="text"
          defaultValue={prefillData.last_name}
          placeholder="Last Name"
          required
        />

        <TextInput
          id="birthday"
          name="birthday"
          type="date"
          defaultValue={new Date(prefillData.birthday).toLocaleDateString('en-CA')}
          placeholder="Birthday"
          required
        />

        <TextInput
          id="group-number"
          name="group_number"
          type="number"
          defaultValue={prefillData.group_number}
          placeholder="Group Number"
          required
        />
      </div>
    </form>
  );
}

export default EditStudentForm;
