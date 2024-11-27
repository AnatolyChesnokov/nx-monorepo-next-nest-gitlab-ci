import { Module } from '@nestjs/common';
import { AuthModule } from '@monorepo-fullstack-app/auth';
import { DatabaseModule } from '@monorepo-fullstack-app/database';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [NotesController],
  providers: [NotesService],
  exports: [],
})
export class NotesModule {}
