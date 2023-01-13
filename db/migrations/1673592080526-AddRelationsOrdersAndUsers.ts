import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsOrdersAndUsers1673592080526 implements MigrationInterface {
    name = 'AddRelationsOrdersAndUsers1673592080526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_0217ac7bcae85ab193b1f88066\` ON \`movies_tags\``);
        await queryRunner.query(`DROP INDEX \`IDX_f8441bbc11afbe11cef7e5193a\` ON \`movies_tags\``);
        await queryRunner.query(`ALTER TABLE \`orders\` CHANGE \`user_id\` \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_a922b820eeef29ac1c6800e826a\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_a922b820eeef29ac1c6800e826a\``);
        await queryRunner.query(`ALTER TABLE \`orders\` CHANGE \`user_id\` \`user_id\` int NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_f8441bbc11afbe11cef7e5193a\` ON \`movies_tags\` (\`tag_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_0217ac7bcae85ab193b1f88066\` ON \`movies_tags\` (\`studio_id\`)`);
    }

}
