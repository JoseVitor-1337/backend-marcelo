import ChangeSearchSessionUseCase from "./ChangeSearchSessionUseCase";
import { UpdateSearchSessionIntoDatabase } from "@domain/search";

const ChangeSearchSession = new ChangeSearchSessionUseCase(
  new UpdateSearchSessionIntoDatabase()
);

export { ChangeSearchSession };
