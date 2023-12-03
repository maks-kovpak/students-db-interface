import { Button, TextInput } from 'flowbite-react/lib/esm/components';
import React, { useCallback, useContext } from 'react';
import { GroupsContext } from '../providers/GroupsProvider.tsx';
import GroupsService from '../services/groups.service.ts';

function CreateGroupForm() {
  const { updateGroups } = useContext(GroupsContext)!;

  const submitForm = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();

      const target = event.target as HTMLFormElement & {
        [k in keyof GroupWithoutId]: {
          value: string;
        };
      };

      GroupsService.create({
        group_number: parseInt(target.group_number.value),
      }).then(() => {
        target.reset();
        updateGroups();
      });
    },
    [updateGroups]
  );

  return (
    <form className="flex w-2/3 max-w-xl flex-col gap-4 mt-8" onSubmit={submitForm} method="post">
      <div className="w-full">
        <TextInput id="group-number" name="group_number" type="number" placeholder="Group Number" required />
      </div>

      <Button type="submit" color="blue">
        Create
      </Button>
    </form>
  );
}

export default CreateGroupForm;
