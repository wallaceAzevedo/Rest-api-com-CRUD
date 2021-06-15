import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Produtos1623691995624 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Produtos",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"title",
                        type:"varchar",
                        
                    },
                    {
                        name:"price",
                        type:"number",
                        
                    },
                    {
                        name:"discription",
                        type:"varchar",
                        
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                        
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                        
                    },
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }

}
