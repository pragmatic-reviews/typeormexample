import { Column } from "typeorm";

export class Audit {

  @Column()
  created_by: string;

  @Column()
  created_on: Date;

  @Column()
  updated_by: string;

  @Column()
  updated_on: Date;

}