import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';

@Entity()
export class Saecio {
  @ObjectIdColumn()
  _id: string;

  @Column({})
  nombre: string;

  @Column()
  apellido1: string;

  @Column()
  apellido2: string;

  @Column({unique: true})
  email: string
}