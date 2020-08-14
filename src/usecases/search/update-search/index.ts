import UpdateSearchUseCase from "./UpdateSearchUseCase";
import { UpdateSearchFromDatabase } from "@domain/search/UpdateSearchFromDatabase";

const UpdateSearch = new UpdateSearchUseCase(new UpdateSearchFromDatabase());

export { UpdateSearch };
