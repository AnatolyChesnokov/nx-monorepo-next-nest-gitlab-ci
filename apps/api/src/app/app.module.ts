import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@monorepo-fullstack-app/auth';
import { DatabaseModule } from '@monorepo-fullstack-app/database';
import { NotesModule } from '@monorepo-fullstack-app/notes';
import { OpenTelemetryModule } from '@monorepo-fullstack-app/opentelemetry';

@Module({
  imports: [
    OpenTelemetryModule.forRoot(),
    ConfigModule.forRoot(),
    AuthModule,
    DatabaseModule,
    NotesModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
