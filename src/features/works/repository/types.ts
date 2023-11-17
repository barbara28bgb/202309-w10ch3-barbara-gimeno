import type WorkStructure from "../types";

export interface WorksRepository {
  getWorks: () => Promise<WorkStructure[]>;
}
