import { IGetAdminister } from "@protocols/adiminister/IGetAdminister";
import Administer from "@models/Administer";

class GetAdministerFromDatabase implements IGetAdminister {
  async find(id: string) {
    const administer = await Administer.findById(id).lean();

    return administer;
  }
}

export { GetAdministerFromDatabase };
