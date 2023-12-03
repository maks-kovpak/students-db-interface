import { Button, TextInput } from 'flowbite-react/lib/esm/components';
import React, { useCallback, useContext } from 'react';
import StudentsService from '../services/students.service';
import { StudentsContext } from '../providers/StudentsProvider';

function CreateStudentForm() {
  const { updateStudents } = useContext(StudentsContext)!;

  const submitForm = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();

      const target = event.target as HTMLFormElement & {
        [k in keyof StudentWithoutId]: {
          value: string;
        };
      };

      StudentsService.create({
        first_name: target.first_name.value,
        last_name: target.last_name.value,
        birthday: target.birthday.value,
        group_number: parseInt(target.group_number.value),
      }).then(() => {
        target.reset();
        updateStudents();
      });
    },
    [updateStudents]
  );

  return (
    <form className="flex w-2/3 max-w-xl flex-col gap-4 mt-8" onSubmit={submitForm} method="post">
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-2">
        <TextInput id="first-name" name="first_name" type="text" placeholder="First Name" required />
        <TextInput id="last-name" name="last_name" type="text" placeholder="Last Name" required />
        <TextInput id="birthday" name="birthday" type="date" placeholder="Birthday" required />
        <TextInput id="group-number" name="group_number" type="number" placeholder="Group Number" required />
      </div>

      <Button type="submit" color="blue">
        Create
      </Button>
    </form>
  );
}

export default CreateStudentForm;
