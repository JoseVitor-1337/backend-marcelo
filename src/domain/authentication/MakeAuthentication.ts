import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { IMakeAuthentication, IUserPayload } from "@protocols/authentication";
import Researcher from "@models/Researcher";
import Participant from "@models/Participant";
import { API_SECRET } from "src/config/enviroment";
import Administer from "@models/Administer";

class MakeAuthentication implements IMakeAuthentication {
  private async findParticipantByEmail(email: string) {
    let participant = await Participant.findOne({ email })
      .select("password")
      .lean();

    if (participant) {
      return {
        id: participant._id,
        password: participant.password,
      };
    }
  }

  private async findResearcherByEmail(email: string) {
    let researcher = await Researcher.findOne({ email })
      .select("password")
      .lean();

    if (researcher) {
      return {
        id: researcher._id,
        password: researcher.password,
      };
    }
  }

  private async findAdministerByEmail(email: string) {
    let administer = await Administer.findOne({ email })
      .select("password")
      .lean();

    if (administer) {
      return {
        id: administer._id,
        password: administer.password,
      };
    }
  }

  async findUserTypeByEmail(email: string) {
    let participant = await this.findParticipantByEmail(email);

    if (participant) {
      return participant;
    }

    let researcher = await this.findResearcherByEmail(email);

    if (researcher) {
      return researcher;
    }

    let administer = await this.findAdministerByEmail(email);

    if (administer) {
      return administer;
    } else {
      throw new Error("Email e/ou senha inválidos.");
    }
  }

  async hasMatchThePassword(userPassword: string, password: string) {
    return await bcrypt.compare(password, userPassword);
  }

  async generateAcessToken({ id }: IUserPayload) {
    const payload = {
      id,
    };

    const token = jwt.sign(payload, API_SECRET, {
      expiresIn: 100 * 60,
    });

    return token;
  }
}

export { MakeAuthentication };
