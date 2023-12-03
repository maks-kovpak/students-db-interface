import { Button, Table } from 'flowbite-react';
import { useContext, useState } from 'react';
import { StudentsContext } from '../providers/StudentsProvider';
import StudentsService from '../services/students.service';
import EditStudentForm from './EditStudentForm.tsx';
import ModalForm from './ModalForm.tsx';

function StudentsTable() {
  const { students, updateStudents } = useContext(StudentsContext)!;
  const [editedStudent, setEditedStudent] = useState<Student>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>First Name</Table.HeadCell>
          <Table.HeadCell>Last Name</Table.HeadCell>
          <Table.HeadCell>Birthday</Table.HeadCell>
          <Table.HeadCell>Group Number</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete / Edit</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {students?.map((student) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={student._id}>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {student.first_name}
              </Table.Cell>
              <Table.Cell>{student.last_name}</Table.Cell>
              <Table.Cell>{new Date(student.birthday).toLocaleDateString()}</Table.Cell>
              <Table.Cell>{student.group_number}</Table.Cell>
              <Table.Cell className="flex gap-2">
                <Button color="failure" onClick={() => StudentsService.delete(student._id).then(updateStudents)}>
                  Delete
                </Button>

                <Button
                  color="warning"
                  onClick={() => {
                    setEditedStudent(student);
                    setOpenModal(true);
                  }}
                >
                  Edit
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <ModalForm
        openModal={openModal}
        setOpenModal={setOpenModal}
        form={<EditStudentForm prefillData={editedStudent!} />}
      />
    </>
  );
}

export default StudentsTable;
