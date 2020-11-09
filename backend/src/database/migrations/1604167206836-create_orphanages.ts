import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createOrphanages1604167206836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Metodo up :Realizar as alterações
        await queryRunner.createTable(new Table({
          name:'orphanages',
          columns:[
        {   
           name:  'id',
            type:'integer',
            unsigned:true,
            isPrimary:true,
            isGenerated:true,
            generationStrategy:'increment',
          },
          {
            name:'name',
            type:'varchar',

          },
          {
            name:'latitude',
            type:'decimal',
            scale:10,
          precision:2

          },
          {
            name:'longitude',
            type:'decimal',
            scale:10,
          precision:2
          },
          {
            name:'about',
            type:'text'
          },
          {
            name:'instructions',
            type:'text'
          },

          {
            name:'open_on_weekends',
            type:'boolean',
            default:false,
          },
          {
            name:'opening_hours',
            type:'varchar',

          },
          ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //Metodo down:Desfaz as alterações
        await queryRunner.dropTable('orphanages');
    }

}
