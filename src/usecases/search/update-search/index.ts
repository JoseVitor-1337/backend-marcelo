import UpdateSearchUseCase from "./UpdateSearchUseCase";
import { UpdateSearchFromDatabase } from "@domain/search";

const UpdateSearch = new UpdateSearchUseCase(new UpdateSearchFromDatabase());

export { UpdateSearch };
