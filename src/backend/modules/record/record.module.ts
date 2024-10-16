import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { RecordController } from './record.controller';
import { RecordInjectSymbol } from './record.repo';
import { RecordRepoPrisma } from './record.repo.prisma';
import { RecordServices } from './record.service';

@Module({
  imports: [PrismaModule],
  providers: [
    { provide: RecordInjectSymbol, useClass: RecordRepoPrisma },
    RecordServices,
  ],
  controllers: [RecordController],
  exports: [RecordInjectSymbol],
})
export class RecordModule {}
