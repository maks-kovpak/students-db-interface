import React, { createContext, useCallback, useEffect, useState } from 'react';
import GroupsService from '../services/groups.service';

export type GroupsContextType = null | {
  groups?: Group[];
  setGroups: (value: React.SetStateAction<Group[] | undefined>) => void;
  updateGroups: () => void;
};

export const GroupsContext = createContext<GroupsContextType>(null);

type GroupsProviderProps = {
  children?: React.ReactNode;
};

function GroupsProvider({ children }: GroupsProviderProps) {
  const [groups, setGroups] = useState<Group[]>();

  const updateGroups = useCallback(() => {
    GroupsService.getAll().then((data) => setGroups(data));
  }, []);

  useEffect(updateGroups, [updateGroups]);

  return <GroupsContext.Provider value={{ groups, setGroups, updateGroups }}>{children}</GroupsContext.Provider>;
}

export default GroupsProvider;
