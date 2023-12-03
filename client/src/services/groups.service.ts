import axios from 'axios';

class GroupsService {
  private static readonly API_URL = import.meta.env.VITE_API_URL + '/groups';

  public static async getAll(): Promise<Group[]> {
    const response = await axios.get(GroupsService.API_URL);
    return response.data;
  }

  public static async create(group: GroupWithoutId) {
    await axios.post(GroupsService.API_URL + '/add', group);
  }

  public static async delete(_id: string) {
    await axios.delete(GroupsService.API_URL + `/${_id}`);
  }

  public static async update(_id: string, data: Partial<GroupWithoutId>) {
    await axios.patch(GroupsService.API_URL + `/${_id}`, data);
  }
}

export default GroupsService;
