import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Nft {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column()
    picture: string;
    @Column()
    owner: string;
    @CreateDateColumn()
    createdDate: Date;
    @UpdateDateColumn()
    updatedDate: Date;
}
