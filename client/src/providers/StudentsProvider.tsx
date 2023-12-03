import React, { createContext, useCallback, useEffect, useState } from 'react';
import StudentsService from '../services/students.service';

export type StudentsContextType = null | {
  students?: Student[];
  setStudents: (value: React.SetStateAction<Student[] | undefined>) => void;
  updateStudents: () => void;
};

export const StudentsContext = createContext<StudentsContextType>(null);

type StudentsProviderProps = {
  children?: React.ReactNode;
};

function StudentsProvider({ children }: StudentsProviderProps) {
  const [students, setStudents] = useState<Student[]>();

  const updateStudents = useCallback(() => {
    StudentsService.getAll().then((data) => setStudents(data));
  }, []);

  useEffect(updateStudents, [updateStudents]);
  
  return (
    <StudentsContext.Provider value={{ students, setStudents, updateStudents }}>{children}</StudentsContext.Provider>
  );
}

export default StudentsProvider;
