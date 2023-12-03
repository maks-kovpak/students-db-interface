import axios from 'axios';

class StudentsService {
  private static readonly API_URL = import.meta.env.VITE_API_URL + '/students';

  public static async getAll(): Promise<Student[]> {
    const response = await axios.get(StudentsService.API_URL);
    return response.data;
  }

  public static async create(student: StudentWithoutId) {
    await axios.post(StudentsService.API_URL + '/add', student);
  }

  public static async delete(_id: string) {
    await axios.delete(StudentsService.API_URL + `/${_id}`);
  }
}

export default StudentsService;
