import { Button, Table } from 'flowbite-react';
import { useContext, useState } from 'react';
import { StudentsContext } from '../providers/StudentsProvider';
import StudentsService from '../services/students.service';

function StudentsTable() {
  const { students, updateStudents } = useContext(StudentsContext)!;
  const [editedID, setEditedID] = useState<string | null>(null);

  return (
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
              {editedID !== student._id ? student.first_name : <input type="text" defaultValue={student.first_name} />}
            </Table.Cell>
            <Table.Cell>
              {editedID !== student._id ? student.last_name : <input type="text" defaultValue={student.last_name} />}
            </Table.Cell>
            <Table.Cell>
              {editedID !== student._id ? (
                student.birthday
              ) : (
                <input type="date" defaultValue={student.birthday.split('T')[0]} />
              )}
            </Table.Cell>
            <Table.Cell>
              {editedID !== student._id ? (
                student.group_number
              ) : (
                <input type="number" defaultValue={student.group_number} />
              )}
            </Table.Cell>
            <Table.Cell className="flex gap-2">
              <Button color="failure" onClick={() => StudentsService.delete(student._id).then(updateStudents)}>
                Delete
              </Button>

              <Button
                color={editedID !== student._id ? 'warning' : 'success'}
                onClick={() => setEditedID(editedID ? null : student._id)}
              >
                {editedID !== student._id ? 'Edit' : 'Save'}
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default StudentsTable;
