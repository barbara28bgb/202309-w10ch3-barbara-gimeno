import type WorkersStructure from "../types";

export interface WorkersRepository {
  getWorks: () => Promise<WorkersStructure[]>;
}
