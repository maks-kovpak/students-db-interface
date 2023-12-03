type Student = {
  _id: string;
  first_name: string;
  last_name: string;
  birthday: string;
  group_number: number;
};

type StudentWithoutId = Omit<Student, '_id'>;

type Group = {
  _id: string;
  group_number: number;
};

type GroupWithoutId = Omit<Group, '_id'>;
