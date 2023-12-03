import { Card } from 'flowbite-react';
import { useContext } from 'react';
import { GroupsContext } from '../providers/GroupsProvider.tsx';

function GroupsTable() {
  const { groups } = useContext(GroupsContext)!;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {groups?.map((g) => (
        <Card href="#" className="w-full text-center">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{g.group_number}</h5>
        </Card>
      ))}
    </section>
  );
}

export default GroupsTable;
