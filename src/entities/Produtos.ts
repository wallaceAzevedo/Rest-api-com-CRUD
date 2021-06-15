import { 
    Entity, 
    Column, 
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn
} from "typeorm";

import { v4 as uuid} from "uuid"


@Entity("Produtos")
class Produtos {

    @PrimaryColumn()
    id: string;

    @Column()
    title:string;

    @Column()
    price:number;

    @Column()
    discription: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
      if(!this.id)
      this.id = uuid();
    }
}

export { Produtos }