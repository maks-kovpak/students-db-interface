import { TextInput } from 'flowbite-react/lib/esm/components';
import React, { RefObject, useCallback, useContext } from 'react';
import { GroupsContext } from '../providers/GroupsProvider.tsx';
import GroupsService from '../services/groups.service.ts';

type EditGroupFormProps = {
  prefillData: Group;
  formRef: RefObject<HTMLFormElement>;
};

function EditGroupForm({ prefillData, formRef }: EditGroupFormProps) {
  const { updateGroups } = useContext(GroupsContext)!;

  const submitForm = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();

      const target = event.target as HTMLFormElement & {
        [k in keyof GroupWithoutId]: {
          value: string;
        };
      };

      GroupsService.update(prefillData._id, {
        group_number: parseInt(target.group_number.value),
      }).then(() => {
        target.reset();
        updateGroups();
      });
    },
    [updateGroups, prefillData]
  );

  return (
    <form ref={formRef} className="flex w-full flex-col gap-4" onSubmit={submitForm} method="post">
      <div className="w-full">
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

export default EditGroupForm;
